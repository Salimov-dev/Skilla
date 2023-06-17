import React from "react";
import { Box, Button } from "@mui/material";
import { theme } from "../../../../theme";
import WorkProgress from "./work-progress";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const AnaliticsBlock = ({ onSearchFieldFocus }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", width: "100%", gap: "50px" }}>
        <WorkProgress
          value={66}
          titleResult="Новые звонки"
          titleProgress="20 из 30 шт"
          titleProgressColor={theme.palette.UI.textGreen.main}
          progressColorBar={theme.palette.linearProgress.green.main}
          progressColorBackground={theme.palette.linearProgress.background.main}
        />
        <WorkProgress
          value={40}
          titleResult="Качество разговоров"
          titleProgress="40%"
          titleProgressColor={theme.palette.UI.yellow.main}
          progressColorBar={theme.palette.linearProgress.yellow.main}
          progressColorBackground={theme.palette.linearProgress.background.main}
        />
        <WorkProgress
          value={67}
          titleResult="Конверсия в заказ"
          titleProgress="67%"
          titleProgressColor={theme.palette.UI.red.main}
          progressColorBar={theme.palette.linearProgress.red.main}
          progressColorBackground={theme.palette.linearProgress.background.main}
        />
      </Box>
      <Button onClick={onSearchFieldFocus}>
        <SearchOutlinedIcon sx={{ color: "#ADBFDF", cursor: "pointer" }} />
      </Button>
    </Box>
  );
};

export default AnaliticsBlock;
