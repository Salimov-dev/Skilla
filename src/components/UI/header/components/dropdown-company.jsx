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
                width: "20px",
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
          <Box sx={{ padding: "20px 32px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                ИП Сидорова А.М.
              </Typography>
            </Box>

            <Stack
              sx={{
                width: "368px",
                color: theme.palette.UI.textSecondary.main,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography>Предприятие</Typography>
                <Typography
                  sx={{
                    padding: "3px",
                    backgroundColor: theme.palette.UI.icon.main,
                    borderRadius: "50%",
                  }}
                ></Typography>
                <Typography>Санкт-Петербург</Typography>
              </Box>
            </Stack>
          </Box>
        </Menu>
      </Box>
    </Box>
  );
};

export default DropdownCompany;
