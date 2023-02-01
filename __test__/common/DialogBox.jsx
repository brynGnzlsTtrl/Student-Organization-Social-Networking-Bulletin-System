import React from "react";

export default function DialogBox({message}) {

    console.log("tested")
    return (
        <div className="dialogBox" style={{display: message.display}}>
            <p className="dialogBox__message">{message.context}</p>
        </div>
    )




}