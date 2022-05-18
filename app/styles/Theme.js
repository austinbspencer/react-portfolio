import * as React from "react";
import { green, grey, orange } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: green[700],
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: orange[500],
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.secondary.main
    },
    neutral: {
      main: grey[800],
      contrastText: "#fff",
    },
    background: {
      default: "#F4F4F4",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

const AppTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
