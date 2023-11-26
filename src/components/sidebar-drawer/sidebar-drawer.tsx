import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "next-themes";
import Sidebar from "../sidebar/sidebar";
import { colors } from "@/utils/colors";

export const drawerWidth = 240;

interface Props {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

export default function SidebarDrawer({
  mobileOpen,
  handleDrawerToggle,
}: Props) {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor:
          theme === "light" ? colors.bg_pri_light : colors.bg_pri_dark,
        flex: 1,
        width: "100vw",
      }}
    >
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="navigation containers"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            backgroundColor:
              theme === "light" ? colors.bg_pri_light : colors.bg_pri_dark,
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
    </Box>
  );
}
