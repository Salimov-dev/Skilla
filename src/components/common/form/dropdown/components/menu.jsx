import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { theme } from "../../../../../theme";

const MenuDropdown = ({
  currentTitle,
  array,
  onClose,
  open,
  anchorEl,
  handleChange,
}) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {array.map((opt) => {
        return (
          <MenuItem
            key={opt.id}
            onClick={handleChange}
            value={opt.inOut}
            name={opt.name}
            id={opt.name}
            sx={{
              color:
                currentTitle === opt.label ? theme.palette.UI.accent.main : "",
              "&:hover": { backgroundColor: "rgb(0, 44, 251, 0.13)" },
              "&:first-of-type": {
                color:
                  currentTitle === undefined
                    ? theme.palette.UI.accent.main
                    : "",
              },
            }}
          >
            {opt.label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default MenuDropdown;
