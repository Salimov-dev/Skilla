import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    body: {
      background: "#f1f4f9",
    },
    navbar: {
      background: "rgba(216, 228, 251, 0.32)",
      hover: "rgba(216, 228, 251, 0.32)",
    },
    header: {
      background: "white",
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
      grey: {
        main: "rgba(94, 119, 147, 1)",
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
      blue: {
        main: "rgba(0, 95, 248, 1)",
      },
      text: {
        main: "rgba(18, 41, 69, 1)",
      },
      textHeader: {
        main: "rgba(137, 156, 177, 1)",
      },
      textGreen: {
        main: "rgba(0, 167, 117, 1)",
      },
      textSecondary: {
        main: "rgba(94, 119, 147, 1)",
      },
      icon: {
        main: "rgba(173, 191, 223, 1)",
      },
    },
    linearProgress: {
      green: {
        main: "#28A879",
      },
      yellow: {
        main: "#FFD500",
      },
      red: {
        main: "#EA1A4F",
      },
      background: {
        main: "#DEE6F5",
      },
    },
    table: {
      hover: "rgba(212, 223, 243, 0.17)",
      row: "rgba(234, 240, 250, 1)",
    },
  },
  typography: {
    allVariants: {
      fontSize: 15,
      fontFamily: ["SF Pro Display", "sans-serif"].join(","),
    },
  },
});
