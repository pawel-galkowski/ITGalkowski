export const accordionStyles = {
  backgroundColor: "transparent",
  color: "primary.contrastText",
  border: "2px solid transparent",
  py: { xs: 0.5, sm: 1 },
  px: { xs: 2, sm: 3 },
  margin: 0,
  transition: "border-color 0.3s ease",
  "&:before": { display: "none" },
  "&.Mui-expanded": {
    margin: 0,
    borderColor: "primary.contrastText",
  },
  "&:focus-within": {
    outline: '2px solid',
    outlineColor: 'primary.light',
    outlineOffset: 2,
  },
};

export const summaryStyles = {
  padding: { xs: "12px 0", sm: "16px 0" },
  minHeight: { xs: "44px", sm: "48px" },
  transition: "min-height 0.2s",
  "&.Mui-expanded": {
    minHeight: { xs: "44px", sm: "48px" },
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "primary.contrastText",
  },
};

export const detailsStyles = {
  padding: { xs: "8px 0 16px 0", sm: "8px 0 20px 0" },
  overflow: "hidden",
  transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
};

export const answerTypographyStyles = {
  opacity: 0.9,
  fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
  lineHeight: 1.7,
  textAlign: 'left' as const,
};