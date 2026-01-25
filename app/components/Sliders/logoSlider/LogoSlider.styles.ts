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
    py: { xs: 3, sm: 4 },
    overflow: "hidden",
  },
  track: {
    display: "flex",
    animation: {
      xs: `${logoSliderKeyframes} 12s linear infinite`,  // Faster on mobile
      sm: `${logoSliderKeyframes} 16s linear infinite`,  // Medium speed on tablet
      md: `${logoSliderKeyframes} 20s linear infinite`,  // Normal speed on desktop
    },
    width: "200%",
  },
  logoBox: {
    flex: { 
      xs: "0 0 50%",      // Show 2 logos on mobile (each 50%)
      sm: "0 0 33.333%",  // Show 3 logos on tablets (each 33.333%)
      md: "0 0 25%",      // Show 4 logos on medium screens (each 25%)
      lg: "0 0 16.666%"   // Show 6 logos on large screens (each 16.666%)
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 1.5, sm: 2, md: 2.5 },
    minHeight: { xs: 100, sm: 120, md: 140 },
  },
  logoImg: (grayscale: number) => ({
    maxHeight: "100%",
    maxWidth: "100%",
    width: { xs: '90%', sm: '85%', md: '80%' },
    height: 'auto',
    objectFit: "contain",
    filter: `grayscale(${grayscale}%)`,
    transition: 'filter 0.3s ease',
  }),
};
