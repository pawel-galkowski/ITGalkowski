import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Typography, Button } from "@mui/material";
import React from "react";

const ExplorePortfolio = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: 'cover',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "black",
        gap: 2,
        backgroundImage:
          "url(https://media.gettyimages.com/id/1413283697/photo/writing-code-creating-website-dashboards-and-programming-help-for-technology-website-upkeep.jpg?b=1&s=2048x2048&w=0&k=20&c=uRu5fvA1eopJyvF5AiiQIOlK6xvaoHhBrucKIupMQdM=)",
      }}
    >
      <Typography variant="h1">{t('explorePortfolio.title')}</Typography>
      <Typography variant="body1">{t('explorePortfolio.body')}</Typography>
      <Button variant="contained" color="primary">{t('explorePortfolio.button')}</Button>
    </Box>
  );
};

export default ExplorePortfolio;
