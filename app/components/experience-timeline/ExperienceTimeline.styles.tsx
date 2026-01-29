export const timelineStyles = {
  py: { xs: 2, sm: 3 },
  "& .MuiTimelineItem-root": {
    minHeight: "auto",
  },
};

export const timelineItemStyles = {
  padding: { xs: "8px 0", sm: 1.2, md: 1.5 },
  minHeight: "auto",
  "&::before": {
    flex: { xs: 0, sm: 1 },
    padding: { xs: 0, sm: "6px 16px" },
  },
};

export const timelineOppositeContentStyles = {
  paddingTop: { xs: 0.5, sm: 0 },
  paddingRight: { xs: 0, sm: 2 },
  textAlign: "right" as const,
  flex: { xs: 0, sm: 0.5, md: 1 },
  display: { xs: "none", sm: "block" },
};

export const timelineContentStyles = {
  paddingTop: { xs: 0.5, sm: 0 },
};

export const timelineBoxStyles = {
  display: "flex",
  flexDirection: "column" as const,
  gap: { xs: 0.5, sm: 0.75, md: 1 },
};

export const timelineSummaryStyles = {
  p: {
    textAlign: "left",
  },
};
