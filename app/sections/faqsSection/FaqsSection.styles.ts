export const faqsSectionStyles = {
  root: {
    backgroundColor: "primary.main",
    py: { xs: 3, sm: 5, md: 10 },
    px: { xs: 2, sm: 3, md: 5 },
    color: "primary.contrastText",
    width: "100%",
    minHeight: { xs: "auto", md: "600px" },
  },
  contentWrapper: {
    width: "100%",
    maxWidth: 1200,
    mx: 'auto',
    display: "flex",
    flexDirection: "column",
    gap: { xs: 1, sm: 1.5, md: 2 },
    textAlign: { xs: "center", md: "left" },
  },
  title: {
    fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.625rem" },
    fontWeight: 600,
    mb: { xs: 2, sm: 3, md: 4 },
    textAlign: "center",
    px: { xs: 2, sm: 3 },
  },
};
