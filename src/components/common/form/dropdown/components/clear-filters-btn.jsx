import { Typography } from "@mui/material";
import { theme } from "../../../../../theme";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const ClearFiltersButton = ({ onClearFilters }) => {
  return (
    <Typography
      noWrap
      onClick={onClearFilters}
      display="flex"
      alignItems="center"
      marginRight="50px"
      sx={{
        color: theme.palette.UI.textSecondary.main,
        cursor: "pointer",
        "&:hover": {
          color: theme.palette.UI.accent.main,
        },
        "&:hover > svg": {
          color: theme.palette.UI.accent.main,
        },
      }}
    >
      Сбросить фильтры
      <ClearOutlinedIcon
        width="18px"
        sx={{
          marginLeft: "8px",
          color: theme.palette.UI.icon.main,
        }}
      />
    </Typography>
  );
};

export default ClearFiltersButton;
