"use client";

import styles from "@/index.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import ImageTiles from "@/components/ImageTiles/ImageTiles";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { defaultSectionStyle } from "@/styles";
import EntrySection from "@/sections/EntrySection";
import InovationSection from "@/sections/InovationSection";
import ImgSlider from "@/components/Sliders/ImgSlider";
import ExplorePortfolio from "@/sections/ExplorePortfolio";
import FAQSection from "@/sections/FAQSection";

const Home: React.FC = () => (
  <main className={styles.main}>
    <Header />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <EntrySection />
      <InovationSection />
      <Box sx={defaultSectionStyle}>
        <Container>
          <ImageTiles />
          <ImgSlider />
          <Typography variant="h2" sx={{ textAlign: "center", mt: 6, mb: 2 }}>
            My work timeline
          </Typography>
          <ExperienceTimeline />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Box
              component="img"
              src="https://media.gettyimages.com/id/2205520230/photo/3d-icon-for-web-development-and-software-engineering.jpg?b=1&s=2048x2048&w=0&k=20&c=sg_V1rAwBQp9fP76ToxnVeXoaam_4c4bW_yFprT0AVY="
              alt="Placeholder"
              sx={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Box
              sx={{
                ml: 4,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h3">Empowering Digital Solutions in Katowice</Typography>
              <Typography variant="body2">
                Located in the heart of Katowice, Software Engineering showcases a diverse portfolio
                of full-stack JavaScript projects that highlight innovation and expertise.
                Specializing in building seamless user experiences, our work combines cutting-edge
                technology with a passion for solving complex problems. We are committed to
                delivering high-quality software solutions that drive success for businesses around
                the world.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <FAQSection />
      <ExplorePortfolio />
    </Box>

    <Footer />
  </main>
);

export default Home;
