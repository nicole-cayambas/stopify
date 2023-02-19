import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

const LinkButton = ({ tab }) => {
  const resolved = useResolvedPath(tab.to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <ListItem key={tab.tab} disablePadding>
      <ListItemButton component={NavLink} to={tab.to} selected={match != null}>
        <ListItemIcon color={match ? "primary.main" : null}>
          {tab.icon}
        </ListItemIcon>
        <ListItemText primary={tab.tab} />
      </ListItemButton>
    </ListItem>
  );
};

export default LinkButton;
