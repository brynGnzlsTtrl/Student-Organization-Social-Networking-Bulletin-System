import React from "react";
import getBaseClassName from "../lib/bem";
export default function BrandLogo({ className = "" }) {
  return (
    <div className={className}>
      {/* <svg
        className={
          getBaseClassName(className) +
          "__icon" +
          " " +
          getBaseClassName(className) +
          "__icon_small"
        }
        width="26"
        height="21"
        viewBox="0 0 26 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.5275 4.20508C19.5471 1.88267 13.8597 3.5384 11.8243 7.90325C9.78899 12.2681 12.1764 17.6892 17.1568 20.0116C22.1372 22.334 14.5353 14.4813 16.5706 10.1165C18.606 5.75163 29.5079 6.52748 24.5275 4.20508Z"
          fill="#9B4CFF"
        />
        <path
          d="M16.2778 8.17418C16.2778 12.1769 2.6685 24.7189 7.73865 15.1025C3.46471 15.1025 0 12.3568 0 8.96985C0 5.58287 3.46471 2.83718 7.73865 2.83718C12.0126 2.83718 16.2778 3.8668 16.2778 8.17418Z"
          fill="#8AFFCF"
        />
      </svg>
      <svg
        className={
          getBaseClassName(className) +
          "__icon" +
          " " +
          getBaseClassName(className) +
          "__icon_regular"
        }
        width="37"
        height="30"
        viewBox="0 0 37 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.9047 5.9842C27.8172 2.67922 19.7235 5.03546 16.8271 11.247C13.9306 17.4586 17.3281 25.1732 24.4156 28.4782C31.5032 31.7832 20.6849 20.6082 23.5814 14.3966C26.4779 8.18507 41.9923 9.28917 34.9047 5.9842Z"
          fill="#9B4DFF"
        />
        <path
          d="M23.1648 11.6326C23.1648 17.3288 3.7975 35.1771 11.0128 21.4922C4.93058 21.4922 0 17.5848 0 12.7649C0 7.94489 4.93058 4.03754 11.0128 4.03754C17.0949 4.03754 23.1648 5.50277 23.1648 11.6326Z"
          fill="#8AFFCF"
        />
      </svg>
      <svg
        className={
          getBaseClassName(className) +
          "__icon" +
          " " +
          getBaseClassName(className) +
          "__icon_large"
        }
        width="37"
        height="30"
        viewBox="0 0 37 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.9047 5.9842C27.8172 2.67922 19.7235 5.03546 16.8271 11.247C13.9306 17.4586 17.3281 25.1732 24.4156 28.4782C31.5032 31.7832 20.6849 20.6082 23.5814 14.3966C26.4779 8.18507 41.9923 9.28917 34.9047 5.9842Z"
          fill="#9B4DFF"
        />
        <path
          d="M23.1648 11.6326C23.1648 17.3288 3.7975 35.1771 11.0128 21.4922C4.93058 21.4922 0 17.5848 0 12.7649C0 7.94489 4.93058 4.03754 11.0128 4.03754C17.0949 4.03754 23.1648 5.50277 23.1648 11.6326Z"
          fill="#8AFFCF"
        />
      </svg> */}
      <p className={getBaseClassName(className) + "__text"} style={{display: "none"}}>
          SOSNB
      </p>
    </div>
  );
}
