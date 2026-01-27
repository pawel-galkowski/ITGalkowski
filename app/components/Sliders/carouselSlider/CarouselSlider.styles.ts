// Styles for CarouselSlider component extracted from inline sx and style props

export const carouselSliderStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: { xs: 2, sm: 3 },
    overflow: "hidden",
  },
  sliderBox: (width?: number | string) => {
    const base = {
      position: "relative",
      width: "100%",
      maxWidth: width === "100%" ? "100%" : { xs: "100%", sm: "90%", md: "85%" },
      mx: "auto",
      px: { xs: 0.5, sm: 2 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: { xs: 1, sm: 2 },
      minHeight: { xs: "auto", sm: "auto" },
    };
    return base;
  },
  navButton: (side: "left" | "right") => {
    const base = {
      position: "absolute" as const,
      zIndex: 10,
      color: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
      width: { xs: 40, sm: 50 },
      height: { xs: 40, sm: 50 },
    };
    if (side === "left") return { ...base, left: { xs: 0, sm: 10 } };
    if (side === "right") return { ...base, right: { xs: 0, sm: 10 } };
    return base;
  },
  prevImgBox: (height: number, width?: number | string) => ({
    flex: { xs: "0 0 0%", sm: "0 0 20%", md: "0 0 25%" },
    height: { xs: 0, sm: height * 0.8, md: height },
    opacity: { xs: 0, sm: 0.5 },
    filter: { xs: "none", sm: "blur(4px)" },
    overflow: "hidden",
    borderRadius: 1,
    display: { xs: "none", sm: "block" },
  }),
  mainImgBox: (height: number, width?: number | string) => ({
    flex: { xs: "1 1 100%", sm: "0 0 60%", md: "0 0 50%" },
    height: { xs: "auto", sm: height * 0.9, md: height },
    aspectRatio: { xs: "16/9", sm: "auto" },
    maxHeight: { xs: 350, sm: "none" },
    border: "4px solid #51C9FF",
    borderRadius: 2,
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  }),
  nextImgBox: (height: number, width?: number | string) => ({
    flex: { xs: "0 0 0%", sm: "0 0 20%", md: "0 0 25%" },
    height: { xs: 0, sm: height * 0.8, md: height },
    opacity: { xs: 0, sm: 0.5 },
    filter: { xs: "none", sm: "blur(4px)" },
    overflow: "hidden",
    borderRadius: 1,
    display: { xs: "none", sm: "block" },
  }),
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
  },
  dotBox: {
    display: "flex",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: (active: boolean) => ({
    width: active ? 10 : 8,
    height: active ? 10 : 8,
    borderRadius: "50%",
    backgroundColor: active ? "#1F2629" : "#999",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1F2629",
    },
  }),
};
