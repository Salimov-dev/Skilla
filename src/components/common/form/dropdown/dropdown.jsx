import { Box } from "@mui/material";
import React, { useState } from "react";
import _ from "lodash";
import TitleButton from "./components/title-btn";
import ClearFiltersButton from "./components/clear-filters-btn";
import MenuDropdown from "./components/menu";

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
        <ClearFiltersButton
          currentTitle={currentTitle}
          onClearFilters={onClearFilters}
        />

        <TitleButton
          open={open}
          currentTitle={currentTitle}
          sortedOptionsArray={sortedOptionsArray}
          onClick={handleClick}
        />

        <MenuDropdown
          currentTitle={currentTitle}
          array={sortedOptionsArray}
          onClose={handleClose}
          open={open}
          anchorEl={anchorEl}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default Dropdown;
