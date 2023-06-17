import { Typography } from "@mui/material";
import { theme } from "../../../../../theme";

const Source = ({ source }) => {
  return (
    <Typography sx={{ color: theme.palette.UI.grey.main }}>{source}</Typography>
  );
};

export default Source;
