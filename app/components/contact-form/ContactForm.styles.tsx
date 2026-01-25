// ContactForm.styles.tsx

export const formBoxStyles = {
  mx: "auto",
  width: '100%',
  maxWidth: { xs: '100%', sm: 500, md: 600 },
  display: "flex",
  flexDirection: "column",
  gap: { xs: 2, sm: 2.5, md: 3 },
  px: { xs: 2, sm: 3, md: 0 },
  alignItems: { xs: "center", md: "stretch" },
};

export const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "primary.contrastText",
      borderWidth: 2,
    },
    "&:hover fieldset": {
      borderColor: "primary.contrastText",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.contrastText",
      borderWidth: 2,
    },
    color: "primary.contrastText",
    backgroundColor: "transparent",
    fontSize: { xs: '0.9rem', sm: '1rem' },
  },
  "& .MuiInputBase-input": {
    minHeight: 44,
    py: { xs: 1.5, sm: 2 },
  },
  "& .MuiInputLabel-root": {
    color: "primary.contrastText",
    fontSize: { xs: '0.9rem', sm: '1rem' },
  },
  "& .MuiFormHelperText-root": {
    color: "primary.contrastText",
    fontSize: { xs: '0.75rem', sm: '0.875rem' },
  },
};

export const buttonStyles = {
  color: "primary.contrastText",
  backgroundColor: "transparent",
  border: "2px solid",
  borderColor: "primary.contrastText",
  boxShadow: "none",
  fontWeight: 700,
  width: { xs: '100%', sm: 'auto' },
  maxWidth: { xs: 300, sm: 'none' },
  mx: { xs: 'auto', sm: 0 },
  fontSize: { xs: '0.95rem', sm: '1.1rem' },
  px: { xs: 3, sm: 4 },
  py: { xs: 1.25, sm: 1.5 },
  minHeight: 48,
  minWidth: 120,
  transition: "all 0.3s ease",
  "&:hover, &:focus": {
    backgroundColor: "primary.contrastText",
    color: "primary.main",
  },
  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "primary.contrastText",
    outlineOffset: 2,
  },
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
};

export const buttonBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: { xs: 'column', sm: 'row' },
  gap: { xs: 2, sm: 3 },
  mt: { xs: 1, sm: 2 },
};