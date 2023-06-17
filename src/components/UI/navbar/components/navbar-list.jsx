import { theme } from "../../../../theme";
import { Box, styled } from "@mui/material";
import NavbarListItem from "./navbar-item";
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
  color: rgba(255, 255, 255, 0.6);
  margin-top: 50px;
  margin-bottom: 80px;
`;

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

const NavbarListItems = () => {
  return (
    <Component>
      <Nav>
        {navBarItems.map((item) => (
          <NavbarListItem item={item} key={item.id} />
        ))}
      </Nav>
    </Component>
  );
};

export default NavbarListItems;
