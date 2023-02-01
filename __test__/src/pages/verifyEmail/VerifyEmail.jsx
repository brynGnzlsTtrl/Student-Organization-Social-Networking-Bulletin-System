import React from "react";
import { useState } from "react";
import { useImmer, useImmerReducer } from "use-immer";
import axios from "axios";

import ImgOptimize from "Common/utils/ImgOptimize.jsx";
import getBaseClass from "Common/lib/bem.js";

import Ellipse from "Common/components/Ellipse.jsx";
import GlassCont from "Common/components/GlassCont.jsx";



function dialogPropsReducer(dialogProps, action) {
  switch (action.type) {
    case "dialogErrorMsg":
      return (dialogProps = {
        display: "block",
        color: "#e63946",
        msg: action.msg,
      });
    case "dialogMsg":
      return (dialogProps = {
        display: "block",
        color: "var(--fg_5)",
        msg: action.msg,
      });
    case "hideDialog":
      return (dialogProps = {
        display: "none",
        color: "#e63946",
        message: "",
      });
    default:
      throw new Error("Uknonw action.type: " + action.type);
  }
}

export default function VerifyEmail() {
  const className = "log-in-form__sign-in sign-in";
  const [credential, setCredential] = useImmer({ email: "", passcode: "" });
  const [dialogProps, dialogPropsDispatch] = useImmerReducer(
    dialogPropsReducer,
    {
      msg: "",
      color: "",
      display: "",
    }
  );

  function handleSetCredential(e) {
    handleHideDialog();
    if (e.target.name === "email") {
      setCredential((draft) => {
        draft.email = e.target.value;
      });
    } else if (e.target.name === "passcode") {
      setCredential((draft) => {
        draft.passcode = e.target.value;
      });
    }

  }

  function handleDialogMsg(msg) {
    dialogPropsDispatch({ type: "dialogMsg", msg: msg });
  }
  
  function handleDialogErrorMsg(msg) {
    dialogPropsDispatch({ type: "dialogErrorMsg", msg: msg });
  }
  function handleHideDialog() {
    dialogPropsDispatch({ type: "hideDialog" });
  }

  function handleVerifyEmail() {
    handleDialogMsg(`Verifying ${credential.email}`);
    let validEmailFormat = /\w{6,}(@bpsu.edu.ph)$/;
    if (credential.email.match(validEmailFormat)) {
      axios
        .post("/verifyEmail", {
          email: credential.email,
          passcode: credential.passcode,
        })
        .then((response) => {
          if (response.data.status === "ok") {
            console.log(response.data);
            // ---- Change -------//
            // window.location.href = `/setUpAccount/${response.data.id}`;
            handleDialogMsg("Account created and User Credential sent to email !")
          } else if (response.data.status === "unverified") {
            console.log();
            handleDialogErrorMsg(response.data.msg);
          }
        });
    } else handleDialogErrorMsg(`Invalid Email. Email must be an associate of Bataan Peninsula State University`);
  }

  return (
    <div className="log-in-form">
      <div className={className}>
        <div className="sign-in__cont">
          <ImgOptimize
            className="sign-in__overlay"
            imageName="sign-in_overlay"
            imageType="png"
            alt="overlay"
          />
          <h1>Verify Email</h1>
          <form className="sign-in-form">
            <Input
              type="email"
              name="Email"
              handleSetCredential={handleSetCredential}
            />
            <Input
              type="text"
              name="Passcode"
              handleSetCredential={handleSetCredential}
            />
          </form>
          <input
            className="sign-in__button"
            type="submit"
            value="VerifyEmail"
            onClick={handleVerifyEmail}
          />

          <div className="sign-in__log-alt-cont"></div>
        </div>
        <Ellipse
          className="sign-in__ellipse-bg-1 ellipse"
          color="var(--bg_1) "
        />
        <Ellipse
          className="sign-in__ellipse-bg-2 ellipse"
          color="var(--bg_2) "
        />

        <GlassCont
          className="sign-in__dialog-box"
          style={{ color: dialogProps.color, display: dialogProps.display }}
        >
          <p>{dialogProps.msg}</p>
        </GlassCont>
        
      </div>
      <SignUp className="log-in-form__sign-up sign-up" onClick={() => {window.location.href = "/"}}/>
    </div>
  );
}

function Input({ type, name, handleSetCredential }) {
  return (
    <div className="sign-input sign-in__sign-input">
      <label htmlFor={type}>{name}</label>
      <div className="sign-input__input-cont">
        {/* <span className="input-cont__placeholder">{name}</span> */}
        <input
          type={type}
          name={String(name).toLowerCase()}
          id={type}
          placeholder={name}
          onChange={handleSetCredential}
        />
      </div>
    </div>
  );
}

function SignUp({className, onClick}) {
  return (
      <div className={className}>
          <p className={getBaseClass(className) + "__context"}>Already Verified ?</p>
          <button className={getBaseClass(className)  + "__button  button_bg-2 button"} onClick={onClick}>Sign In</button>
      </div>
  )
}
