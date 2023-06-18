import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import MenuDropdown from "./components/menu";
import TitleButton from "./components/title-btn";
import { useDispatch } from "react-redux";
import { loadCallsList } from "../../../../../store/calls-list.store";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { theme } from "../../../../../theme";

const FilterByDate = ({
  options,
  onChange,
  currentValue,
  filterParams,
  setFilterParams,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let dateRangeArr = [];
  options.forEach((el) => dateRangeArr.push(el.dateRange));
  let dateRangeIndex = dateRangeArr.indexOf(String(filterParams.dateRange));
  const nextRange = Number(dateRangeArr[dateRangeIndex + 1]);
  const previousRange = Number(dateRangeArr[dateRangeIndex - 1]);

  const handleChange = ({ target }) => {
    onChange({ name: target.id, value: target.value });
    setAnchorEl(null);
    dispatch(loadCallsList(target.value));
  };

  const handleChangeDateNext = () => {
    setFilterParams((prevState) => ({
      ...prevState,
      dateRange: nextRange,
    }));
    dispatch(loadCallsList(nextRange));
  };

  const handleChangeDatePrev = () => {
    setFilterParams((prevState) => ({
      ...prevState,
      dateRange: nextRange,
    }));
    dispatch(loadCallsList(previousRange));
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
      <Box display="flex" alignItems="center">
        <KeyboardArrowLeftOutlinedIcon
          width="24px"
          sx={{
            cursor: "pointer",
            marginRight: "8px",
            color: theme.palette.UI.icon.main,
            "&:hover": { color: theme.palette.UI.accent.main },
          }}
          onClick={handleChangeDatePrev}
        />
        <TitleButton
          open={open}
          currentTitle={currentTitle}
          array={optionsArray}
          onClick={handleClick}
        />

        <KeyboardArrowRightOutlinedIcon
          width="24px"
          sx={{
            cursor: "pointer",
            marginRight: "8px",
            color: theme.palette.UI.icon.main,
            "&:hover": { color: theme.palette.UI.accent.main },
          }}
          onClick={handleChangeDateNext}
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
