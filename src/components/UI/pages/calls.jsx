import { useRef } from "react";
import { Box, styled } from "@mui/material";
import { theme } from "../../../theme";
// components
import Main from "../main/main";
import Header from "../header/header";
import Navbar from "../navbar/navbar";

const Component = styled(Box)`
  display: flex;
`;

const Content = styled(Box)`
  width: 100%;
  padding-bottom: 546px;
`;

const CallsPage = () => {
  const inputSearchField = useRef(null);
  const handleSearchFieldFocus = () => {
    inputSearchField.current.focus();
  };
  return (
    <Component>
      <Navbar />
      <Content sx={{ backgroundColor: theme.palette.body.background }}>
        <Header onSearchFieldFocus={handleSearchFieldFocus} />
        <Main refLink={inputSearchField} />
      </Content>
    </Component>
  );
};

export default CallsPage;
