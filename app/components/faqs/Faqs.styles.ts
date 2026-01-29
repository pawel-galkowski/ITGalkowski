export const accordionStyles = {
  backgroundColor: "transparent",
  color: "primary.contrastText",
  border: "2px solid transparent",
  py: { xs: 0.5, sm: 1 },
  px: { xs: 0, sm: 3 },
  margin: 0,
  transition: "border-color 0.3s ease",
  "&:before": { display: "none" },
  "&.Mui-expanded": {
    margin: 0,
    borderColor: "primary.contrastText",
  },
  "&:focus-within": {
    outline: "2px solid",
    outlineColor: "primary.light",
    outlineOffset: 2,
  },
};

export const summaryStyles = {
  padding: { xs: "12px 6px", sm: "16px 8px" },
  minHeight: { xs: "44px", sm: "48px" },
  transition: "min-height 0.2s",
  "&.Mui-expanded": {
    minHeight: { xs: "44px", sm: "48px" },
  },
  "&:hover": {
    backgroundColor: "background.default",
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "primary.contrastText",
  },
};

export const detailsStyles = {
  padding: { xs: "8px 6px 16px 6px", sm: "8px 8px 20px 8px" },
  overflow: "hidden",
  transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
};

export const answerTypographyStyles = {
  opacity: 0.9,
  textAlign: "left" as const,
};
