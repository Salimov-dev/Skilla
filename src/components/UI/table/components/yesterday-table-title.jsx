import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../../theme";

const YesterdayTableTitle = ({length}) => {
  return (
    <Box
    display="flex"
    mt="50px"
    pl="15px"
    pb="17px"
    gap="4px"
    sx={{
      borderBottom:
      length && `1px solid ${theme.palette.table.row}`,
    }}
  >
    <Typography>вчера</Typography>
    <Typography
      fontSize="12px"
      sx={{ color: theme.palette.UI.textHeader.main }}
    >
      {length}
    </Typography>
  </Box>
  );
};

export default YesterdayTableTitle;
