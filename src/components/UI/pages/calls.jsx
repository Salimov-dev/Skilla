import {
  Box,
  LinearProgress,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";
import { theme } from "../../../theme";
import { useSelector } from "react-redux";
import { getCallsList } from "../../../store/calls-list.store";
import useLocalDate from "../../../hooks/use-local-date";
import WorkProgress from "../header/components/work-progress";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DropdownProfile from "../../common/form/dropdown-profile";
import DropdownCompany from "../../common/form/dropdown-company";

const Component = styled(Box)`
  display: flex;
`;

const Content = styled(Box)`
  width: 100%;
`;

const Header = styled(Box)`
  height: 64px;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinearProgressStyled = styled(LinearProgress)`
  borderRadius: 12px,
  width: 156px,
  backgroundColor: theme.palette.linearProgress.green.main,
`;

const CallsPage = () => {
  const calls = useSelector(getCallsList());
  // console.log("calls", calls);

  const dateNow = useLocalDate();
  // console.log("dateNow", dateNow);

  return (
    <Component sx={{ backgroundColor: theme.palette.body.background }}>
      <Navbar />
      <Content>
        <Header sx={{ backgroundColor: theme.palette.header.background }}>
          <Box sx={{ display: "inline" }} mr="86px">
            <Typography
              noWrap
              sx={{ color: theme.palette.UI.textHeader.main, noWrap: "true" }}
            >
              {dateNow}
            </Typography>
          </Box>
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
                progressColorBackground={
                  theme.palette.linearProgress.background.main
                }
              />
              <WorkProgress
                value={40}
                titleResult="Качество разговоров"
                titleProgress="40%"
                titleProgressColor={theme.palette.UI.yellow.main}
                progressColorBar={theme.palette.linearProgress.yellow.main}
                progressColorBackground={
                  theme.palette.linearProgress.background.main
                }
              />
              <WorkProgress
                value={67}
                titleResult="Конверсия в заказ"
                titleProgress="67%"
                titleProgressColor={theme.palette.UI.red.main}
                progressColorBar={theme.palette.linearProgress.red.main}
                progressColorBackground={
                  theme.palette.linearProgress.background.main
                }
              />
            </Box>
            <SearchOutlinedIcon sx={{ color: "#ADBFDF" }} />
          </Box>
          <DropdownCompany />
          <DropdownProfile />
        </Header>
      </Content>
    </Component>
  );
};

export default CallsPage;
