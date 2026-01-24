import LogoSlider from "@/components/Sliders/LogoSlider";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslations } from "@/i18n";
import { useLanguage } from "@/context/LanguageContext";

export const inovationSectionStyle = {
  pt: 4,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: 4,
  backgroundColor: "primary.main",
};

const InovationSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box sx={inovationSectionStyle} id="about">
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
            {t("inovationSection.title")}
          </Typography>
          <Typography variant="h4" color="white">
            {t("inovationSection.body")}
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
