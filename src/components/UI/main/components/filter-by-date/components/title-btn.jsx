import { Button, Typography } from "@mui/material";
import { theme } from "../../../../../theme";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardControlKeyOutlinedIcon from "@mui/icons-material/KeyboardControlKeyOutlined";

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
          ? theme.palette.UI.text.main
          : theme.palette.UI.textSecondary.main,
        "&:hover": { color: theme.palette.UI.accent.main },
        "&:hover > svg": { color: theme.palette.UI.accent.main },
      }}
    >
      <Typography
        sx={{
          color: currentTitle !== undefined ? theme.palette.UI.accent.main : "",
        }}
      >
        {currentTitle !== undefined
          ? currentTitle
          : array[0].label}
      </Typography>

      {open ? (
        <KeyboardControlKeyOutlinedIcon
          sx={{
            color: theme.palette.UI.accent.main,
            width: "24px",
            paddingTop: "4px",
            marginLeft: "8px",
          }}
        />
      ) : (
        <KeyboardArrowDownOutlinedIcon
          sx={{
            color: theme.palette.UI.icon.main,
            width: "24px",
            marginLeft: "8px",
          }}
        />
      )}
    </Button>
  );
};

export default TitleButton;
