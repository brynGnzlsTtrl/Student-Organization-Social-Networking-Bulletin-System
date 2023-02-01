import React from "react";
import getBaseClass from "Common/lib/bem.js";

export default function SignUp({className}) {
    return (
        <div className={className}>
            <p className={getBaseClass(className) + "__context"}>Don't have an Account ?</p>
            <button className={getBaseClass(className)  + "__buttton  button_bg-2 button"}>Sign Up</button>
        </div>
    )
}