import { Box, LinearProgress, Typography } from "@mui/material";

const WorkProgress = ({
  value,
  titleResult,
  titleProgress,
  titleProgressColor,
  progressColorBar,
  progressColorBackground,
}) => {
  return (
    <Box sx={{ width: "190px" }}>
      <Box sx={{ fontSize: "14px", display: "flex", gap: "5px" }} mb="7px">
        <Typography>{titleResult}</Typography>
        <Typography color={titleProgressColor}>{titleProgress}</Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          width: "93%",
          height: "6px",
          borderRadius: "12px",
          backgroundColor: progressColorBackground,
          "& .MuiLinearProgress-bar": {
            backgroundColor: progressColorBar,
          },
        }}
      />
    </Box>
  );
};

export default WorkProgress;
