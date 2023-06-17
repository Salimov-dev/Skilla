import { Typography } from "@mui/material";
import { theme } from "../../../../../theme";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const ClearFiltersButton = ({currentTitle, onClearFilters}) => {
    
  if (currentTitle) {
    return (
      <Typography
        noWrap
        onClick={onClearFilters}
        sx={{
          display: "flex",
          alignItems: "center",
          color: theme.palette.UI.textSecondary.main,
          marginRight: "50px",
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
          sx={{
            width: "18px",
            marginLeft: "8px",
            color: theme.palette.UI.icon.main,
          }}
        />
      </Typography>
    );
  }
};

export default ClearFiltersButton;
