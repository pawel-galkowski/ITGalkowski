// Styles for ImageTiles component extracted from inline sx and style props

export const imageTilesStyles = {
  root: (isMobile: boolean) => ({
    display: "grid",
    gridTemplateColumns: isMobile 
      ? "1fr" 
      : { xs: '1fr', sm: 'repeat(2, 1fr)' },
    gap: { xs: 3, sm: 4, md: 5 },
    width: "100%",
    px: { xs: 2, sm: 3, md: 4 },
  }),
  tile: {
    display: "flex",
    flexDirection: "column",
    height: '100%',
    textAlign: { xs: "center", sm: "left" },
    alignItems: { xs: "center", sm: "flex-start" },
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: "1",
    objectFit: "cover" as const,
    marginBottom: { xs: 1.5, sm: 2 },
    borderRadius: 1,
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  title: {
    fontWeight: 600,
    marginBottom: { xs: 0.75, sm: 1 },
    fontSize: { xs: '1.1rem', sm: '1.25rem' },
  },
  content: {
    color: "text.secondary",
    fontSize: { xs: '0.875rem', sm: '0.95rem' },
    lineHeight: 1.6,
  },
};
