"use client";

import React from "react";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import { Languages } from "@/i18n/types";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/index.module.css";
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
  flexDirection: "column",
  width: "100%",
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
    <main className={styles.main}>
      <Header />
      <Box sx={homeStyles}>
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
