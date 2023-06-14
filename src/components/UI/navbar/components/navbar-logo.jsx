import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";
import logo from "../../../../assets/images/navBar/logo_skilla.svg";

const Logo = styled(`img`)({
  width: 109,
  marginLeft: 13,
});

const NavbarLogo = () => {
  return (
    <NavLink to="/">
      <Logo src={logo} alt="Логотип" />
    </NavLink>
  );
};

export default NavbarLogo;
