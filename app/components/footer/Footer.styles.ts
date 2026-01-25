export const footerStyles = {
  width: "100%",
  minHeight: { xs: 60, sm: 80, md: 120 },
  py: { xs: 2, sm: 3 },
  px: { xs: 2, sm: 3, md: 6 },
  backgroundColor: "primary.main",
  display: "flex",
  flexDirection: { md: "row", sm: "column", xs: "column" },
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: 'center',
  '& > *': {
    fontSize: { xs: '0.875rem', sm: '1rem' },
  },
};
