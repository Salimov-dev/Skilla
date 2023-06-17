import { Box } from "@mui/material";
import { useState } from "react";
import TitleButton from "../../../../common/form/dropdown/components/title-btn";
import MenuDropdown from "./components/menu";

const FilterByDate = ({ options, onChange, currentValue }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.id, value: target.value });
    setAnchorEl(null);
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          id: options[optionName].id,
          name: options[optionName].name,
        }))
      : options;

  const currentTitle = options.find(
    (opt) => opt.dateRange == currentValue
  )?.label;

  return (
    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TitleButton
          open={open}
          currentTitle={currentTitle}
          array={optionsArray}
          onClick={handleClick}
        />

        <MenuDropdown
          currentTitle={currentTitle}
          array={optionsArray}
          onClose={handleClose}
          open={open}
          anchorEl={anchorEl}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default FilterByDate;
