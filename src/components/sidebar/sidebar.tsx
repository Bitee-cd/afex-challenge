"use client";
import Image from "next/image";
import React, { useState } from "react";
import MessageIcon from "../icon/MessageIcon";
import HomeIcon from "../icon/HomeIcon";

import { usePathname } from "next/navigation";
import Link from "next/link";

import BagIcon from "../icon/BagIcon";
import UserIcon from "../icon/UserIcon";
import LockIcon from "../icon/LockIcon";
import CloseIcon from "@mui/icons-material/Close";
import useSidebarToggleStore from "@/utils/states/sidebar-toggle";
import { routes } from "@/utils/routes";
import { colors } from "@/utils/colors";
import useTranslation from "next-translate/useTranslation";

function Sidebar() {
  const { t } = useTranslation("common");
  const currentRoute = usePathname();
  const toggleSideBar = useSidebarToggleStore((state) => state.toggleSidebar);
  const dashboard_menu = [
    {
      text: t("home"),
      link: routes["home"],
      onClick: undefined,
      icon: (
        <HomeIcon
          color={
            currentRoute === routes["home"] ? colors.sec : colors.icon_light
          }
        />
      ),
    },
    {
      text: t("files"),
      link: routes["files"],
      onClick: undefined,
      icon: (
        <UserIcon
          color={
            currentRoute === routes["files"] ? colors.sec : colors.icon_light
          }
        />
      ),
    },
    {
      text: t("deadline_project"),
      link: routes["deadline_project"],
      onClick: undefined,
      icon: (
        <BagIcon
          color={
            currentRoute === routes["deadline_project"]
              ? colors.sec
              : colors.icon_light
          }
        />
      ),
    },
    {
      text: t("management"),
      link: routes["management"],
      onClick: undefined,
      icon: (
        <LockIcon
          color={
            currentRoute === routes["management"]
              ? colors.sec
              : colors.icon_light
          }
        />
      ),
    },
    {
      text: t("database"),
      link: routes["database"],
      onClick: undefined,
      icon: (
        <LockIcon
          color={
            currentRoute === routes["database"] ? colors.sec : colors.icon_light
          }
        />
      ),
    },
  ];
  const customer_data_menu = [
    {
      text: t("team_data"),
      link: routes["team_award"],
      onClick: undefined,
      icon: (
        <HomeIcon
          color={
            currentRoute === routes["team_award"]
              ? colors.sec
              : colors.icon_light
          }
        />
      ),
    },
    {
      text: t("invoice_data"),
      link: routes["invoice_data"],
      onClick: undefined,
      icon: (
        <UserIcon
          color={
            currentRoute === routes["invoice_data"]
              ? colors.sec
              : colors.icon_light
          }
        />
      ),
    },
    {
      text: t("settings"),
      link: routes["settings"],
      onClick: undefined,
      icon: (
        <BagIcon
          color={
            currentRoute === routes["settings"] ? colors.sec : colors.icon_light
          }
        />
      ),
    },
    {
      text: t("announcement"),
      link: routes["announcement"],
      onClick: undefined,
      icon: (
        <LockIcon
          color={
            currentRoute === routes["announcement"]
              ? colors.sec
              : colors.icon_light
          }
        />
      ),
    },
    {
      text: t("media_assets"),
      link: routes["media_assets"],
      onClick: undefined,
      icon: (
        <LockIcon
          color={
            currentRoute === routes["media_assets"]
              ? colors.sec
              : colors.icon_light
          }
        />
      ),
    },
    {
      text: t("client_feedback"),
      link: routes["client_feedback"],
      onClick: undefined,
      icon: (
        <LockIcon
          color={
            currentRoute === routes["client_feedback"]
              ? colors.sec
              : colors.icon_light
          }
        />
      ),
    },
  ];
  const sidebarMenus = [
    {
      title: t("dashboard"),
      items: dashboard_menu,
    },
    {
      title: t("customer_data"),
      items: customer_data_menu,
    },
  ];
  const handleClick = () => {};

  return (
    <>
      <nav className="p-5 bg_sec h-screen w-full  border-r-4 border-r-border_gray dark:border-r-gray-700 min-h-screen z-30 absolute lg:sticky top-0 left-0">
        <div className="mx-auto flex justify-between">
          <Link href={routes["home"]}>
            <Image
              src="/svg/Logo.svg"
              alt="Logo"
              width={90}
              height={22}
              className="mb-10"
            />
          </Link>

          <div className="lg:hidden" onClick={toggleSideBar}>
            <CloseIcon />
          </div>
        </div>

        <div className="">
          {sidebarMenus.map((item, index) => (
            <div className="my-10 " key={index}>
              <p className="h4_text border-b-border_gray border-b pb-5">
                {item.title}
              </p>
              <div className="flex-col flex gap-5 my-5 p_text">
                {item.items.map((item, index) => (
                  <Link
                    href={item.link}
                    className={`flex items-center space-x-2 ${
                      currentRoute === item.link ? "" : ""
                    }`}
                    key={index}
                  >
                    <div className="w-[25px]">{item.icon}</div>
                    <span
                      className={currentRoute === item.link ? "text-sec" : ""}
                    >
                      {item.text}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
