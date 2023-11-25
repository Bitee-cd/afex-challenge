"use client";

import { colors } from "@/utils/colors";
import { useTheme } from "next-themes";
import React from "react";

function SettingsIcon() {
  const { theme } = useTheme();

  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.843 2.802C7.872 1.601 8.886 1 10 1C11.114 1 12.128 1.6 14.157 2.802L14.843 3.208C16.872 4.41 17.886 5.011 18.443 6C19 6.99 19 8.19 19 10.594V11.406C19 13.809 19 15.011 18.443 16C17.886 16.99 16.872 17.59 14.843 18.791L14.157 19.198C12.128 20.399 11.114 21 10 21C8.886 21 7.872 20.4 5.843 19.198L5.157 18.791C3.128 17.591 2.114 16.989 1.557 16C1 15.01 1 13.81 1 11.406V10.594C1 8.19 1 6.989 1.557 6C2.114 5.01 3.128 4.41 5.157 3.208L5.843 2.802Z"
        stroke={theme === "dark" ? colors.icon_light : colors.icon_dark}
        strokeWidth="1.5"
      />
      <path
        d="M10 14C11.6569 14 13 12.6569 13 11C13 9.34315 11.6569 8 10 8C8.34315 8 7 9.34315 7 11C7 12.6569 8.34315 14 10 14Z"
        stroke={theme === "dark" ? colors.icon_light : colors.icon_dark}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default SettingsIcon;
