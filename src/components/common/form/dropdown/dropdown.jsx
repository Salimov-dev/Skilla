import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardControlKeyOutlinedIcon from "@mui/icons-material/KeyboardControlKeyOutlined";
import { theme } from "../../../../theme";
import _ from "lodash";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const Dropdown = ({ options, onChange, currentValue, onClearFilters }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = ({ target }) => {
    let res = target.value;
    if (target.value === -1) {
      res = "";
    } else {
      res;
    }
    onChange({ name: target.id, value: res });
    setAnchorEl(null);
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          id: options[optionName].id,
          name: options[optionName].name,
        }))
      : options;

  const sortedOptionsArray = _.sortBy(optionsArray, ["label"], ["asc"]);

  const currentTitle = options.find((opt) => opt.inOut == currentValue)?.label;

  return (
    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {currentTitle && (
          <Typography
            noWrap
            onClick={onClearFilters}
            sx={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.UI.textSecondary.main,
              marginRight: "50px",
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.UI.accent.main,
              },
              "&:hover > svg": {
                color: theme.palette.UI.accent.main,
              },
            }}
          >
            Сбросить фильтры
            <ClearOutlinedIcon
              sx={{
                width: "18px",
                marginLeft: "8px",
                color: theme.palette.UI.icon.main,
              }}
            />
          </Typography>
        )}

        <Button
          id="basic-menu"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            textTransform: "none",
            color: open
              ? theme.palette.UI.text.main
              : theme.palette.UI.textSecondary.main,
            "&:hover": { color: theme.palette.UI.accent.main },
            "&:hover > svg": { color: theme.palette.UI.accent.main },
          }}
        >
          <Typography
            sx={{
              color:
                currentTitle !== undefined ? theme.palette.UI.accent.main : "",
            }}
          >
            {currentTitle !== undefined
              ? currentTitle
              : sortedOptionsArray[0].label}
          </Typography>

          {open ? (
            <KeyboardControlKeyOutlinedIcon
              sx={{
                color: theme.palette.UI.accent.main,
                width: "24px",
                paddingTop: "4px",
                marginLeft: "8px",
              }}
            />
          ) : (
            <KeyboardArrowDownOutlinedIcon
              sx={{
                color: theme.palette.UI.icon.main,
                width: "24px",
                marginLeft: "8px",
              }}
            />
          )}
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {sortedOptionsArray.map((opt) => {
            return (
              <MenuItem
                key={opt.id}
                onClick={handleChange}
                value={opt.inOut}
                name={opt.name}
                id={opt.name}
                sx={{
                  color:
                    currentTitle === opt.label
                      ? theme.palette.UI.accent.main
                      : "",
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
      </Box>
    </Box>
  );
};

export default Dropdown;
