import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { ThemeProvider } from "../theme-provider";
import Head from "next/head";
import SidebarDrawer, { drawerWidth } from "../sidebar-drawer/sidebar-drawer";
import { AppBar, Box } from "@mui/material";
import { useTheme } from "next-themes";
import { colors } from "@/utils/colors";
import useSidebarToggleStore from "@/utils/states/sidebar-toggle";
import HeaderWrapper from "../header/header-wrapper";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}
function DashboardLayout({ children }: Props) {
  const toggleSidebar = useSidebarToggleStore((state) => state.toggleSidebar);
  const isSidebarOpen = useSidebarToggleStore((state) => state.isSidebarOpen);
  const { theme } = useTheme();
  return (
    <Box
      sx={{
        minHeight: 1,
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        backgroundColor:
          theme !== "dark" ? colors.bg_pri_light : colors.bg_pri_dark,
      }}
    >
      <HeaderWrapper />
      <SidebarDrawer
        mobileOpen={isSidebarOpen}
        handleDrawerToggle={toggleSidebar}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px`, lg: 0 },
          marginTop: "64px",
          backgroundColor:
            theme !== "dark" ? colors.bg_pri_light : colors.bg_pri_dark,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
