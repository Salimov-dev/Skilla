import React from "react";
import { Box, styled } from "@mui/material";
import NavbarLogo from "./components/navbar-logo";
import NavbarListItems from "./components/navbar-list";
import NavbarButtonsBlock from "./components/navbar-btns-block";

const Component = styled(Box)`
  min-width: 240px;
  padding: 20px 0px;
  background-color: #091336;
`;

const Navbar = () => {
  return (
    <Component>
      <NavbarLogo />
      <NavbarListItems />
      <NavbarButtonsBlock />
    </Component>
  );
};

export default Navbar;
