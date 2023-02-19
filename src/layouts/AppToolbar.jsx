import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Stack } from "@mui/system";
import { logout } from "../config/api";
import { useStore } from "../hooks/store";

const AppToolbar = ({ handleDrawerToggle, theme }) => {
  const [{ user }, actions] = useStore();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleProfileMenu = (el) => {
    setAnchorEl(el);
    setMenuOpen(true);
  };

  const handleLogout = async () => {
    const res = await logout();
    if (res.ok) {
      actions.setAuth(false);
      window.location.pathname = "/login";
    }
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        keepMounted
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{ zIndex: 9999 }}
      >
        <MenuItem onClick={() => setMenuOpen(false)}>
          <Avatar
            src={user.images[0]?.url}
            sx={{ width: "30px", height: "30px", mr: 1 }}
          />
          <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon sx={{ mr: "1rem" }} />
          Logout
        </MenuItem>
      </Menu>
      <AppBar
        position="fixed"
        sx={{
          width: "100vw",
          ml: { sm: `${theme.drawerWidth}` },
          zIndex: 9998
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <>
            <EarbudsIcon sx={{ mr: "0.5rem" }} />
            <Typography alignItems={"center"}>Stopify</Typography>
          </>
          <>
            <Stack direction={"row"} width="100%" justifyContent={"flex-end"}>
              <Button
                color="inherit"
                endIcon={
                  user.images[0]?.url ? (
                    <Avatar
                      src={user.images[0]?.url}
                      sx={{ width: "30px", height: "30px", mr: 1 }}
                    />
                  ) : (
                    <AccountCircleIcon />
                  )
                }
                onClick={(e) => handleProfileMenu(e.target)}
              >
                {user.display_name}
              </Button>
            </Stack>
          </>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppToolbar;
