import React from "react";
import { Box } from "@mui/material";
import { theme } from "../../../../theme";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import CallReceivedOutlinedIcon from "@mui/icons-material/CallReceivedOutlined";

const InOut = ({ status }) => {
  return (
    <Box>
      {status ? (
        <ArrowOutwardOutlinedIcon sx={{ color: theme.palette.UI.green.main }} />
      ) : (
        <CallReceivedOutlinedIcon sx={{ color: theme.palette.UI.blue.main }} />
      )}
    </Box>
  );
};

export default InOut;
