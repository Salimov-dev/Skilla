import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { theme } from "../../../theme";
import logo from "../../../assets/images/navBar/logo_skilla.svg";
// icons
import TimelineIcon from "@mui/icons-material/Timeline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import addOrderIcon from "../../../assets/images/navBar/buttonAddOrder.svg";
import paymentIcon from "../../../assets/images/navBar/buttonPayment.svg";

const navBarItems = [
  { id: 1, text: "Итоги", icon: <TimelineIcon />, link: "/" },
  { id: 2, text: "Заказы", icon: <DoneAllIcon />, link: "/orders" },
  { id: 3, text: "Сообщения", icon: <EmailOutlinedIcon />, link: "/messages" },
  { id: 4, text: "Звонки", icon: <PhoneOutlinedIcon />, link: "/calls" },
  {
    id: 6,
    text: "Контрагенты",
    icon: <PeopleOutlineOutlinedIcon />,
    link: "/partner",
  },
  { id: 7, text: "Документы", icon: <TaskOutlinedIcon />, link: "/documents" },
  {
    id: 8,
    text: "Исполнители",
    icon: <PersonOutlinedIcon />,
    link: "/executors",
  },
  {
    id: 9,
    text: "Отчеты",
    icon: <WorkOutlineOutlinedIcon />,
    link: "/reports",
  },
  {
    id: 10,
    text: "База знаний",
    icon: <LocalLibraryOutlinedIcon />,
    link: "/knowledgebase",
  },
  {
    id: 11,
    text: "Настройки",
    icon: <SettingsOutlinedIcon />,
    link: "/settings",
  },
];

const Component = styled(Box)`
  display: flex;
  background: #e5e5e5;
`;

const Component = styled(Box)`
  min-width: 240px;
  padding: 20px 0px;
  background-color: #091336;
`;

const NavbarListItems = styled(Box)`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 50px;
  margin-bottom: 80px;
`;

const Logo = styled(`img`)({
  width: 109,
  marginLeft: 13,
});

const Nav = styled(`nav`)({
  listStyle: "none",
  position: "relative",
  "& .active": {
    width: "100%",
    height: "inherit",
    display: "flex",
    alignItems: "center",
    background: theme.palette.navbar.background,
    borderLeft: "3px solid #002cfb",
    color: "white",
  },
  "& .active::after": {
    position: "absolute",
    right: "13px",
    content: "close-quote",
    width: "8px",
    height: "8px",
    backgroundColor: "yellow",
    borderRadius: "50%",
    boxShadow: "0px 3px 8px",
  },
});

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

const ButtonStyled = styled(Button)`
  background-color: theme.palette.button.navbar;
  padding: 14px;
  text-transform: none;
`;

const Navbar = () => {
  return (
    <Navbar>
      <NavLink to="/">
        <Logo src={logo} alt="Логотип" />
      </NavLink>

      <NavbarListItems>
        <Nav>
          {navBarItems.map((item) => (
            <NavLink to={item.link} key={item.id}>
              {({ isActive }) => (
                <Li>
                  <Box sx={{ paddingLeft: isActive ? "10px" : "13px" }}>
                    {item.icon}
                  </Box>
                  {item.text}
                </Li>
              )}
            </NavLink>
          ))}
        </Nav>
      </NavbarListItems>

      <Stack spacing="32px" sx={{ padding: "0 20px" }}>
        <ButtonStyled variant="contained">
          <Typography
            sx={{ fontWeight: "500", fontSize: "16px", marginLeft: "auto" }}
          >
            Добавить заказ
          </Typography>
          <img style={{ marginLeft: "auto" }} src={addOrderIcon} alt="!" />
        </ButtonStyled>

        <ButtonStyled variant="contained">
          <Typography
            sx={{ fontWeight: "500", fontSize: "16px", marginLeft: "auto" }}
          >
            Оплата
          </Typography>
          <img style={{ marginLeft: "auto" }} src={paymentIcon} alt="!" />
        </ButtonStyled>
      </Stack>
    </Navbar>
  );
};

export default Navbar;
