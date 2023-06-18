import { Box } from "@mui/material";
import { theme } from "../../../../../theme";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ClearIcon from "@mui/icons-material/Clear";

const ButtonsBlock = ({ isPlay }) => {
  return (
    <Box sx={{ display: "flex", gap: "22px" }}>
      <FileDownloadIcon
        sx={{
          color: theme.palette.UI.icon.main,
          "&:hover": { color: theme.palette.UI.accent.main },
        }}
      />

      {isPlay && (
        <ClearIcon
          sx={{
            color: theme.palette.UI.icon.main,
            "&:hover": { color: theme.palette.UI.accent.main },
          }}
        />
      )}
    </Box>
  );
};

export default ButtonsBlock;
