"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { explorePortfolioStyles } from "./ExplorePortfolio.styles";

export const explorePortfolioTestIds = {
  root: "explore-portfolio-root",
  overlay: "explore-portfolio-overlay",
  button: "explore-portfolio-button",
  backgroundImage: "explore-portfolio-background-image",
};

const ExplorePortfolio: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  return (
    <Box
      sx={explorePortfolioStyles.root}
      id="projects"
      data-testid={explorePortfolioTestIds.root}
    >
      <Box
        sx={explorePortfolioStyles.overlay}
        data-testid={explorePortfolioTestIds.overlay}
      >
        <Typography variant="h1">{t("explorePortfolio.title")}</Typography>
        <Typography variant="body1">{t("explorePortfolio.body")}</Typography>
        <Button
          href="https://github.com/pawel-galkowski"
          target="_blank"
          variant="contained"
          sx={explorePortfolioStyles.button}
          data-testid={explorePortfolioTestIds.button}
        >
          {t("explorePortfolio.button")}
        </Button>
      </Box>
      <Box
        sx={explorePortfolioStyles.backgroundImage}
        data-testid={explorePortfolioTestIds.backgroundImage}
      ></Box>
    </Box>
  );
};

export default ExplorePortfolio;
