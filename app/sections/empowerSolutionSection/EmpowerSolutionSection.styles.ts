export const empowerSolutionSectionStyles = {
  root: {
    backgroundColor: "secondary.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: { md: "500px", xs: "auto" },
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
  },
  imageBox: {
    flex: "0 0 45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: 800,
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 2,
  },
  textBox: {
    flex: "0 0 55%",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};
