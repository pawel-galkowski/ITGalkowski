export const accordionStyles = {
  backgroundColor: "transparent",
  color: "primary.contrastText",
  border: "1px solid transparent",
  py: 0,
  px: 2,
  margin: 0,
  transition: "border-color 0.2s",
  "&:before": { display: "none" },
  "&.Mui-expanded": {
    margin: 0,
    borderColor: "primary.contrastText",
  },
};

export const summaryStyles = {
  padding: "16px 0",
  minHeight: "48px",
  transition: "min-height 0.2s",
  "&.Mui-expanded": {
    minHeight: "48px",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
};

export const detailsStyles = {
  padding: "8px 0 20px 0",
  overflow: "hidden",
  transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
};

export const answerTypographyStyles = {
  opacity: 0.9,
};