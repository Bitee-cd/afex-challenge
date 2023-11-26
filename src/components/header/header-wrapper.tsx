import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { ThemeProvider } from "../theme-provider";
import Head from "next/head";
import SidebarDrawer, { drawerWidth } from "../sidebar-drawer/sidebar-drawer";
import { useState } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { useTheme } from "next-themes";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "@/utils/colors";
import useSidebarToggleStore from "@/utils/states/sidebar-toggle";

function HeaderWrapper() {
  const { theme } = useTheme();

  const toggleSidebar = useSidebarToggleStore((state) => state.toggleSidebar);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        backgroundColor:
          theme === "light" ? colors.bg_pri_light : colors.bg_pri_dark,
      }}
    >
      <Toolbar>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={toggleSidebar}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Header />
      </Toolbar>
    </AppBar>
  );
}

export default HeaderWrapper;
