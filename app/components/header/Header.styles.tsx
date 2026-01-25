// Styles for Header component extracted from inline sx and style props

export const headerContainerStyles: React.CSSProperties = {
  padding: "16px",
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "rgb(31, 38, 41)",
  color: "white",
};

export const headerStyles = {
  appBar: {
    padding: 2,
  },
  logo: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    maxWidth: 300,
  },
  title: {
    flexGrow: 1,
    display: { xs: "none", sm: "flex" },
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  nav: {
    display: { xs: "none", sm: "flex", alignItems: "center", gap: 5 },
  },
  drawerPaper: {
    boxSizing: "border-box",
    width: 240,
  },
  drawer: {
    display: { xs: "block", sm: "none" },
    '& .MuiDrawer-paper': {
      boxSizing: "border-box",
      width: 240,
    },
  },
  drawerBox: {
    textAlign: "center",
  },
  drawerTitle: {
    my: 2,
  },
  drawerListButton: {
    textAlign: "center",
  },
  menuButton: {
    mr: 2,
    display: { sm: "none" },
  },
};
