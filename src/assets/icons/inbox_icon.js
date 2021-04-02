import * as React from "react";

function InboxIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.2 0H2.8A2.8 2.8 0 000 2.8v8.4A2.8 2.8 0 002.8 14h8.4a2.8 2.8 0 002.8-2.8V2.8A2.8 2.8 0 0011.2 0z"
        fill="#686D74"
      />
      <path
        d="M1.395 4.2a2.8 2.8 0 012.8-2.8h5.6a2.8 2.8 0 012.8 2.8V7a1.4 1.4 0 01-1.4 1.4h-8.4a1.4 1.4 0 01-1.4-1.4V4.2z"
        fill="#fff"
      />
      <path
        d="M9.803 1.4h-5.6a1.4 1.4 0 00-1.4 1.4v7.127a1.4 1.4 0 001.4 1.4h5.6a1.4 1.4 0 001.4-1.4V2.8a1.4 1.4 0 00-1.4-1.4z"
        fill="#fff"
      />
    </svg>
  );
}

export default InboxIcon;
