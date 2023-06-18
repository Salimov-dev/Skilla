import { Button, Typography } from "@mui/material";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { theme } from "../../../../../../theme";

const TitleButton = ({ open, currentTitle, array, onClick }) => {
  return (
    <Button
      id="basic-menu"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={(e) => onClick(e)}
      sx={{
        textTransform: "none",
        color: open
          ? theme.palette.UI.accent.main
          : theme.palette.UI.textSecondary.main,
        "&:hover": { color: theme.palette.UI.accent.main },
      }}
    >
   

      <Typography
        display="flex"
        alignItems="center"
        gap="8px"
        sx={{
          color: currentTitle !== undefined ? theme.palette.UI.accent.main : "",
        }}
      >
        <CalendarTodayIcon sx={{ width: "16px", height: "18px" }} />
        {currentTitle !== undefined ? currentTitle : array[0].label}
      </Typography>

     
    </Button>
  );
};

export default TitleButton;
