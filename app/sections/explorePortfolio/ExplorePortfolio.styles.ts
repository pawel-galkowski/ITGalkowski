export const explorePortfolioStyles = {
  root: {
    width: "100%",
    height: 600,
    position: "relative",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    gap: 2,
  },
  button: {
    backgroundColor: "secondary.light",
    opacity: 1,
  },
  backgroundImage: {
    width: "100%",
    objectFit: "cover",
    backgroundImage:
      "url(https://media.gettyimages.com/id/1413283697/photo/writing-code-creating-website-dashboards-and-programming-help-for-technology-website-upkeep.jpg?b=1&s=2048x2048&w=0&k=20&c=uRu5fvA1eopJyvF5AiiQIOlK6xvaoHhBrucKIupMQdM=)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  },
};
