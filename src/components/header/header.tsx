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
  const isSidebarOpen = useSidebarToggleStore((state) => state.isSidebarOpen);
  const toggleSideBar = useSidebarToggleStore((state) => state.toggleSidebar);
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
    <header className="bg-pri_100 dark:bg-black sticky top-0 z-10">
      {isSidebarOpen && (
        <div className="absolute h-screen w-[70%] backdrop-brightness-50">
          <Sidebar />
        </div>
      )}
      <div className="flex items-center justify-between screen-center min-h-[60px] lg:min-h-[70px] w-1/3 ">
        <button className="lg:hidden " onClick={toggleSideBar}>
          <MenuIcon />
        </button>
        <div className="flex items-center gap-5 py-2 px-5 bg_sec rounded-lg">
          <SearchIcon />
          <input
            type="text"
            placeholder={t("search_property") + ".."}
            className="bg-inherit p_text "
          />
        </div>
        <div className="flex items-center space-x-5 ">
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
            <p className="p_text">Alex Smith</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
