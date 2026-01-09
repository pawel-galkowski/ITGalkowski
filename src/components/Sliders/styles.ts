export const sectionStyles = {
  height: "100%",
  width: "100%",
  padding: "2rem 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f9fafb",
  textAlign: "center",
};

export const imageContainerStyles = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "100vw",
  margin: "0 auto",
  overflow: "hidden",
  backgroundColor: "#fff",
  height: 120,
  "& .slider-track": {
    display: "flex",
    alignItems: "center",
    transition: "transform 0.5s ease",
  },
  "& img": {
    height: "100%",
    width: "auto",
    objectFit: "contain",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  },
};

export const navButtonStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 44,
  height: 44,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "#fff",
  border: "none",
  borderRadius: 50,
  fontSize: "1.5rem",
  fontWeight: "normal",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0.8,
  transition: "backgroundColor 0.3s ease, opacity 0.3s ease",
  padding: 0,
  lineHeight: 1,
  zIndex: 1,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    opacity: 1,
  },
};

export const leftNavButtonStyles = {
  ...navButtonStyles,
  left: "1rem",
};

export const rightNavButtonStyles = {
  ...navButtonStyles,
  right: "1rem",
};
