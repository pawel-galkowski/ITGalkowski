// Styles for ImageTiles component extracted from inline sx and style props

export const imageTilesStyles = {
  root: (isMobile: boolean) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: 3,
    width: "100%",
  }),
  tile: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: "1",
    objectFit: "cover",
    marginBottom: 2,
  },
  title: {
    fontWeight: 600,
    marginBottom: 1,
  },
  content: {
    color: "text.secondary",
  },
};
