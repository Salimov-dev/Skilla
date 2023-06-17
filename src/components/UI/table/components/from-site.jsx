import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { theme } from "../../../../theme";

const FromSite = ({ site }) => {
  return site ? (
    <LanguageOutlinedIcon
      sx={{ color: theme.palette.UI.icon.main, width: "45px" }}
    />
  ) : null;
};

export default FromSite;
