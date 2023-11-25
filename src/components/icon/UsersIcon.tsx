"use client";

import { colors } from "@/utils/colors";
import React from "react";

interface IconProps {
  color?: string;
}

function UsersIcon(props: IconProps) {
  const iconColor = props.color || colors.pri;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49999 8.33332C9.34094 8.33332 10.8333 6.84094 10.8333 4.99999C10.8333 3.15904 9.34094 1.66666 7.49999 1.66666C5.65904 1.66666 4.16666 3.15904 4.16666 4.99999C4.16666 6.84094 5.65904 8.33332 7.49999 8.33332Z"
        stroke={iconColor}
        strokeWidth="1.5"
      />
      <path
        d="M12.5 7.5C13.163 7.5 13.7989 7.23661 14.2678 6.76777C14.7366 6.29893 15 5.66304 15 5C15 4.33696 14.7366 3.70107 14.2678 3.23223C13.7989 2.76339 13.163 2.5 12.5 2.5"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.49999 17.5C10.7217 17.5 13.3333 16.0076 13.3333 14.1666C13.3333 12.3257 10.7217 10.8333 7.49999 10.8333C4.27833 10.8333 1.66666 12.3257 1.66666 14.1666C1.66666 16.0076 4.27833 17.5 7.49999 17.5Z"
        stroke={iconColor}
        strokeWidth="1.5"
      />
      <path
        d="M15 11.6667C16.4617 11.9875 17.5 12.7992 17.5 13.75C17.5 14.6083 16.655 15.3525 15.4167 15.725"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default UsersIcon;
