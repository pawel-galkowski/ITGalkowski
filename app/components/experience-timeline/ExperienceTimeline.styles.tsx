// ExperienceTimeline.styles.tsx

export const timelineStyles = {
  px: { xs: 1, sm: 2, md: 4 },
  py: { xs: 2, sm: 3 },
  '& .MuiTimelineItem-root': {
    minHeight: 'auto',
  },
};

export const timelineItemStyles = {
  padding: { xs: '8px 0', sm: 1.2, md: 1.5 },
  minHeight: 'auto',
  '&::before': {
    flex: { xs: 0, sm: 1 },
    padding: { xs: 0, sm: '6px 16px' },
  },
};

export const timelineOppositeContentStyles = {
  paddingTop: { xs: 0.5, sm: 0 },
  paddingRight: { xs: 0, sm: 2 },
  textAlign: 'right' as const,
  flex: { xs: 0, sm: 0.5, md: 1 },
  display: { xs: 'none', sm: 'block' },
  fontSize: { sm: '0.875rem', md: '1rem' },
};

export const timelineContentStyles = {
  paddingTop: { xs: 0.5, sm: 0 },
  py: { xs: 1, sm: 1.5 },
  px: { xs: 1, sm: 2, md: 3 },
};

export const timelineBoxStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: { xs: 0.5, sm: 0.75, md: 1 },
  alignItems: { xs: 'flex-start', sm: 'flex-start' },
};

export const summaryBoxStyles = {
  '& h6': {
    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
    fontWeight: 600,
  },
  '& p': {
    fontSize: { xs: '0.875rem', sm: '0.95rem' },
  },
};
