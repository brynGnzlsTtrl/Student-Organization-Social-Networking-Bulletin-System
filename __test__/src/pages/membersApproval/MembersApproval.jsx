import React from "react";
import { useImmer } from "use-immer";
import { useEffect } from "react";
import axios from "axios";
import NameTag from "Common/components/NameTag.jsx";

let hypenStart = window.location.href.indexOf("-") + 1;
let ampersandEnd = window.location.href.indexOf("&") + 1;

export default function MembersApproval() {
  const [id, setIds] = useImmer({ orgId: "", userId: "" });
  const [userData, setUserData] = useImmer({
    fullName: "",
    position: "",
  });
  const [applicants, setApplicants] = useImmer([]);
  useEffect(() => {
    setIds((draft) => {
      draft.orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
      draft.userId = window.location.href.slice(ampersandEnd);
    });
    axios
      .post("/query/getUser", { id: window.location.href.slice(ampersandEnd) })
      .then((res) => {
        const { firstName, lastName, organizations } = res.data;

        setUserData((draft) => {
          draft.fullName = `${firstName} ${lastName}`;
        });
        let highestPosition;
        if (organizations.length !== 0) {
          highestPosition = "Member";
          organizations.map((e) => {
            if (e.position != "President") {
              if (
                e.position === "Officer" &&
                userData.position !== "President"
              ) {
                highestPosition = "Officer";
              }
            } else highestPosition = "President";
          });
        } else {
          highestPosition = "Non-Member";
        }
        setUserData((draft) => {
          draft.position = highestPosition;
        });
      });

    axios.post("/getApplicants", {}).then((res) => {
      console.log(res + " this is the response ");
      setApplicants(res.data);
    });
  }, []);

  function acceptApplicant(id, applicant) {
    setApplicants(applicants.filter((e) => e.id !== id));
    axios
      .post("/acceptApplicant", { id: id, email: applicant.email })
      .then(() => alert(`Applicant ${applicant.fullName} is accepted to DOST`));
  }
  function declineApplicant(id, applicant) {
    setApplicants(applicants.filter((e) => e.id !== id));
    axios
      .post("/rejectApplicant", { id: id, email: applicant.email })
      .then(() => alert(`Applicant ${applicant.fullName} is rejected`));
  }
  return (
    <>
      <NameTag id={id} userData={userData} />
      <div className="table-cont">
        <table>
          <thead>
            <tr>
              <th>Student number</th>
              <th>Applicant name</th>
              <th>Membership payment fee RN</th>
              <th>email</th>
              <th>Accept/Reject</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td>{applicant.studentNumber}</td>
                <td>{applicant.fullName}</td>
                <td>{applicant.refNum}</td>
                <td>{applicant.emails}</td>
                <td>
                  <button
                    className="acceptm-btn"
                    onClick={() => acceptApplicant(applicant.id, applicant)}
                  >
                    Accept
                  </button>
                  <button
                    className="rejectm-btn"
                    onClick={() => declineApplicant(applicant.id, applicant)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
