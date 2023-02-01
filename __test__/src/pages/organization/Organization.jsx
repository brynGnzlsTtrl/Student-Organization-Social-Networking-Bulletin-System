import React, { useState, useEffect, useMemo } from "react";
import { useImmer } from "use-immer";
import axios from "axios";
Document.title = "The Fuck ?";

import NameTag from "../../../common/components/NameTag.jsx";

let hypenStart = window.location.href.indexOf("-") + 1;
let ampersandEnd = window.location.href.indexOf("&") + 1;

export default function Organization() {
  const [id, setId] = useState({
    userId: "",
    orgId: "",
  });
  const [orgData, setOrgData] = useImmer({
    name: "",
    info: "",
    president: "",
    officers: [],
    members: [],
    applicants: [],
    coverImage: "",
  });
  const [userData, setUserData] = useState({
    _id: id,
    email: "",
    status: [],
  });
  const [applicantData, setApplicantData] = useImmer({
    orgId: "",
    userId: "",
    email: "",
    password: "",
    refNum: "",
  });
  const [nameTagData, setNameTagData] = useImmer({
    fullName: "",
    position: "",
  });
  const [popUpDisplay, setPopUpDisplay] = useState("");
  function handleSetApplicantData(e) {
    let name = e.target.name;
    setApplicantData((draft) => {
      draft[name] = e.target.value;
    });
  }
  async function submitAppication(email, password) {
    let res = await axios.post("/validate/verifyCredentials", {
      email: userData.email,
      password: applicantData.password,
    });
    console.log(res.data.status);
    if (res.data.status === "ok") {
      handleSubmitApplicationForm();
    } else {
      alert(res.data.msg);
    }
  }
  function handleSubmitApplicationForm() {
    console.log(applicantData)
    axios.post("/submitApplicationForm", { ...applicantData }).then((res) => {
      const { status, msg } = res.data;
      alert(msg);
      setPopUpDisplay("none");
    });
  }

  useEffect(() => {
    setId((draft) => {
      draft.userId = window.location.href.slice(ampersandEnd);
      draft.orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
    });
    setApplicantData((draft) => {
      draft.orgId = window.location.href.slice(hypenStart, ampersandEnd - 1)
      draft.userId = window.location.href.slice(ampersandEnd);
    });
    console.log(id);

    axios.post("/query/getOrganization", { id: id.orgId }).then((response) => {
      if (response.status != "error") {
        setOrgData({ ...response.data });
      } else alert(response.data.msg);
    });
    axios.post("/query/getUser", { id: id.userId }).then((response) => {
      if (response.status != "error") setUserData({ ...response.data });
      else alert(response.data.msg);
      setApplicantData((draft) => {
        draft.email = response.data.email;
      });
    });

    axios
      .post("/query/getUser", { id: window.location.href.slice(ampersandEnd) })
      .then((res) => {
        const { firstName, lastName, organizations } = res.data;
        console.log(res.data);

        setNameTagData((draft) => {
          draft.fullName = `${firstName} ${lastName}`;
        });
        let highestPosition = "Member"
        if (organizations.length !== 0) {
          organizations.map((e) => {
            if (e.position != "President") {
              if (
                e.position === "Officer" &&
                nameTagData.position !== "President"
              ) {
                highestPosition = "Officer";
              }
            } else highestPosition = "President";
          });
        } 
        setNameTagData((draft) => {
          draft.position = highestPosition;
        });
      });
  }, []);

  // const [applyData, setApplyData] = useState({
  //   email: email,
  // });
  console.log(orgData.coverImage);
  function showDialog() {
    alert("Application Submitted");
  }
  // function submitApplicaton() {}

  return (
    <>
      <NameTag id={id} userData={nameTagData} />
      <div className="cover">
        {orgData.coverImage !== "" ? (
          <img
            src={require(`Assets/images/${orgData.coverImage}.jpg`)}
            width="100%"
            alt="org event image"
          />
        ) : (
          <img />
        )}
        <button
          type="submit"
          className="applynow-btn"
          onClick={() => {
            setPopUpDisplay("block");
          }}
          style={{ verticalaAlign: "middle" }}
        >
          <span>Submit an application</span>
        </button>
      </div>

      <div className="form-popup" id="myForm" style={{ display: popUpDisplay }}>
        <form action="/action_page.php" className="form-container">
          <div className="details-rf">
            <h3>Submit an application</h3>
            <br />
            <label htmlFor="email">Email</label>
            <input
              className="input-details-rf"
              type="text"
              placeholder="example@bpsu.edu.ph"
              name="email"
              value={userData.email}
              disabled
              required
            />
            <label htmlFor="psw">Password</label>
            <input
              className="input-details-rf"
              type="password"
              name="password"
              onChange={handleSetApplicantData}
              required
            />

            <label htmlFor="refno">Membership fee payment RN</label>
            <input
              className="input-details-rf"
              type="text"
              placeholder="reference number"
              name="refNum"
              onChange={handleSetApplicantData}
              required
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(applicantData);
              let isApplicationFormFilled = Object.values(applicantData).every(
                (val) => val !== ""
              );
              if (isApplicationFormFilled) {
                submitAppication();
              } else alert("Please Fill up the Form");
            }}
            id="submitApp"
            type="submit"
            className="submit-rf-btn"
          >
            Submit
          </button>
          <button
            type="button"
            className="cancel-rf-btn"
            onClick={() => setPopUpDisplay("none")}
          >
            Cancel
          </button>
        </form>
      </div>

      <div className="display-row">
        <div
          className="display-column"
          style={{ backgroundColor: "#E7E9EB" }}
        ></div>
        <div
          className="display-column"
          style={{ backgroundColor: "#E7E9EB" }}
        ></div>
      </div>
    </>
  );
}
