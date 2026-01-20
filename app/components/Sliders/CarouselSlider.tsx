import React, { useState, useCallback, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { SliderImageProps } from "./types";
import { v4 as uuidv4 } from 'uuid';

const CarouselSlider: React.FC<{ images: SliderImageProps[] }> = ({ images }) => {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 3,
      }}
    >
      {/* Carousel Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={handlePreviousClick}
          sx={{
            position: "absolute",
            left: 0,
            zIndex: 10,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            width: 50,
            height: 50,
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 32 }} />
        </IconButton>

        {/* Left Peek Image */}
        <Box
          sx={{
            flex: "0 0 20%",
            height: 400,
            opacity: 0.5,
            filter: "blur(4px)",
            overflow: "hidden",
            borderRadius: 1,
          }}
        >
          <Box
            component="img"
            src={images[getPrevIndex(currentIndex)].src}
            alt={images[getPrevIndex(currentIndex)].alt}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Center Large Image */}
        <Box
          sx={{
            flex: "0 0 50%",
            height: 400,
            border: "4px solid #51C9FF",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            component="img"
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right Peek Image */}
        <Box
          sx={{
            flex: "0 0 20%",
            height: 400,
            opacity: 0.5,
            filter: "blur(4px)",
            overflow: "hidden",
            borderRadius: 1,
          }}
        >
          <Box
            component="img"
            src={images[getNextIndex(currentIndex)].src}
            alt={images[getNextIndex(currentIndex)].alt}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNextClick}
          sx={{
            position: "absolute",
            right: 0,
            zIndex: 10,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            width: 50,
            height: 50,
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>

      {/* Dot Indicators */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={uuidv4()}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: index === currentIndex ? 10 : 8,
              height: index === currentIndex ? 10 : 8,
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#1F2629" : "#999",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#1F2629",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CarouselSlider;
