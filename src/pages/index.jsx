import {
  Home,
  LibraryMusic,
  SpatialAudio,
  Radio,
  Share
} from "@mui/icons-material";
import React from "react";

export const pages = [
  {
    tab: "Home",
    icon: <Home />,
    largeIcon: <Home fontSize="large" />,
    to: "/"
  },

  {
    tab: "My Playlists",
    icon: <LibraryMusic />,
    largeIcon: <LibraryMusic fontSize="large" />,
    to: "/my_playlists"
  },

  {
    tab: "Discover",
    icon: <SpatialAudio />,
    largeIcon: <SpatialAudio fontSize="large" />,
    to: "/discover"
  },

  {
    tab: "Radio",
    icon: <Radio />,
    largeIcon: <Radio fontSize="large" />,
    to: "/radio"
  },

  {
    tab: "Share",
    icon: <Share />,
    largeIcon: <Share fontSize="large" />,
    to: "/share"
  }
];
