const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const { connectToDb, getDb } = require("./src/database/db");
const { ObjectId } = require("mongodb");
const crypto = require("crypto");

//---------- Views Set Up ----------//
app.set("view engine", "ejs");
app.set("views", "./__test__/src/views");

//---------- Initialize Database and Local Server ----------//
let db; // database
connectToDb((err) => {
  if (!err) {
    console.log("Database Connection Established");
    app.listen(7000, () => {
      console.log("Local Server Established: Listening on port 7000");
    });
    db = getDb();
  }
});

//---------- Midleware ----------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(/.+\.html/, (req, res) => {
  res.status(403).end("403 Forbidden");
});
app.use(express.static(path.resolve(__dirname, "dist")));

//--------- Testing Arae ----------//
app.post("/test", (req, res) => {
  db.collection("organizations").insertOne({
    name: "United Architects of the Philippines Student Auxiliary",
    info: null,
    members: [],
    officers: [],
    president: null,
    applicant: [],
    coverImage: "UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU",
  });
  res.end();
});

//---------- POST REQUEST ---------//

app.post("/requestPasscode", (req, res) => {
  let data = req.body;
  let duration = 15; // Amount of time (minutes) for the verification passcdeo to be valid
  const passcode = generatePasscode(); // Generated passcode

  // Delete existing passcode
  db.collection("unverifiedEmails").deleteMany({ email: data.email });

  if (emailVerify(data.email)) {
    sendVerificationPasscode(data.email, passcode)
      .then(() => {
        setTimeout(() => {
          db.collection("unverifiedEmails").deleteOne({ email: data.email });

          console.log(
            `Verfication Passcode for ${data.email} had been expired`
          );
        }, duration * 1000 * 60);
        res.send({
          status: "ok",
          msg: `Verification Passcode is Sent to ${data.email}. Valid for ${duration} mins.`,
        });
        db.collection("unverifiedEmails").insertOne({
          email: data.email,
          passcode: passcode,
          date: new Date(),
        });
      })
      .catch((e) => {
        console.error("Error message: " + e);
        res.send({
          status: "error",
          msg: "Email Not sent !, Unstable Connection !",
        });
      });
  }
});
app.post("/verifyEmail", async (req, res) => {
  const data = req.body;

  let id;
  let unverifiedEmail = await db
    .collection("unverifiedEmails")
    .findOne({ email: data.email });
  let isDuplicate = await db
    .collection("verifiedEmails")
    .findOne({ email: data.email })
    .then((result) => {
      if (result != null) id = result._id.toString();
      return result === null ? false : true;
    });
  if (unverifiedEmail !== null) {
    if (unverifiedEmail.email === data.email && isDuplicate == false) {
      unverifiedEmail.passcode = unverifiedEmail.passcode.join("");
      if (data.passcode === unverifiedEmail.passcode) {
        let password = generatePassword(4);
        sendPassword(data.email, password);
        db.collection("verifiedEmails").insertOne({
          email: data.email,
          password: password,
          date: new Date(),
        });
        db.collection("unverifiedEmails").deleteMany({ email: data.email });
        res.send({
          status: "ok",
          msg: `Sign In credential sent to ${data.email}`,
        });
      } else res.send({ status: "unverified", msg: "Passcode do not match !" });
    } else {
      res.send({
        status: "unverified",
        msg: `${data.email} is already verified !`,
      });
    }
  } else {
    res.send({
      status: "unverified",
      msg: "No pending email verification, Sign Up First ! ",
    });
  }
});
app.post("/signIn", async (req, res) => {
  const data = req.body;
  const verifiedEmail = await db
    .collection("verifiedEmails")
    .findOne({ email: data.email });
  //await db.collectoin("users").
  if (verifiedEmail !== null) {
    if (
      verifiedEmail.email === data.email &&
      verifiedEmail.password === data.password
    ) {
      let isAccountSet;
      let isIncludedInOrganization;

      await db
        .collection("users")
        .findOne({ _id: verifiedEmail._id })
        .then((result) => {
          if (result === null) {
            isIncludedInOrganization = false;
          } else {
            result.organizations.length !== 0
              ? (isIncludedInOrganization = true)
              : (isIncludedInOrganization = false);
          }
        });
      await db
        .collection("users")
        .findOne({ email: data.email })
        .then((result) => {
          isAccountSet = result === null ? false : true;
        });
      if (!isAccountSet) {
        // Set Up an account if it is not set
        res.send({
          status: "ok",
          href: `/setUpAccount${verifiedEmail._id.toString()}`,
        });
        return;
      }
      if (!isIncludedInOrganization) {
        res.send({
          status: "ok",
          href: `/organizations-&${verifiedEmail._id.toString()}`,
        });
      } else
        res.send({
          status: "ok",
          href: `/organizations-&${verifiedEmail._id.toString()}`,
        });
    } else res.send({ status: "failed", msg: "Incorrect Password" });
  } else
    res.send({ status: "failed", msg: "No existing users , Please sign up !" });
});
app.post("/submitApplicationForm", async (req, res) => {
  console.log("resoponing " + req.body.data);
  const { email, password, refNum, orgId, userId } = req.body;
  let userInfo = await db.collection("users").findOne({ email: email });
  let orgInfo = await db
    .collection("organizations")
    .findOne({ _id: ObjectId(orgId) });
  if (orgInfo !== null) {
    if (userInfo !== null) {
      await db
        .collection("applicants")
        .insertOne({
          userId: userInfo._id,
          refNum: refNum,
          orgId: orgInfo._id,
          status: "pending",
        })
        .then((result) => {
          db.collection("organizations").updateOne(
            { _id: ObjectId(orgId) },
            { $push: { applicants: result.insertedId } }
          );
        })
        .catch((e) => console.log(e));
      res.send({
        status: "ok",
        msg: `Application for ${userInfo.firstName} ${userInfo.lastName} is sent to ${orgInfo.name}`,
      });
    } else {
      res.send({
        status: "error",
        msg: `No users exists with an id of ${userId}`,
      });
    }
  } else {
    res.send({
      status: "ok",
      msg: `No organizations exists with an id of${orgId}`,
    });
  }
});
app.post("/approveEventProposal", async (req, res) => {
  const { _id } = req.body;
  await db
    .collection("proposals")
    .updateOne({ _id: ObjectId(_id) }, { $set: { status: "Approve" } });
  res.send({});
});
app.post("/rejectEventProposal", async (req, res) => {
  const { _id } = req.body;
  await db
    .collection("proposals")
    .updateOne({ _id: ObjectId(_id) }, { $set: { status: "Rejected" } });
  res.send({});
});

//---------- base page entry point -----------//

app.get("/signUp", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/signup.html"));
});
app.get("/verifyAccount", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/verifyAccount.html"));
});
app.get("/", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "dist/signIn.html"));
});
app.get("/verifyEmail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/verifyEmail.html"));
});
app.get("/setUpAccount*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/setUpAccount.html"));
});
app.get("/organizations-*&*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/organizations.html"));
});
app.get("/membersApproval-*&*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/membersApproval.html"));
});
app.get("/eventsProposal-*&*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/eventsProposal.html"));
});
app.get("/eventsApproval-*&*", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/eventsApproval.html"));
});
app.get("/publish-*$*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/publish.html"));
});

//---------- Sub Orgs ----------//
const orgsRoute = ["/bpsudost-*&*", "/bpsuaciop-*&"];
app.get("/org-*&*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/organization.html"));
});

//---------- Query ----------//
app.post("/query/getVerifiedEmail", async (req, res) => {
  let id = req.body;
  let user = await db
    .collection("verifiedEmails")
    .findOne({ _id: ObjectId(id) });
  res.send({ email: user.email });
});
app.post("/query/addUser", async (req, res) => {
  let { id, ...userInfo } = req.body;
  console.log(id);
  db.collection("users")
    .insertOne({ _id: ObjectId(id), ...userInfo, organizations: [] })
    .then(() => {
      console.log("sent");
      console.log(`userInfo: ${userInfo.email}`);
    })
    .catch((e) => {
      res.send({
        status: "error",
        msg: "User already set up an account",
        href: `/organizations-&${id}`,
      });
      return;
    });
  db.collection("officials")
    .findOne({ email: userInfo.email })
    .then((res) => {
      if (res !== null) {
        db.collection("users").updateOne(
          { email: userInfo.email },
          {
            $push: {
              organizations: { orgId: res.orgId, position: res.position },
            },
          }
        );
      }
    });

  res.send({
    status: "ok",
    msg: "User Details Added",
    href: `/organizations-&${id}`,
  });
});
app.post("/query/getOrganization", async (req, res) => {
  let { id } = req.body;
  let orgData = await db.collection("organizations").findOne({
    _id: ObjectId(id),
  });
  if (orgData) res.send(orgData);
  else res.send({ status: "error", msg: `No organizations with an of ${id}` });
});
app.post("query/applyForOrganization", (req, res) => {
  const { orgId } = req.body;
  if (orgId) {
    db.colleciton("orgnanizations")
      .findOne({ _id: ObjectId(orgId) })
      .then((result) => {
        if (result) res.send({ ...result });
        else
          res.send({
            status: "error",
            msg: `No existing Organization with an ID of ${orgId}`,
          });
      });
  } else
    res.send({
      status: "error",
      msg: `No existing Organization with an ID of ${orgId}`,
    });
});
app.post("/query/getUser", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  let user;
  console.log("entered");

  if (id) user = await db.collection("users").findOne({ _id: ObjectId(id) });
  else {
    res.send({ status: "error", msg: `No existing user with an id of ${id}` });
    return;
  }
  if (user) res.send({ ...user });
  else
    res.send({ status: "error", msg: `No existing user with an id of ${id}` });
});

//---------- Draft ----------//
app.post("/getApplicants", async (req, res) => {
  let applicantsInfo = [];
  let applicants = await db
    .collection("applicants")
    .find({
      orgId: ObjectId("63d323d709a17736e5728637"),
      status: "pending",
    })
    .toArray();
  console.log(applicants);
  for (let applicant of applicants) {
    let tempUser = await db.collection("users").findOne(
      { _id: applicant.userId },
      {
        projection: {
          firstName: 1,
          lastName: 1,
          studentNumber: 1,
          email: 1,
        },
      }
    );
    console.log(tempUser)
    let userRefNum = applicants.find((e) => e.userId).refNum;
    tempUser.fullName = `${tempUser.firstName} ${tempUser.lastName}`;
    tempUser.id = applicant._id.toString();
    delete tempUser.firstName;
    delete tempUser.lastName;
    delete tempUser._id;
    applicantsInfo.push({ ...tempUser, refNum: userRefNum });
    console.log(applicantsInfo);
    console.log("hello");
  }
  res.send(applicantsInfo);
});
app.post("/getEventProposals", async (req, res) => {
  let proposalInfo = [];
  let proposals = await db
    .collection("proposals")
    .find({
      orgId: ObjectId("63d323d709a17736e5728637"),
      status: "pending",
    })
    .toArray();
  console.log(proposals, "proposals");
  for (let proposal of proposals) {
    let tempUser = await db.collection("users").findOne(
      { _id: ObjectId(proposal.userId) },
      {
        projection: {
          firstName: 1,
          lastName: 1,
          email: 1,
        },
      }
    );
    console.log(`user Id: ${tempUser}`);
    tempUser.fullName = `${tempUser.firstName} ${tempUser.lastName}`;
    delete tempUser.firstName;
    delete tempUser.lastName;
    delete tempUser._id;
    proposalInfo.push({ ...tempUser, ...proposal });
    console.log(proposalInfo);
    console.log("hello");
  }
  res.send(proposalInfo);
});

app.post("/acceptApplicant", async (req, res) => {
  const { id, email } = req.body;
  await db
    .collection("applicants")
    .updateOne({ _id: ObjectId(id) }, { $set: { status: "accepted" } });
  await db.collection("users").updateOne(
    { email },
    {
      $push: {
        organizations: {
          orgId: ObjectId("63d323d709a17736e5728637"),
          position: "Members",
        },
      },
    }
  );
  res.send("sucessful");
});
app.post("/rejectApplicant", async (req, res) => {
  const { id, email } = req.body;
  await db
    .collection("applicants")
    .updateOne({ _id: ObjectId(id) }, { $set: { status: "rejected" } });
  res.send("sucessful");
});
app.post("/submitEventProposal", (req, res) => {
  const { eventTitle, userId, what, when, where } = req.body;
  db.collection("proposals").insertOne({
    ...req.body,
    orgId: ObjectId("63d323d709a17736e5728637"),
    status: "pending",
  });
  res.send("");
});
app.post("/submitAnnouncement", (req, res) => {
  const { userId, announcementData } = req.body;
  db.collection("announcements").insertOne({
    userId: ObjectId(userId),
    announcement: announcementData,
    date: new Date(),
  });
  res.send();
});

//---------- Validtaion ----------//
app.post("/validate/verifyUser", async (req, res) => {
  let { id, email } = req.body;
  if (id != null) {
    db.collection("verifiedEmails")
      .findOne({ _id: ObjectId(id) })
      .then((result) => {
        if (result) res.send({ status: "ok", msg: "User status verified" });
        else
          res.send({
            status: "error",
            msg: "Something went wrong in the database",
          });
      });
  } else
    res.send({ status: "error", msg: "No exsisting User in the system !" });
});
app.post("/validate/verifyCredentials", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  let user = await db
    .collection("verifiedEmails")
    .findOne({ email: email, password: password });
  console.log(user);
  if (user) {
    res.send({ status: "ok", msg: "User Identity Verified" });
  } else
    res.send({
      status: "error",
      msg: `Invalid Credentials !`,
    });
});

app.all("*", (req, res) => {
  console.error("Invalid Url " + req.originalUrl);
  res.status(406).send(`<h1>Invalid Url</h1>`);
});

//---------- LIBLARY ----------//

// Valitdate Email Using Reggex
function emailVerify(email) {
  let emailReggex = /\w{6,}@bpsu.edu.ph/; // ---> Format for a BPSU University
  return emailReggex.test(email);
}

// Send passcode to email for verification

const { createTransport } = require("nodemailer");
const dotenv = require("dotenv");
const { verify } = require("crypto");

dotenv.config();

let transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendVerificationPasscode(email, passcode) {
  const data = await ejs.renderFile(
    path.resolve(__dirname, "./src/views/mailCode.ejs"),
    { passcode: passcode }
  );
  return transporter
    .sendMail({
      from: `"NO-REPLY" <${process.env.EMAIL_USERNAME}>`,
      to: `${email}`,
      subject: `SOSNBS Account Verification Passcode`,
      html: data,
    })
    .then(() => {
      console.log(`Email is Sent to ${email}`);
    });
}

async function sendPassword(email, password) {
  const data = await ejs.renderFile(
    path.resolve(__dirname, "./src/views/mailPassword.ejs"),
    { email: email, password: password }
  );

  return transporter
    .sendMail({
      from: `"NO-REPLY" <${process.env.EMAIL_USERNAME}>`,
      to: `${email}`,
      subject: `SOSNBS User Credential`,
      html: data,
    })
    .then(() => console.log(`Email is sent to ${email}`));
}

// Generate Random Numbers
function generatePasscode() {
  const rNum = () => Math.floor(Math.random() * 9) + 1;
  return Array(rNum(), rNum(), rNum(), rNum());
}

// Genrate Ranndom strings (alphanumeric)
function generatePassword(num) {
  return crypto.randomBytes(Math.floor(num)).toString("hex");
}

// Testing Area

// expected output:
