import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Rufina, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: "clamp(1.75rem, 4vw + 1rem, 4rem)", // Fluid 28-64px (reduced mobile start)
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "clamp(1.5rem, 3vw + 0.5rem, 2.5rem)", // Fluid 24-40px (reduced mobile start)
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "clamp(1.25rem, 2.5vw + 0.5rem, 2rem)", // Fluid 20-32px (reduced mobile start)
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: 0,
    },
    h4: {
      fontSize: "clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)", // Fluid 18-24px (reduced mobile start)
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    h5: {
      fontSize: "clamp(1rem, 1vw + 0.5rem, 1.25rem)", // Fluid 16-20px (reduced mobile start)
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h6: {
      fontSize: "clamp(0.9375rem, 0.75vw + 0.5rem, 1.125rem)", // Fluid 15-18px
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    body1: {
      fontSize: "clamp(0.875rem, 0.5vw + 0.75rem, 1rem)", // Fluid 14-16px
      fontWeight: 400,
      lineHeight: 1.6, // Better readability
      letterSpacing: "0.02em",
    },
    body2: {
      fontSize: "clamp(0.8125rem, 0.5vw + 0.625rem, 0.875rem)", // Fluid 13-14px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    caption: {
      fontSize: "clamp(0.75rem, 0.5vw + 0.5rem, 0.8125rem)", // Fluid 12-13px
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: "0.02em",
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
      xs: 0,      // Mobile portrait
      sm: 600,    // Mobile landscape / Small tablets
      md: 900,    // Tablets
      lg: 1200,   // Desktop
      xl: 1536,   // Large desktop
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        body: {
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
        },
        'img, picture, video, canvas, svg': {
          display: 'block',
          maxWidth: '100%',
        },
        'input, button, textarea, select': {
          font: 'inherit',
        },
        'p, h1, h2, h3, h4, h5, h6': {
          overflowWrap: 'break-word',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: '44px', // WCAG touch target
          minWidth: '44px',
          textTransform: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          minHeight: '44px', // WCAG touch target
          minWidth: '44px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            minHeight: '44px', // WCAG touch target
          },
        },
      },
    },
  },
});

export default theme;
