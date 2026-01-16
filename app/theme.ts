import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Rufina, Helvetica'
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
});

export default theme;
