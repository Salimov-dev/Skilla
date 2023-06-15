import React from "react";
import { Typography } from "@mui/material";
import { convertToTimeString } from "../../../../utils/convert-to-time-string";

const DurationAudio = ({ time }) => {
  return (
    <Typography
      sx={{
        paddingRight: "14px",
      }}
    >
      {time ? convertToTimeString(time) : ""}
    </Typography>
  );
};

export default DurationAudio;
