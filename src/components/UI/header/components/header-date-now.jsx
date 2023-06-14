import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../../theme";

const HeaderDateNow = ({dateNow}) => {
  
  return (
    <Box sx={{ display: "inline" }} mr="86px">
      <Typography
        noWrap
        sx={{ color: theme.palette.UI.textHeader.main, noWrap: "true" }}
      >
        {dateNow}
      </Typography>
    </Box>
  );
};

export default HeaderDateNow;
