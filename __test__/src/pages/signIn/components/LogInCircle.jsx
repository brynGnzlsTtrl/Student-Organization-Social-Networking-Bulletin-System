import React from "react";
import getBaseClass from "Common/lib/bem";
import ImagOptimize from "Common/utils/ImgOptimize.jsx";
import Ellipse from "Common/components/Ellipse.jsx";
import { logInImages } from "../features/data-content/log-in-circle-images";


export default function LogInCircle({ className }) {
  return (
    <div className={className} style={{ position: "absolute" }}>
      {/* <svg
        className={getBaseClass(className) + "__fill main-circle"}
        width="588"
        height="588"
        viewBox="0 0 588 588"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M587.004 293.501C587.004 455.598 455.599 587.003 293.502 587.003C131.405 587.003 0 455.598 0 293.501C0 131.405 131.405 0 293.502 0C455.599 0 587.004 131.405 587.004 293.501Z"
          fill="#28272F"
        />
      </svg> */}

      <svg
        className={getBaseClass(className) + "__fill main-circle"}
        width="588"
        height="588"
        viewBox="0 0 588 588"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_33_349)">
          <path
            d="M587.004 293.501C587.004 455.598 455.599 587.003 293.502 587.003C131.405 587.003 0 455.598 0 293.501C0 131.405 131.405 0 293.502 0C455.599 0 587.004 131.405 587.004 293.501Z"
            fill="url(#paint0_linear_33_349)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_33_349"
            x="-297"
            y="-127"
            width="1047"
            height="1037"
            filterUnits="userSpaceOnUse"
            colorinterpolationfileters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_33_349"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_33_349"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_33_349"
            x1="227"
            y1="407.5"
            x2="227"
            y2="902"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1A002E" />
            <stop offset="1" stopColor="#04A9C4" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className={getBaseClass(className) + "__ring main-cicle"}
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M598.5 300.08C598.5 464.732 465.023 598.21 300.37 598.21C135.718 598.21 2.24072 464.732 2.24072 300.08C2.24072 135.428 135.718 1.95056 300.37 1.95056C465.023 1.95056 598.5 135.428 598.5 300.08Z"
          stroke="#BEBEBE"
          strokeOpacity="0.4"
          strokeWidth="3"
        />
      </svg>
      <Context
        className={getBaseClass(className) + "__log-in-context log-in-context"}
      />
      {/* <Images className={getBaseClass(className) + "__log-in-images log-in-images"} /> */}
      <Ellipse
        className="circle-container__ellipse ellipse__bg-1 ellipse"
        color="var(--bg_1)"
      />
      <Ellipse
        className="circle-container__ellipse ellipse__bg-2 ellipse"
        color="var(--bg_2)"
      />
    </div>
  );
}

function Context({ className }) {
  return (
    <div className={className}>
      <p className={getBaseClass(className) + "__header"}>Student Organization Social Networking Bulletin System </p>
      <p className={getBaseClass(className) + "__body"}>

      </p>
    </div>
  );
}

function Images({ className }) {
  const imageList = logInImages.map((image) => (
    <ImagOptimize
      key={image.id}
      className={getBaseClass(className) + "__image"}
      imageName={image.name}
      alt={image.description}
      imageType={image.type}
    />
  ));
  return <div className={className}>{imageList}</div>;
}
