import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { ModeToggle } from "../mode-toggle/ModeToggle";
import SearchIcon from "../icon/SearchIcon";
import MessageIcon from "../icon/MessageIcon";
import SettingsIcon from "../icon/SettingsIcon";
import NotificationIcon from "../icon/NotificationIcon";
import Image from "next/image";
import LocalePopover from "../language-popover/locale-popover";
import useTranslation from "next-translate/useTranslation";

function Header() {
  const { t } = useTranslation("home");
  const isMediumScreen = useMediaQuery("(min-width: 600px)");
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
  const [userPopover, setUserPopover] = useState<null | HTMLElement>(null);

  const handleUserOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserPopover(event.currentTarget);
  };

  const handleUserClose = () => {
    setUserPopover(null);
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between screen-center ">
        <div
          className={
            isMediumScreen
              ? "hidden"
              : "lg:flex hidden items-center gap-5 py-2 px-2 bg_sec rounded-lg"
          }
        >
          <SearchIcon />
          <input
            type="text"
            placeholder={t("search_property") + ".."}
            className="bg-inherit p_text min"
          />
        </div>
        <div className="flex items-center space-x-5 ml-auto">
          <LocalePopover />
          <div
            className={
              isMediumScreen
                ? "flex items-center md:gap-5"
                : "flex items-center gap-2"
            }
          >
            {iconList.map((item, index) => (
              <div
                className={`${index === 0 ? "" : "hidden md:flex"}`}
                onClick={item.onClick}
                key={index}
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className="ml-10 hidden lg:flex items-center gap-3">
            <Image
              src="/images/avatar.png"
              alt="profile avatar"
              className=""
              width={42}
              height={42}
              priority
            />
            <p
              className={
                isMediumScreen
                  ? "p_text hidden md:flex text-black dark:text-white"
                  : "p_text text-black dark:text-white"
              }
            >
              Alex Smith
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
