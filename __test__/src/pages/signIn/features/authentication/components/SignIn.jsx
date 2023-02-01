import React from "react";
import { useState, useReducer } from "react";
import { useImmer, useImmerReducer } from "use-immer";
import axios from "axios";

import ImgOptimize from "Common/utils/ImgOptimize.jsx";
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
        msg: "",
      });
    default:
      throw new Error("Uknonw action.type: " + action.type);
  }
}

export default function SignIn({ className }) {
  const [type, setType] = useState("password");
  const [logInData, setLoginData] = useImmer({ email: "", password: "" });
  const [serverMessage, setServerMessage] = useState("");
  const [dialogProps, dialogPropsDispatch] = useImmerReducer(
    dialogPropsReducer,
    {
      msg: "",
      color: "",
      display: "",
    }
  );
  function handleDialogMsg(msg) {
    dialogPropsDispatch({ type: "dialogMsg", msg: msg });
  }

  function handleDialogErrorMsg(msg) {
    dialogPropsDispatch({ type: "dialogErrorMsg", msg: msg });
  }
  function handleHideDialog() {
    dialogPropsDispatch({ type: "hideDialog" });
  }
  function handleUserSignIn() {
    let emailFormat = /\w{6,}(@bpsu.edu.ph)$/;
    if (!logInData.email.match(emailFormat)) {
      handleDialogErrorMsg("Invalid email, email must be associate BPSU");
      return;
    }
    axios.post("/signIn", { ...logInData }).then((response) => {
      // Reroute to Set Up Account or Organization Page or Student Bulletin Board

      if(response.data.status === "ok") {
        window.location.href = response.data.href
      } else handleDialogMsg(response.data.msg)
    });
  }
  function handleSetLoginData(e) {
    handleHideDialog();
    if (e.target.name === "email") {
      setLoginData((draft) => {
        draft.email = e.target.value;
      });
    } else if (e.target.name === "password") {
      setLoginData((draft) => {
        draft.password = e.target.value;
      });
    }
  }
  function handleSetInputType(e) {
    e.stopPropagation();
    type === "password" ? setType("text") : setType("password");
  }

  return (
    <div className={className}>
      <div className="sign-in__cont">
        <ImgOptimize
          className="sign-in__overlay"
          imageName="sign-in_overlay"
          imageType="png"
          alt="overlay"
        />
        <h1>Log in</h1>
        <form className="sign-in-form">
          <Input
            type="email"
            name="email"
            handleSetLoginData={handleSetLoginData}
          />
          <Input
            type={type}
            name="password"
            handleSetLoginData={handleSetLoginData}
          />
          <div className="sign-in-form__sub-input sub-input">
            <div className="remember-user">
              <input
                type="checkbox"
                name="remember-user"
                id="remember-user"
                onChange={handleSetInputType}
              />
              <label htmlFor="remember-user">Show Password</label>
            </div>
          </div>
        </form>
        <input
          className="sign-in__button"
          type="submit"
          value="Sign In"
          onClick={handleUserSignIn}
        />

        <div className="sign-in__or">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <div className="sign-in__log-alt-cont">
          <div
            className="sign-in__log-alternative log-alternative"
            style={{ border: "2px solid var(--bg_2)" }}
          >
            <a className="log-alternative__context" href="/signUp">
              Sign Up
            </a>
          </div>
          <div
            className="sign-in__log-alternative log-alternative"
            style={{ border: "2px solid var(--bg_2)" }}
          >
            <a href="/verifyEmail" className="log-alternative__context">
              Verify Email
            </a>
          </div>
        </div>
      </div>
      <Ellipse className="sign-in__ellipse-bg-1 ellipse" color="var(--bg_1) " />
      <Ellipse className="sign-in__ellipse-bg-2 ellipse" color="var(--bg_2) " />
      <div style={{ position: "absolute", width: "100vw", bottom: "-87px" }}>
        <GlassCont
          className="dialog-box"
          style={{ color: dialogProps.color, display: dialogProps.display }}
        >
          <p>{dialogProps.msg}</p>
        </GlassCont>
      </div>
    </div>
  );
}

function Input({ type, name, handleSetLoginData }) {
  return (
    <div className="sign-input sign-in__sign-input">
      <label htmlFor={type}>
        {String(name).charAt(0).toUpperCase() + String(name).slice(1)}
      </label>
      <div className="sign-input__input-cont">
        {/* <span className="input-cont__placeholder">{name}</span> */}
        <input
          type={type}
          name={type}
          id={type}
          placeholder={
            String(name).charAt(0).toUpperCase() + String(name).slice(1)
          }
          onChange={handleSetLoginData}
        />
      </div>
    </div>
  );
}
