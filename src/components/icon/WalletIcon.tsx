"use client";
import { colors } from "@/utils/colors";
import { useTheme } from "next-themes";
import React from "react";

function WalletIcon() {
  const { theme } = useTheme();

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 8.33333H8.33333"
        stroke={theme === "dark" ? colors.icon_light : colors.icon_dark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3608 9.16666H15.1925C13.705 9.16666 12.5 10.2858 12.5 11.6667C12.5 13.0475 13.7058 14.1667 15.1917 14.1667H17.3608C17.4308 14.1667 17.465 14.1667 17.4942 14.165C17.9442 14.1375 18.3025 13.805 18.3317 13.3875C18.3333 13.3608 18.3333 13.3283 18.3333 13.2642V10.0692C18.3333 10.005 18.3333 9.9725 18.3317 9.94583C18.3017 9.52833 17.9442 9.19583 17.4942 9.16833C17.465 9.16666 17.4308 9.16666 17.3608 9.16666Z"
        stroke={theme === "dark" ? colors.icon_light : colors.icon_dark}
        strokeWidth="1.5"
      />
      <path
        d="M17.4708 9.16667C17.4058 7.60667 17.1975 6.65 16.5233 5.97667C15.5475 5 13.9758 5 10.8333 5H8.33332C5.19082 5 3.61916 5 2.64332 5.97667C1.66666 6.9525 1.66666 8.52417 1.66666 11.6667C1.66666 14.8092 1.66666 16.3808 2.64332 17.3567C3.61916 18.3333 5.19082 18.3333 8.33332 18.3333H10.8333C13.9758 18.3333 15.5475 18.3333 16.5233 17.3567C17.1975 16.6833 17.4067 15.7267 17.4708 14.1667"
        stroke={theme === "dark" ? colors.icon_light : colors.icon_dark}
        strokeWidth="1.5"
      />
      <path
        d="M5 5L8.1125 2.93583C8.55022 2.65112 9.06116 2.49956 9.58333 2.49956C10.1055 2.49956 10.6164 2.65112 11.0542 2.93583L14.1667 5"
        stroke={theme === "dark" ? colors.icon_light : colors.icon_dark}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.9925 11.6667H15.0008"
        stroke={theme === "dark" ? colors.icon_light : colors.icon_dark}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WalletIcon;
