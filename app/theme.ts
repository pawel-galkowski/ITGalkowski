import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Rufina, Helvetica',
    h1: {
      fontSize: 64,
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.5px",
    },
    h2: {
      fontSize: 40,
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: "-0.25px",
    },
    h3: {
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    h4: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: "0.25px",
    },
    h5: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h6: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: "0.15px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.5px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.57,
      letterSpacing: "0.25px",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: "0.4px",
    },
  },
  palette: {
    primary: {
      main: "#1F2629",
      light: "#51C9FF",
      contrastText: "#fff"
    },
    secondary: {
      main: "#F5ECE1",
      light: "#FF8B00",
      contrastText: "#111827"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1264,
      xl: 1512,
    },
  },
});

export default theme;
