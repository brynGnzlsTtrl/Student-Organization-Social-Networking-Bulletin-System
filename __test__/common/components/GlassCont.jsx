import React, { Children } from "react";

import "Common/styles/components/_glassCont.scss";
export default function GlassCont({ children, style, className}) {
    return (
        <div className={"glass-cont " + className} style={{display: style.display, color: style.color}}>
            {children}
        </div>
    )
}