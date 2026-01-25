// Styles for LogoSlider component extracted from inline sx and style props
import { keyframes } from "@mui/system";

export const logoSliderKeyframes = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const logoSliderStyles = {
  root: {
    width: "100%",
    backgroundColor: "#1F2629",
    py: 4,
    overflow: "hidden",
  },
  track: {
    display: "flex",
    animation: `${logoSliderKeyframes} 20s linear infinite`,
    width: "200%",
  },
  logoBox: {
    flex: "0 0 16.666%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 2,
    minHeight: 120,
  },
  logoImg: (grayscale: number) => ({
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain",
    filter: `grayscale(${grayscale}%)`,
  }),
};
