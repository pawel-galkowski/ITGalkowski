import React, { useState, useCallback, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { SliderImageProps } from "../types";
import { v4 as uuidv4 } from "uuid";
import { carouselSliderStyles } from "./CarouselSlider.styles";

export const carouselSliderTestIds = {
  root: "carousel-slider-root",
  sliderBox: "carousel-slider-slider-box",
  leftButton: "carousel-slider-left-button",
  rightButton: "carousel-slider-right-button",
  prevImgBox: "carousel-slider-prev-img-box",
  mainImgBox: "carousel-slider-main-img-box",
  nextImgBox: "carousel-slider-next-img-box",
  img: "carousel-slider-img",
  dotBox: "carousel-slider-dot-box",
  dot: "carousel-slider-dot",
};

const CarouselSlider: React.FC<{ images: SliderImageProps[]; height?: number }> = ({
  images,
  height = 400,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNextClick = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNextClick]);

  const getPrevIndex = (index: number) => (index === 0 ? images.length - 1 : index - 1);
  const getNextIndex = (index: number) => (index === images.length - 1 ? 0 : index + 1);

  return (
    <Box sx={carouselSliderStyles.root} data-testid={carouselSliderTestIds.root}>
      <Box sx={carouselSliderStyles.sliderBox} data-testid={carouselSliderTestIds.sliderBox}>
        <IconButton
          onClick={handlePreviousClick}
          sx={carouselSliderStyles.navButton("left")}
          data-testid={carouselSliderTestIds.leftButton}
          aria-label="previous slide"
        >
          <NavigateBeforeIcon sx={{ fontSize: 32 }} />
        </IconButton>

        <Box
          sx={carouselSliderStyles.prevImgBox(height)}
          data-testid={carouselSliderTestIds.prevImgBox}
        >
          <Box
            component="img"
            src={images[getPrevIndex(currentIndex)].src}
            alt={images[getPrevIndex(currentIndex)].alt}
            sx={carouselSliderStyles.img}
            data-testid={carouselSliderTestIds.img}
          />
        </Box>

        <Box
          sx={carouselSliderStyles.mainImgBox(height)}
          data-testid={carouselSliderTestIds.mainImgBox}
        >
          <Box
            component="img"
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            sx={carouselSliderStyles.img}
            data-testid={carouselSliderTestIds.img}
          />
        </Box>

        <Box
          sx={carouselSliderStyles.prevImgBox(height)}
          data-testid={carouselSliderTestIds.nextImgBox}
        >
          <Box
            component="img"
            src={images[getNextIndex(currentIndex)].src}
            alt={images[getNextIndex(currentIndex)].alt}
            sx={carouselSliderStyles.img}
            data-testid={carouselSliderTestIds.img}
          />
        </Box>

        <IconButton
          onClick={handleNextClick}
          sx={carouselSliderStyles.navButton("right")}
          data-testid={carouselSliderTestIds.rightButton}
          aria-label="next slide"
        >
          <NavigateNextIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>

      <Box sx={carouselSliderStyles.dotBox} data-testid={carouselSliderTestIds.dotBox}>
        {images.map((_, index) => (
          <Box
            key={uuidv4()}
            onClick={() => setCurrentIndex(index)}
            sx={carouselSliderStyles.dot(index === currentIndex)}
            data-testid={carouselSliderTestIds.dot}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CarouselSlider;
