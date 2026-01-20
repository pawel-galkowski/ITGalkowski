import ImgSlider from "@/components/Sliders/ImgSlider";
import { Box } from "@mui/material";
import React from "react";

const ImgSliderSection = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden", backgroundColor: "secondary.main" }}>
      <ImgSlider />
    </Box>
  );
};

export default ImgSliderSection;
 