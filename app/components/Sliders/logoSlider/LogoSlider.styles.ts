import { keyframes } from "@mui/system";

export const logoSliderKeyframes = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    /* move by one full sequence (5 logos at 20% = 100% of track) for seamless loop */
    transform: translateX(-100%);
  }
`;

export const logoSliderStyles = {
  root: {
    width: "100%",
    backgroundColor: "secondary.main",
    py: { xs: 3, sm: 4 },
    overflow: "hidden",
  },
  track: {
    display: "flex",
    animation: {
      xs: `${logoSliderKeyframes} 12s linear infinite`,
      sm: `${logoSliderKeyframes} 18s linear infinite`,
      md: `${logoSliderKeyframes} 24s linear infinite`,
    },
    width: "200%",
    willChange: 'transform',
    backfaceVisibility: 'hidden',
  },
  logoBox: {
    /* 10 logos at 20% = 200% of track; animation -100% moves 5 logos = seamless */
    flex: "0 0 20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 3, sm: 4, md: 5 },
    minHeight: { xs: 100, sm: 140, md: 100, lg: 200 },
    willChange: 'transform',
    backfaceVisibility: 'hidden',
  },
  logoImg: {
    height: { xs: 100, sm: 140, md: 100, lg: 200 },
    width: 'auto',
    maxWidth: '100%',
    objectFit: "contain",
    filter: `grayscale(0%)`,
    transition: 'filter 0.3s ease, transform 0.2s ease',
    backfaceVisibility: 'hidden',
  },
};
