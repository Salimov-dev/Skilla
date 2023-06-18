import { Box, Menu, MenuItem } from "@mui/material";
import { theme } from "../../../../../../theme";
import { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DateField from "../../../../../common/form/date-field/date-field";

const MenuDropdown = ({
  currentTitle,
  array,
  onClose,
  open,
  anchorEl,
  handleChange,
}) => {
  const [value, setValue] = useState({ startDate: "", endDate: "" });

  const handleChangeDateRange = ({ target }) => {
    setValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        style: {
          width: 204,
        },
        "aria-labelledby": "basic-button",
      }}
    >
      {array.map((opt) => {
        return (
          <MenuItem
            key={opt.id}
            onClick={handleChange}
            value={opt.dateRange}
            name={opt.name}
            id={opt.name}
            sx={{
              color:
                currentTitle === opt.label
                  ? theme.palette.UI.accent.main
                  : theme.palette.UI.textHeader.main,
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

      <Box>
        <Box sx={{ padding: "14px 14px 0 14px" }}>Указать даты</Box>
        <Box
          display="flex"
          sx={{
            padding: "4px 25px 20px 15px",
            "&:hover > svg": { color: theme.palette.UI.accent.main },
          }}
        >
          <DateField
            name="startDate"
            value={value.startDate}
            onChange={handleChangeDateRange}
          />
          <Box
            width="20px"
            sx={{ padding: "0 0 0 12px", color: theme.palette.UI.icon.main }}
          >
            -
          </Box>
          <DateField
            name="endDate"
            value={value.endDate}
            onChange={handleChangeDateRange}
          />
          <CalendarTodayIcon
            sx={{
              color: theme.palette.UI.icon.main,
              marginLeft: "35px",
            }}
          />
        </Box>
      </Box>
    </Menu>
  );
};

export default MenuDropdown;
