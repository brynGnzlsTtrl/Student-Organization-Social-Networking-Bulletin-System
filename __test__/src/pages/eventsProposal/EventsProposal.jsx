import React from "react";
import { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import axios from "axios";

import NameTag from "Common/components/NameTag.jsx";

let hypenStart = window.location.href.indexOf("-") + 1;
let ampersandEnd = window.location.href.indexOf("&") + 1;

export default function EventProposal() {
  const [id, setIds] = useImmer({ orgId: "", userId: "" });
  const [userData, setUserData] = useImmer({
    fullName: "",
    position: "",
  });
  const [eventProposalData, setEventProposalData] = useImmer({
    eventTitle: "",
    what: "",
    where: "",
    when: "",
    userId: "",
  });
  useEffect(() => {
    setIds((draft) => {
      draft.orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
      draft.userId = window.location.href.slice(ampersandEnd);
    });
    setEventProposalData((draft) => {
      draft.userId = window.location.href.slice(ampersandEnd);
    });

    axios
      .post("/query/getUser", { id: window.location.href.slice(ampersandEnd) })
      .then((res) => {
        const { firstName, lastName, organizations } = res.data;
        console.log(res.data);

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
    console.log(eventProposalData);
  }, []);
  function handleEventProposalData(e) {
    console.log(e.target.name)
    setEventProposalData(draft => {
        draft[e.target.name] = e.target.value;
    })
  }
  function submitEvent() {
    axios.post("/submitEventProposal", {...eventProposalData}).then(() => {
        alert(`Event Proposal Submitted to the Adviser Of BPSU-DOST`)
    })
  }

  return (
    <>
      <NameTag id={id} userData={userData} />
      <div className="submit-container">
        <div className="submit-inner">
          <span style={{ textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "Arial",
                fontSize: "medium",
                color: "black",
              }}
            >
              Submit an Event Proposal
            </h1>
          </span>
          <div className="content">
            <form action="#">
              <br />
              <br />
              <div className="event-details">
                <span className="details">Event Title</span>
                <input
                name="eventTitle"
                onChange={handleEventProposalData}
                  className="event-input-details"
                  size="78"
                  placeholder="Proposed title"
                  type="text"
                  required
                />

                <span className="details">What?</span>
                <input
                name="what"
                onChange={handleEventProposalData}
                  className="event-input-details"
                  size="78"
                  placeholder="Description of the event"
                  type="text"
                  required
                />

                <span className="details">Where?</span>
                <input
                name= "where"
                onChange={handleEventProposalData}
                  className="event-input-details"
                  size="78"
                  placeholder="Proposed venue"
                  type="text"
                  required
                />

                <span className="details">When?</span>
                <label htmlFor="event-when">
                  (Proposed date and time of the event):
                </label>
                <br />
                <input
                name="when"
                onChange={handleEventProposalData}
                  className="event-input-details"
                  type="datetime-local"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <input
        className="submit-event-btn"
        style={{ verticalAlign: "middle" }}
        type="submit"
        onClick={(_) => {
          console.log(eventProposalData);
          submitEvent()
        }}
      ></input>
    </>
  );
}
