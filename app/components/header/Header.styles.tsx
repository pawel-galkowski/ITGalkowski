export const headerStyles = {
  appBar: {
    backgroundColor: "primary.main",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: { xs: 56, sm: 64, md: 70 },
    px: { xs: 1.5, sm: 2, md: 3 },
  },
  logo: {
    height: { sm: 40, md: 48 },
    width: "auto",
    display: "block",
  },
  logoMobile: {
    height: { xs: 50 },
    width: "auto",
    display: "block",
  },
  title: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    flexDirection: "row" as const,
    alignItems: "center",
    gap: { xs: 1, sm: 2 },
    cursor: "pointer",
  },
  nav: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: { xs: 0, lg: 3 },
    "& a": {
      color: "inherit",
      textDecoration: "none",
      padding: "8px 12px",
      borderRadius: "4px",
      transition: "background-color 0.2s ease",
      "&:hover, &:focus": {
        backgroundColor: "background.paper",
        outline: "2px solid transparent",
      },
      "&:focus-visible": {
        outline: "2px solid",
        outlineColor: "primary.light",
      },
    },
  },
  desktopButtons: {
    color: "primary.contrastText",
    "&:hover": { textDecoration: "underline" },
  },
  drawer: {
    display: { xs: "block", md: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box" as const,
      width: { xs: "85vw", sm: 280 },
      maxWidth: 400,
      backgroundColor: "secondary.main",
      opacity: 1,
    },
  },
  drawerBox: {
    textAlign: "center" as const,
    height: "100%",
    display: "flex",
    flexDirection: "column" as const,
  },
  logoBox: {
    my: 2,
    px: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerListButton: {
    textAlign: "center" as const,
    py: 2,
    px: 3,
    minHeight: 48,
    "&:hover, &:focus": {
      backgroundColor: "action.hover",
    },
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: "primary.main",
    },
  },
  menuButton: {
    display: { xs: "flex", md: "none" },
    minWidth: 40,
    minHeight: 40,
    margin: 0,
    padding: 0,
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: "primary.light",
    },
  },
  mobileLanguageBox: {
    display: { xs: "flex", md: "none" },
    gap: 1,
  },
};
