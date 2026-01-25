export const languageButtonsStyles = {
  container: {
    mx: { xs: 1, sm: 2 },
    display: "flex",
    alignItems: "center",
    gap: { xs: 0.5, sm: 1 },
  },
  flag: {
    objectFit: "cover" as const,
    width: { xs: 18, sm: 20, md: 24 },
    height: "auto",
    cursor: "pointer",
    transition: 'transform 0.2s ease',
    borderRadius: 0.5,
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: 'primary.light',
      outlineOffset: 2,
    },
  },
};
