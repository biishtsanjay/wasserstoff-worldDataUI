import React from "react";

const Getsvg = ({ stroke = "#FF708B" }) => {
  return (
    <svg width="68" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 3C8.62687 3 7.61194 12 17.7612 12C27.9104 12 25.3731 5 34 5C42.6269 5 44.5157 1 51.2537 1C57.7936 1 59.3731 10.5 68 10.5"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Getsvg;
