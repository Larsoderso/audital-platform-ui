import * as React from "react";

function ArchiveIcon(props) {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1" fill="white">
        <rect x="1.25" y="2.54546" width="12.5" height="11.4545" rx="1" />
      </mask>
      <rect
        x="1.25"
        y="2.54546"
        width="12.5"
        height="11.4545"
        rx="1"
        stroke="#686D74"
        stroke-width="3"
        mask="url(#path-1-inside-1)"
      />
      <mask id="path-2-inside-2" fill="white">
        <rect width="15" height="6.36363" rx="1" />
      </mask>
      <rect
        width="15"
        height="6.36363"
        rx="1"
        fill="white"
        stroke="#686D74"
        stroke-width="3"
        mask="url(#path-2-inside-2)"
      />
    </svg>
  );
}

export default ArchiveIcon;
