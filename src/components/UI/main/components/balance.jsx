import { Box, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { theme } from "../../../../theme";

const Balance = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        backgroundColor="white"
        sx={{ padding: "8px 12px 8px 16px", borderRadius: "48px" }}
      >
        <Box
          display="flex"
          gap="4px"
          sx={{ alignItems: "center", backgroundColor: "" }}
        >
          <Typography sx={{ color: theme.palette.UI.textHeader.main }}>
            Баланс:
          </Typography>
          <Typography fontWeight="bold">272 ₽</Typography>
        </Box>
        <AddCircleIcon
          sx={{
            width: "24px",
            height: "24px",
            color: "#005FF8",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};

export default Balance;
