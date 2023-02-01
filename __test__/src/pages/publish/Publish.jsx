import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useImmer } from "use-immer";

import NameTag from "Common/components/NameTag.jsx";

let hypenStart = window.location.href.indexOf("-") + 1;
let ampersandEnd = window.location.href.indexOf("&") + 1;

export default function Publish() {
  const [id, setIds] = useImmer({ orgId: "", userId: "" });
  const [userData, setUserData] = useImmer({
    fullName: "",
    position: "",
  });
  const [publishData, setPublishData] = useState("");
  useEffect(() => {
    setIds((draft) => {
      draft.orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
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
    console.log(id.userId);
  }, []);
  return (
    <>
      <NameTag userData={userData} id={id} />
      <div className="input-announcement">
        <textarea
          className="announcement-txtarea"
          id="announcement-txtarea-id"
          placeholder="Write your announcement here..."
          cols="118"
          rows="16"
          onChange={(e) => {
            setPublishData(e.target.value);
          }}
        ></textarea>
      </div>
      <button
        onClick={() => {
          axios
            .post("/submitAnnouncement", {
              userId: id.userId,
              announcementData: publishData,
            })
            .then(() => alert("Announcement Submitted"));
        }}
        type="submit"
        className="publish-btn"
        style={{ verticalAlign: "middle" }}
      >
        <span>Publish</span>
      </button>
    </>
  );
}
