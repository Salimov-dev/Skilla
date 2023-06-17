import React from "react";
import { Box, styled } from "@mui/material";
import { theme } from "../../../theme";
import useLocalDate from "../../../hooks/use-local-date";
import DropdownCompany from "./components/dropdown-company";
import DropdownProfile from "./components/dropdown-profile";
import HeaderDateNow from "./components/header-date-now";
import AnaliticsBlock from "./components/analitics-block";

const HeaderStyled = styled(Box)`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Box)`
  height: 64px;
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({onSearchFieldFocus}) => {
  const dateNow = useLocalDate();

  return (
    <HeaderStyled sx={{ backgroundColor: theme.palette.header.background }}>
      <Container>
        <HeaderDateNow dateNow={dateNow} />
        <AnaliticsBlock onSearchFieldFocus={onSearchFieldFocus}/>
        <DropdownCompany />
        <DropdownProfile />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
