import { Box, styled } from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";
import { theme } from "../../../theme";
import { useSelector } from "react-redux";
import { getCallsList } from "../../../store/calls-list.store";
import Header from "../header/header";

const Component = styled(Box)`
  display: flex;
`;

const Content = styled(Box)`
  width: 100%;
`;

const CallsPage = () => {
  const calls = useSelector(getCallsList());
  // console.log("calls", calls);

  return (
    <Component sx={{ backgroundColor: theme.palette.body.background }}>
      <Navbar />
      <Content>
        <Header />
      </Content>
    </Component>
  );
};

export default CallsPage;
