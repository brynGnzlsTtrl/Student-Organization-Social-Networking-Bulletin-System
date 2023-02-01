import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import DialogBox from "../../../common/DialogBox.jsx";

export default function VerifyAccount() {
  const [promptMessage, setPromptMessage] = useImmer({
    message: "",
    display: "none",
  });
  const [data, setData] = useImmer({ email: "", code: "" });

  function handlePromptMessage() {
    axios.post("/verifyAccount", {});
  }
  function handleSetData(e) {
    if ((e.target.name = "email")) {
      setData(draft => {draft.email = e.target.value});
    }else if((e.target.name = "passcoode")) {
      setData(draft => {draft.passcode = e.target.value});
    }
  }
  function handleSubmit(e) {
    axios.post("/verifyAccount", {data}).then(
      setPromptMessage(draft => {
        draft.message = data.message;
        draft.display = "block";
      })
    )
  }


  return (
    <div className="cont">
      <h2 className="cont__h2 h2">Verify Email Address</h2>
      <div className="cont__sub-cont sub-cont">
        <div className="sub-cont__input">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" onChange={handleSetData}/>
        </div>
        <div className="sub-cont__input">
          <label htmlFor="passcode">Passcode: </label>
          <input type="text" name= "passcode" id="passcode" onChange={handleSetData}/>
        </div>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}
