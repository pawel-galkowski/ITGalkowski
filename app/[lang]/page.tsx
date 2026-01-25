"use client";

import React from "react";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import { Languages } from "@/i18n/types";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import EntrySection from "@/sections/entrySection/EntrySection";
import InovationSection from "@/sections/inovationSection/InovationSection";
import ExplorePortfolio from "@/sections/explorePortfolio/ExplorePortfolio";
import FaqsSection from "@/sections/faqsSection/FaqsSection";
import ImgSliderSection from "@/sections/imgSliderSection/ImgSliderSection";
import ExperienceSection from "@/sections/experienceSection/ExperienceSection";
import EmpowerSolutionSection from "@/sections/empowerSolutionSection/EmpowerSolutionSection";
import TilesSection from "@/sections/tilesSection/TilesSection";
import ContactSection from "@/sections/contactSection/ContactSection";

const homeStyles = {
  display: "flex",
  flexDirection: "column" as const,
  width: "100%",
  maxWidth: "100vw",
  alignItems: "center",
  paddingTop: { xs: '56px', sm: '64px', md: '70px' },
  overflow: 'hidden',
};

const Home: React.FC = () => {
  const params = useParams();
  const { setLanguage } = useLanguage();
  React.useEffect(() => {
    const lang = params?.lang;
    if (lang === Languages.EN || lang === Languages.PL) {
      setLanguage(lang);
    }
  }, [params, setLanguage]);

  return (
    <main className="main" role="main" aria-label="Main content">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Header />
      <Box component="div" id="main-content" sx={homeStyles}>
        <EntrySection />
        <InovationSection />
        <TilesSection />
        <ImgSliderSection />
        <ExperienceSection />
        <EmpowerSolutionSection />
        <FaqsSection />
        <ExplorePortfolio />
        <ContactSection />
      </Box>
      <Footer />
    </main>
  );
};

export default Home;
