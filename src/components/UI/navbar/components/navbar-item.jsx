import React from "react";
import { theme } from "../../../../theme";
import { styled, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Li = styled(`li`)({
  height: "52px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "13px",
  "&:hover": {
    color: "white",
    background: theme.palette.navbar.hover,
  },
});

const NavbarListItem = ({ item }) => {
  return (
    <NavLink to={item.link}>
      {({ isActive }) => (
        <Li>
          <Box sx={{ paddingLeft: isActive ? "10px" : "13px" }}>
            {item.icon}
          </Box>
          {item.text}
        </Li>
      )}
    </NavLink>
  );
};

export default NavbarListItem;
