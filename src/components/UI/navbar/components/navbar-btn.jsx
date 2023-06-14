import React from "react";
import { styled, Typography, Button } from "@mui/material";

const ButtonStyled = styled(Button)`
  background-color: theme.palette.button.navbar;
  padding: 14px;
  text-transform: none;
`;

const NavbarButton = ({ text, icon, alt }) => {
  return (
    <ButtonStyled variant="contained">
      <Typography
        sx={{ fontWeight: "500", fontSize: "16px", marginLeft: "auto" }}
      >
        {text}
      </Typography>
      <img style={{ marginLeft: "auto" }} src={icon} alt={alt} />
    </ButtonStyled>
  );
};

export default NavbarButton;
