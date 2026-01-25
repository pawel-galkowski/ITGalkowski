export const sectionStyles = {
  height: "100%",
  width: "100%",
  padding: { xs: "1.5rem 0", sm: "2rem 0", md: "2.5rem 0" },
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f9fafb",
  textAlign: "center" as const,
};

export const imageContainerStyles = {
  position: "relative" as const,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "100vw",
  margin: "0 auto",
  overflow: "hidden",
  backgroundColor: "#fff",
  height: { xs: 80, sm: 100, md: 120 },
  px: { xs: 2, sm: 3, md: 4 },
  "& .slider-track": {
    display: "flex",
    alignItems: "center",
    transition: "transform 0.5s ease",
  },
  "& img": {
    height: "100%",
    width: "auto",
    objectFit: "contain" as const,
    transition: "opacity 0.5s ease, transform 0.5s ease",
  },
};

export const navButtonStyles = {
  position: "absolute" as const,
  top: "50%",
  transform: "translateY(-50%)",
  width: { xs: 36, sm: 40, md: 44 },
  height: { xs: 36, sm: 40, md: 44 },
  minWidth: 44,
  minHeight: 44,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  fontSize: { xs: "1.25rem", sm: "1.4rem", md: "1.5rem" },
  fontWeight: "normal" as const,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0.8,
  transition: "all 0.3s ease",
  padding: 0,
  lineHeight: 1,
  zIndex: 1,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    opacity: 1,
  },
  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "primary.main",
    outlineOffset: 2,
  },
};

export const leftNavButtonStyles = {
  ...navButtonStyles,
  left: { xs: "0.5rem", sm: "0.75rem", md: "1rem" },
};

export const rightNavButtonStyles = {
  ...navButtonStyles,
  right: { xs: "0.5rem", sm: "0.75rem", md: "1rem" },
};
