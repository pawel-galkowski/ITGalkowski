import React from "react";
import { Box } from "@mui/material";
import { SliderImageProps } from "../types";
// stable keys used instead of uuid to avoid remounts during animation
import { logoSliderStyles } from "./LogoSlider.styles";

export const logoSliderTestIds = {
  root: "logo-slider-root",
  track: "logo-slider-track",
  logoBox: "logo-slider-logo-box",
  logoImg: "logo-slider-logo-img",
};

const images: SliderImageProps[] = [
  {
    src: "https://szpital-raciborz.org/wp-content/uploads/2023/04/logo-2-1.png",
    alt: "Szpital rejonowy w Raciborzu Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Instal-konsorcjum-logo-RGB-%401600px.jpg",
    alt: "Instal Konsorcjum Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/81/ABN_AMRO_logo.svg",
    alt: "ABN AMRO Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/49/ING_Group_N.V._Logo.svg",
    alt: "Ing Bank Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
    alt: "Capgemini Polska Logo",
  },
];

const LogoSlider: React.FC = () => (
  <Box sx={logoSliderStyles.root} data-testid={logoSliderTestIds.root}>
    <Box sx={logoSliderStyles.track} data-testid={logoSliderTestIds.track}>
      {images.concat(images).map((image, idx) => {
        const originalIndex = idx % images.length;
        const isDuplicate = idx >= images.length;
        return (
          <Box
            key={`logo-${originalIndex}-${Math.floor(idx / images.length)}`}
            sx={logoSliderStyles.logoBox}
            data-testid={logoSliderTestIds.logoBox}
            aria-hidden={isDuplicate ? true : undefined}
          >
            <Box
              component="img"
              src={image.src}
              alt={isDuplicate ? "" : image.alt}
              sx={logoSliderStyles.logoImg}
              data-testid={logoSliderTestIds.logoImg}
            />
          </Box>
        );
      })}
    </Box>
  </Box>
);

export default LogoSlider;
