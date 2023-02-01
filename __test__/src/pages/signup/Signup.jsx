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
    case "invalidEmailMsg":
      return (dialogProps = {
        display: "block",
        color: "#e63946",
        msg: "Invalid Email, use on organization email associated in BPSU",
      });
    case "serverMsg":
      return (dialogProps = {
        display: "block",
        color: "var(--fg_5)",
        msg: action.msg,
      });
    case "serverErrorrMsg":
      return (dialogProps = {
        display: "block",
        color: "#e63946",
        msg: action.msg,
      });
      case "dialogMsg" :
        return (dialogProps = {
          display: "block",
          color: "var(--fg_5)",
          msg: action.msg
        })
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

export default function SignIn() {
  const className = "log-in-form__sign-in sign-in";
  const [email, setEmail] = useState("");
  const [dialogProps, dialogPropsDispatch] = useImmerReducer(
    dialogPropsReducer,
    {
      msg: "",
      color: "",
      display: "",
    }
  );

  function handleSetEmail(e) {
    handleHideDialog();
    setEmail(e.target.value);
  }

  function handleInvalidEmailMsg() {
    dialogPropsDispatch({ type: "invalidEmailMsg" });
  }
  function handleDialogMsg(msg) {
    dialogPropsDispatch({ type: "dialogMsg", msg: msg})
  }
  function handleServerMsg(msg) {
    console.log("handled");
    dialogPropsDispatch({ type: "serverMsg", msg: msg });
  }
  function handleServerErrorMsg(msg) {
    dialogPropsDispatch({ type: "serverErrorMsg", msg: msg });
  }
  function handleHideDialog() {
    dialogPropsDispatch({ type: "hideDialog" });
  }

  function handleSignUp() {
    handleDialogMsg(`Requesting passcode for verification for ${email}`)
    let validEmailFormat = /\w{6,}(@bpsu.edu.ph)/;
    if (email.match(validEmailFormat)) {
      axios.post("/requestPasscode", { email: email }).then((response) => {
        if (response.data.status === "ok") handleServerMsg(response.data.msg);
        else handleServerErrorMsg(response.data.msg);
      });
    } else handleInvalidEmailMsg();
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
          <h1>Sign Up</h1>
          <form className="sign-in-form">
            <Input type="email" name="Email" handleSetEmail={handleSetEmail} />
          </form>
          <input
            className="sign-in__button"
            type="submit"
            value="Sign Up"
            onClick={handleSignUp}
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
      <VerfifyEmail className="sign-in__verify-email verify-email" />
    </div>
  );
}

function Input({ type, name, handleSetEmail }) {
  return (
    <div className="sign-input sign-in__sign-input">
      <label htmlFor={type}>{name}</label>
      <div className="sign-input__input-cont">
        {/* <span className="input-cont__placeholder">{name}</span> */}
        <input
          type={type}
          name={type}
          id={type}
          placeholder={name}
          onChange={handleSetEmail}
        />
      </div>
    </div>
  );
}

function VerfifyEmail({ className }) {
  return (
    <div className={className}>
      <p className={getBaseClass(className) + "__context"}>
        Already Received a Passcode ?
      </p>
      <button onClick={() => window.location.replace("/verifyEmail")}
        className={getBaseClass(className) + "__button  button_bg-2 button"}
      >
        Verify Email
      </button>
    </div>
  );
}
