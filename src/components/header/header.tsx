"use client";
import React, { useState } from "react";
import { ModeToggle } from "../mode-toggle/ModeToggle";
import SearchIcon from "../icon/SearchIcon";
import MessageIcon from "../icon/MessageIcon";
import SettingsIcon from "../icon/SettingsIcon";
import NotificationIcon from "../icon/NotificationIcon";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar/sidebar";
import useSidebarToggleStore from "@/utils/states/sidebar-toggle";
import LocalePopover from "../language-popover/locale-popover";
import useTranslation from "next-translate/useTranslation";

function Header() {
  const { t } = useTranslation("home");
  const iconList = [
    { icon: <ModeToggle />, text: "theme toggler", onClick: undefined },
    { icon: <MessageIcon />, text: "messages icon", onClick: undefined },
    { icon: <SettingsIcon />, text: "settings icon", onClick: undefined },
    {
      icon: <NotificationIcon />,
      text: "notifications icon",
      onClick: undefined,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between screen-center ">
        <div className=" hidden md:flex items-center gap-5 py-2 px-2 bg_sec rounded-lg">
          <SearchIcon />
          <input
            type="text"
            placeholder={t("search_property") + ".."}
            className="bg-inherit p_text min"
          />
        </div>
        <div className="flex items-center space-x-5 ml-auto">
          <LocalePopover />
          <div className="md:flex items-center gap-5 hidden">
            {iconList.map((item, index) => (
              <div className="" onClick={item.onClick} key={index}>
                {item.icon}
              </div>
            ))}
          </div>
          <div className="ml-10 flex items-center gap-3">
            <Image
              src="/images/avatar.png"
              alt="profile avatar"
              className=""
              width={42}
              height={42}
              priority
            />
            <p className="p_text hidden md:flex text-black dark:text-white">
              Alex Smith
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
