import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Fragment } from "react";

const PageTitle = ({ title, icon, ...others }) => {
  return (
    <Stack direction={"row"} alignItems="center" {...others}>
      {icon}
      <Typography variant="h4" fontWeight={"bold"} ml={2}>
        {title}
      </Typography>
    </Stack>
  );
};

export default PageTitle;
