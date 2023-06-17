import { Typography } from "@mui/material";
import { convertToTimeString } from "../../../../utils/convert-to-time-string";

const DurationAudioInSeconds = ({ time }) => {
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

export default DurationAudioInSeconds;
