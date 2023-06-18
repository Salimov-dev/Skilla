import React from "react";
import { InputMask } from "primereact/inputmask";
import { Box } from "@mui/material";
import { theme } from "../../../../theme";

const DateField = ({ name, value, onChange }) => {
  return ( 
    <Box
      width="48px"
      sx={{
        "& > input": { border: "none", outline: "none" },
        "& > input::placeholder": { color: theme.palette.UI.icon.main },
        "& .p-filled": { color: theme.palette.UI.accent.main },
      }}
    >
      <InputMask
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        mask="99.99.99"
        placeholder="__.__.__"
      />
    </Box>
  );
};

export default DateField;
