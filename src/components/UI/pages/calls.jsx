import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import Navbar from "../navbar/navbar";
import { theme } from "../../../theme";
import Header from "../header/header";
import CallsListTable from "../table/table";
import { useSelector } from "react-redux";
import { getCallsList } from "../../../store/calls-list.store";

const Component = styled(Box)`
  display: flex;
`;

const Content = styled(Box)`
  width: 100%;
`;

const Container = styled(Box)`
  minwidth: 1440px;
  display: flex;
  flex-direction: column;
`;

const MainStyled = styled(Box)`
  width: 1440px;
  margin: 0 auto;
`;

const CallsPage = () => {

    const calls = useSelector(getCallsList());

  return (
    <Component sx={{ backgroundColor: theme.palette.body.background }}>
      <Navbar />
      <Content sx={{ paddingBottom: "546px" }}>
        <Header />

        <MainStyled>
          <Container>
            <Box>Баланс и выбор дат</Box>
            <Box>Поиск и фильтры</Box>
            <CallsListTable calls={calls}/>
          </Container>
        </MainStyled>

      </Content>
    </Component>
  );
};

export default CallsPage;
