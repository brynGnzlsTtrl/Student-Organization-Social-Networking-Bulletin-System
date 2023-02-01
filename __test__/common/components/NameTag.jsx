import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useImmer } from "use-immer";

import "Common/styles/components/_nameTag.scss";
let hypenStart = window.location.href.indexOf("-") + 1;
let ampersandEnd = window.location.href.indexOf("&") + 1;
let orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
let userId = window.location.href.slice(ampersandEnd);
export default function Test({ userData, id }) {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "5" }}>
      <div className="header">
        <a href="/bulletin.html">Student Organization Bulletin</a>
        <div className="header-right">
          <h4>
            Bataan Peninsula State University
            <br />
            Main Campus
          </h4>
        </div>
        <div className="logo">
          <img
            src={require("Assets/svg/bpsulogo.svg")}
            alt="bpsu logo"
            style={{ width: "75px", height: "75px" }}
          />
        </div>
      </div>
      <div className="navbar">
        {userData.position === "President" ? (
          <div className="navbar__sub-cont">
            <img
              src={require("Assets/svg/publish-icon.svg")}
              alt="publish icon"
              style={{ width: "27px", height: "28px" }}
            />
            <a href={`/publish-&${id.userId}`}>Publish Announcement</a>
          </div>
        ) : null}
        {userData.position === "Officer" ? (
          <div className="navbar__sub-cont">
            <img
              src={require("Assets/svg/submit-icon.svg")}
              alt="submit icon"
              style={{ width: "27px", height: "28px" }}
            />
            <a href={`/eventsProposal-&${userId}`}>Submit Event Proposal</a>
          </div>
        ) : null}
        {userData.position === "Adviser" || userData.position === "President" ? (
          <div className="navbar__sub-cont">
            <img
              src={require("Assets/svg/approve-icon.svg")}
              alt="approve icon"
              style={{ width: "27px", height: "28px" }}
            />
            <a href={`/eventsApproval-&${userId}`}>Approve Event Proposal</a>
          </div>
        ) : null}
        {userData.position === "President" ? (
          <div className="navbar__sub-cont">
            <img
              src={require("Assets/svg/approve-m-icon.svg")}
              alt="approve icon"
              style={{ width: "27px", height: "28px" }}
            />
            <a href={`/membersApproval-63d323d709a17736e5728637&${id.userId}`}>
              Approve Membership Application
            </a>
          </div>
        ) : null}

        <div style={{ display: "none" }} className="navbar__sub-cont">
          <img
            src={require("Assets/svg/dm-icon.svg")}
            alt="dm icon"
            style={{ width: "27px", height: "28px" }}
          />
          <a href="#">Direct Message</a>
        </div>
        {!window.location.href.includes("organization") ? (
          <div className="navbar__sub-cont">
            <img
              src={require("Assets/svg/org-icon.svg")}
              alt="org icon"
              style={{ width: "27px", height: "28px" }}
            />
            <a
              href={`/organizations-&${window.location.href.slice(
                window.location.href.indexOf("&") + 1
              )}`}
            >
              Organizations
            </a>
          </div>
        ) : null}
        <div className="navbar__profile">
          <div className="user-icon navbar__sub-contx">
            <img
              src={require("Assets/images/pp-icon.png")}
              alt="profile icon"
              style={{ width: "45px", height: "45px" }}
            />
          </div>
          <div className="user-name navbar__sub-contx">
            {userData.position !== "" ? (
              <h3 className="user-fname">{userData.fullName}</h3>
            ) : (
              <h3></h3>
            )}
            {userData.position !== "" ? (
              <p className="user-position">{userData.position}</p>
            ) : (
              <p></p>
            )}
          </div>
          <button
            className="rejectm-btn"
            onClick={() => (window.location.href = "/")}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
