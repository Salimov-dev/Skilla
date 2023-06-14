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
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  const dateNow = useLocalDate();

  return (
    <HeaderStyled sx={{ backgroundColor: theme.palette.header.background }}>
      <HeaderDateNow dateNow={dateNow} />
      <AnaliticsBlock />
      <DropdownCompany />
      <DropdownProfile />
    </HeaderStyled>
  );
};

export default Header;
