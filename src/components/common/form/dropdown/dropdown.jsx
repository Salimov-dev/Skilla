import { Box } from "@mui/material";
import { useState } from "react";
import _ from "lodash";
import TitleButton from "./components/title-btn";
import MenuDropdown from "./components/menu";

const Dropdown = ({ options, onChange, currentValue, filterParamsItem }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          id: options[optionName].id,
          name: options[optionName].name,
        }))
      : options;

  const sortedOptionsArray = _.sortBy(optionsArray, ["label"], ["asc"]);
  const currentTitle = options.find((opt) => opt.inOut == currentValue)?.label;

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

  return (
    <Box marginLeft="30px" display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <TitleButton
          open={open}
          currentTitle={currentTitle}
          array={sortedOptionsArray}
          onClick={handleClick}
        />

        <MenuDropdown
          currentTitle={currentTitle}
          array={sortedOptionsArray}
          onClose={handleClose}
          open={open}
          anchorEl={anchorEl}
          filterParamsItem={filterParamsItem}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default Dropdown;
