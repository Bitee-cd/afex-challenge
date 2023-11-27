import Header from "../header/header";
import { drawerWidth } from "../sidebar-drawer/sidebar-drawer";
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
        backgroundColor: theme !== "dark" ? colors.pri_100 : colors.bg_pri_dark,
        boxShadow: "none",
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
