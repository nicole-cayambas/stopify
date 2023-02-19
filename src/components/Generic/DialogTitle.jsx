import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const DialogTitle = ({ icon, title, handleClose, ...others }) => {
  return (
    <Stack direction={"row"} {...others} justifyContent="space-between">
      <Box display="flex" alignItems="center">
        {icon}
        <Typography variant="h6" fontWeight={"bold"} ml={2}>
          {title}
        </Typography>
      </Box>
      <IconButton onClick={handleClose}>
        <Close />
      </IconButton>
    </Stack>
  );
};

export default DialogTitle;
