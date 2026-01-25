// Styles for CarouselSlider component extracted from inline sx and style props

export const carouselSliderStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 3,
  },
  sliderBox: {
    position: "relative",
    width: "100%",
    mx: "auto",
    px: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  navButton: (side: "left" | "right") => {
    const base = {
      position: "absolute" as const,
      zIndex: 10,
      color: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      '&:hover': {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      width: 50,
      height: 50,
    };
    if (side === "left") return { ...base, left: 10 as const };
    if (side === "right") return { ...base, right: 10 as const };
    return base;
  },
  prevImgBox: (height: number) => ({
    flex: "0 0 25%",
    height,
    opacity: 0.5,
    filter: "blur(4px)",
    overflow: "hidden",
    borderRadius: 1,
  }),
  mainImgBox: (height: number) => ({
    flex: "0 0 50%",
    height,
    border: "4px solid #51C9FF",
    borderRadius: 2,
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  }),
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
    '&:hover': {
      backgroundColor: "#1F2629",
    },
  }),
};
