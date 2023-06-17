import { Box, Button, Menu, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../../theme";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardControlKeyOutlinedIcon from "@mui/icons-material/KeyboardControlKeyOutlined";

const DropdownCompany = ({ button }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "64px" }}>
      <Box>
        <Button
          id="basic-profile"
          aria-controls={open ? "basic-profile" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Typography
            noWrap
            sx={{
              color: theme.palette.UI.textHeader.main,
              textTransform: "none",
            }}
          >
            ИП Сидорова Александра Михайловна
          </Typography>
          {open ? (
            <KeyboardControlKeyOutlinedIcon
              sx={{
                color: theme.palette.UI.accent.main,
                width: "24px",
                paddingTop: "5px",
              }}
            />
          ) : (
            <KeyboardArrowDownOutlinedIcon
              sx={{ color: theme.palette.UI.icon.main, width: "24px" }}
            />
          )}
        </Button>

        <Menu
          id="basic-profile"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Box sx={{ padding: "10px 20px", display: 'flex', flexDirection: "column", gap: '10px' }}>
            <Typography sx={{color: theme.palette.UI.accent.main}}>Все организации</Typography>
            <Typography sx={{color: theme.palette.UI.textHeader.main}}>ООО Грузчиков Сервис Запад</Typography>
            <Typography sx={{color: theme.palette.UI.textHeader.main}}>ИП Митрофанов М.М.</Typography>
            <Typography sx={{color: theme.palette.UI.textHeader.main}}>ИП Иванов М.М.</Typography>
          </Box>
        </Menu>
      </Box>
    </Box>
  );
};

export default DropdownCompany;
