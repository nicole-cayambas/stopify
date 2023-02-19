import { Box, Drawer, List } from "@mui/material";
import React from "react";
import LinkButton from "./LinkButton";
import { pages } from "../pages";

const Navigation = (props) => {
  const { window, onClose, open, theme } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <>
      <List sx={{ mt: "64px" }}>
        {pages.map((tab, i) => (
          <LinkButton tab={tab} key={i} />
        ))}
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ minWidth: { sm: theme.drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: theme.drawerWidth
          }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: theme.drawerWidth
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navigation;
