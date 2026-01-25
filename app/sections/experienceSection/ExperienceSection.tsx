import ExperienceTimeline from "@/components/experienceTimeline/ExperienceTimeline";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { experienceSectionStyles } from "./ExperienceSection.styles";

export const experienceSectionTestIds = {
  root: "experience-section-root",
  container: "experience-section-container",
};

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box sx={experienceSectionStyles.root} id="timeline" data-testid={experienceSectionTestIds.root}>
      <Container data-testid={experienceSectionTestIds.container}>
        <Typography variant="h2" sx={experienceSectionStyles.title}>
          {t("experience.header")}
        </Typography>
        <ExperienceTimeline />
      </Container>
    </Box>
  );
};

export default ExperienceSection;
