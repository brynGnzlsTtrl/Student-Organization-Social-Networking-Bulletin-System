import React from "react";

//React Components
// import "../../assets/fonts/poppins-v20-latin-600.woff";
// import "../../assets/fonts/poppins-v20-latin-600.woff2";
// import "../../assets/fonts/poppins-v20-latin-regular.woff";
// import "../../assets/fonts/poppins-v20-latin-regular.woff2";
// import "../../assets/fonts/rubik-v21-latin-500.woff";
// import "../../assets/fonts/rubik-v21-latin-500.woff2";
import "Common/styles/common.scss"

import BrandLogo from "Common/components/BrandLogo.jsx"
import SignIn from "./features/authentication/components/SignIn.jsx";
import Ellipse from "Common/components/Ellipse.jsx";
import LogInCircle from "./components/LogInCircle.jsx";
import SignUp from "./components/SignUp.jsx";



import "./signIn.scss";
let val = "/signUp"

export default function SignInPage() {
    return (
    <div className="log-in-form">
        <BrandLogo className="log-in-form__brand-logo brand-logo"></BrandLogo>
        <SignUp className="log-in-form__sign-up sign-up" />
        <SignIn className="log-in-form__sign-in sign-in " />
        {/* <Ellipse className="log-in-form__ellipse_bg-2 ellipse" color="#9b4cff" />
        <Ellipse className="log-in-form__ellipse_bg-1 ellipse" color="#8affcf" />  */}
        <LogInCircle className="log-in-form__circle-container circle-container" />
        
    </div>
    
    );
}