"use client";

import { colors } from "@/utils/colors";
import React from "react";

interface IconProps {
  type: "debit" | "credit";
}

function ArrowIcon(props: IconProps) {
  return (
    <div className={props.type === "debit" ? "rotate-180" : ""}>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.37 0.165009L13.8 6.79501C14.201 7.20901 13.958 8.00001 13.43 8.00001H0.570004C0.0420045 8.00001 -0.200996 7.21001 0.200004 6.79501L6.63 0.165009C6.67678 0.113313 6.73388 0.0719926 6.79761 0.0437136C6.86134 0.0154346 6.93028 0.000823975 7 0.000823975C7.06973 0.000823975 7.13867 0.0154346 7.2024 0.0437136C7.26613 0.0719926 7.32322 0.113313 7.37 0.165009Z"
          fill={props.type === "credit" ? colors.green : colors.red}
        />
      </svg>
    </div>
  );
}

export default ArrowIcon;
