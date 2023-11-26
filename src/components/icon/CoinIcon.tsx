"use client";
import { colors } from "@/utils/colors";
import { useTheme } from "next-themes";
import React from "react";

function CoinIcon() {
  const { theme } = useTheme();

  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33333 15V5M14.6667 5V15"
        stroke={theme === "dark" ? colors.icon_light : colors.icon_dark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.6667 10C14.6667 11.8417 11.6817 13.3333 7.99999 13.3333C4.31833 13.3333 1.33333 11.8417 1.33333 10M14.6667 15C14.6667 16.8417 11.6817 18.3333 7.99999 18.3333C4.31833 18.3333 1.33333 16.8417 1.33333 15M7.99999 8.33333C11.6817 8.33333 14.6667 6.84166 14.6667 5C14.6667 3.15833 11.6817 1.66666 7.99999 1.66666C4.31833 1.66666 1.33333 3.15833 1.33333 5C1.33333 6.84166 4.31833 8.33333 7.99999 8.33333Z"
        stroke={theme === "dark" ? colors.icon_light : colors.icon_dark}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default CoinIcon;
