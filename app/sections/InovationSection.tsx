import LogoSlider from "@/components/Sliders/LogoSlider";
import { defaultSectionStyle } from "../styles";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const InovationSection: React.FC = () => {
  return (
    <Box sx={{ defaultSectionStyle, backgroundColor: "#1F2629" }}>
      <Container
        fixed={true}
        sx={{
          gap: 4,
          display: "flex",
          flexDirection: "column",
          p: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            mt: 4,
            mb: 4,
          }}
        >
          <Typography variant="h1" color="white">
            Innovative JavaScript Engineering Silesia
          </Typography>
          <Typography variant="h4" color="white">
            Explore top-tier full-stack JavaScript solutions with our expert services in Katowice.
            Specializing in cutting-edge technologies, we deliver seamless, scalable web
            applications tailored to your unique business needs. Partner with a trusted engineer
            dedicated to driving innovation and efficiency in the Silesian Voivodeship and beyond.
          </Typography>
        </Box>
        <Box
          component="img"
          src="/img/laptop.jpg"
          alt="laptop"
          sx={{
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Container>
      <LogoSlider />
    </Box>
  );
};

export default InovationSection;
