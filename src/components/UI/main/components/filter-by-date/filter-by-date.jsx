// libraries
import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
// components
import MenuDropdown from "./components/menu";
import TitleButton from "./components/title-btn";
// icons
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
// store
import { loadCallsList } from "../../../../../store/calls-list.store";
// other
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

  let dateRangeArr = [];
  options.forEach((el) => dateRangeArr.push(el.dateRange));
  let dateRangeIndex = dateRangeArr.indexOf(String(filterParams.dateRange));
  let nextRange = Number(dateRangeArr[dateRangeIndex + 1]);
  let previousRange = Number(dateRangeArr[dateRangeIndex - 1]);

  const handleChangeDateNext = () => {
    let startRange = dateRangeArr[0];

    if (dateRangeIndex + 1 === dateRangeArr.length) {
      return setFilterParams((prevState) => ({
        ...prevState,
        dateRange: startRange,
      }));
    }

    setFilterParams((prevState) => ({
      ...prevState,
      dateRange: nextRange,
    }));

    dispatch(loadCallsList(nextRange));
  };

  const handleChangeDatePrev = () => {
    let startRange = dateRangeArr[0];

    if (dateRangeIndex + 1 === dateRangeArr.length) {
      return setFilterParams((prevState) => ({
        ...prevState,
        dateRange: startRange,
      }));
    }

    setFilterParams((prevState) => ({
      ...prevState,
      dateRange: nextRange,
    }));
    dispatch(loadCallsList(previousRange));
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.id, value: target.value });
    setAnchorEl(null);
    dispatch(loadCallsList(target.value));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      width="150px"
      display="flex"
      alignItems="center"
      justifyContent="end"
      sx={{ marginLeft: "30px" }}
    >
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
