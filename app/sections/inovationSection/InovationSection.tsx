import { LogoSlider } from "@/components/sliders";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslations } from "@/i18n";
import { useLanguage } from "@/context/LanguageContext";
import { inovationSectionStyles } from "./InovationSection.styles";

export const inovationSectionTestIds = {
  root: "inovation-section-root",
  container: "inovation-section-container",
  textBox: "inovation-section-text-box",
  image: "inovation-section-image",
};

const InovationSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box sx={inovationSectionStyles.root} id="about" data-testid={inovationSectionTestIds.root}>
      <Container
        fixed={true}
        sx={inovationSectionStyles.container}
        data-testid={inovationSectionTestIds.container}
      >
        <Box
          sx={inovationSectionStyles.textBox}
          data-testid={inovationSectionTestIds.textBox}
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
          sx={inovationSectionStyles.image}
          data-testid={inovationSectionTestIds.image}
        />
      </Container>
      <LogoSlider />
    </Box>
  );
};

export default InovationSection;
