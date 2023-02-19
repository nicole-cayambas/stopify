import { Box, Toolbar, useTheme } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
// import { useGetPlaybackStatus } from "../hooks/data/playback";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import MyPlaylists from "../pages/MyPlaylists";
import Radio from "../pages/Radio";
import Share from "../pages/Share";

const AppContent = () => {
  const theme = useTheme();
  // const { data: playback } = useGetPlaybackStatus();
  return (
    <Box
      component={"main"}
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `100%` },
        height: `calc(100vh)`,
        overflow: "auto"
      }}
    >
      <Toolbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/my_playlists" element={<MyPlaylists />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </Box>
  );
};

export default AppContent;
