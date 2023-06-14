import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    body: {
      main: "rgba(18, 41, 69, 1)",
    },
    navbar: {
      background: "rgba(216, 228, 251, 0.32)",
      hover: "rgba(216, 228, 251, 0.32)",
    },
    button: {
      navbar: "rgba(0, 95, 248, 1)",
    },
    UI: {
      green: {
        main: "rgba(40, 168, 121, 1)",
      },
      greenLight: {
        main: "rgba(219, 248, 239, 1)",
      },
      accent: {
        main: "rgba(0, 44, 251, 1)",
      },
      red: {
        main: "rgba(234, 26, 79, 1)",
      },
      yellow: {
        main: "rgba(255, 213, 0, 1)",
      },
      text: {
        main: "rgba(18, 41, 69, 1)",
      },
      textHeader: {
        main: "rgba(137, 156, 177, 1)",
      },
      textSecondary: {
        main: "rgba(94, 119, 147, 1)",
      },
    },
  },
  typography: {
    allVariants: {
      fontSize: 15,
      fontFamily: ["SF Pro Display", "sans-serif"].join(","),
    },
  },
});
