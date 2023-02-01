import React from "react";
import { useImmer } from "use-immer";
import { useEffect } from "react";
import axios from "axios";
import NameTag from "Common/components/NameTag.jsx";

let hypenStart = window.location.href.indexOf("-") + 1;
let ampersandEnd = window.location.href.indexOf("&") + 1;

export default function EventsApprobal() {
  const [id, setIds] = useImmer({ orgId: "", userId: "" });
  const [userData, setUserData] = useImmer({
    fullName: "",
    position: "",
  });
  const [eventsProposal, setEventsProposal] = useImmer([]);
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
            if (e.position !== "Adviser") {
              if (e.position != "President") {
                if (
                  e.position === "Officer" &&
                  userData.position !== "President"
                ) {
                  highestPosition = "Officer";
                }
              } else highestPosition = "President";
            } else highestPosition = "Adviser";
          });
        } else {
          highestPosition = "Non-Member";
        }
        setUserData((draft) => {
          draft.position = highestPosition;
        });
      });

    axios.post("/getEventProposals", {}).then((res) => {
      console.log(res + " this is the response ");
      setEventsProposal(res.data);
    });
  }, []);

  function acceptApplicant(id, eventsProposal) {
    console.log(id);
    setEventsProposal(eventsProposal.filter((e) => e._id !== id));

    axios.post("/approveEventProposal", { _id: id }).then((res) => {
      alert("Event Proposal Approved");
    });
  }
  function declineApplicant(id, eventsProposal) {
    setEventsProposal(eventsProposal.filter((e) => e._id !== id));
    axios.post("/rejectEventProposal", { _id: id }).then((res) => {
      alert("Event Proposal Rejected");
    });
    // axios
    //   .post("/acceptApplicant", { id: id, email: applicant.email })
    //   .then(() => alert(`Applicant ${applicant.fullName} is rejected`));
  }
  return (
    <>
      <NameTag id={id} userData={userData} />
      <div className="table-cont">
        <table>
          <thead>
            <tr>
              <th>Event Title</th>
              <th>What</th>
              <th>Where</th>
              <th>When</th>
              <th>Proposed By</th>
              <th>Accept or Reject</th>
            </tr>
          </thead>
          <tbody>
            {eventsProposal.map((eventProposal) => (
              <tr key={eventProposal._id}>
                <td>{eventProposal.eventTitle}</td>
                <td>{eventProposal.what}</td>
                <td>{eventProposal.where}</td>
                <td>{`${new Date(eventProposal.when).toDateString()} ${new Date(
                  eventProposal.when
                ).toLocaleTimeString()}`}</td>
                <td>{eventProposal.fullName}</td>
                <td>
                  <button
                    className="acceptm-btn"
                    onClick={() =>
                      acceptApplicant(eventProposal._id, eventsProposal)
                    }
                  >
                    Accept
                  </button>
                  <button
                    className="rejectm-btn"
                    onClick={() =>
                      declineApplicant(eventProposal._id, eventsProposal)
                    }
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
