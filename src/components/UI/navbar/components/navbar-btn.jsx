import { styled, Typography, Button } from "@mui/material";
import { theme } from "../../../../theme";

const ButtonStyled = styled(Button)`
  padding: 14px;
  text-transform: none;
`;

const NavbarButton = ({ text, icon, alt }) => {
  return (
    <ButtonStyled
      variant="contained"
      sx={{ backgroundColor: theme.palette.button.navbar }}
    >
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
