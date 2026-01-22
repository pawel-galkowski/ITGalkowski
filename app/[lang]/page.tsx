"use client";

import styles from "@/index.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Box } from "@mui/material";
import React from "react";
import EntrySection from "@/sections/EntrySection";
import InovationSection from "@/sections/InovationSection";
import ExplorePortfolio from "@/sections/ExplorePortfolio";
import FAQSection from "@/sections/FAQSection";
import ImgSliderSection from "../sections/ImgSliderSection";
import ExperienceSection from "../sections/ExperienceSection";
import EmpowerSolutionSection from "../sections/EmpowerSolutionSection";
import TilesSection from "../sections/TilesSection";
import { useParams } from "next/navigation";
import { Languages } from "../i18n/types";
import { useLanguage } from "../context/LanguageContext";
import ContactSection from "@/sections/ContactSection";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <EntrySection />
        <InovationSection />
        <TilesSection />
        <ImgSliderSection />
        <ExperienceSection />
        <EmpowerSolutionSection />
        <FAQSection />
        <ExplorePortfolio />
        <ContactSection />
      </Box>
      <Footer />
    </main>
  );
};

export default Home;
