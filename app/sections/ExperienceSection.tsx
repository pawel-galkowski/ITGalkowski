import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box sx={{ width: "100%", backgroundColor: "secondary.main" }}>
      <Container id="timeline">
        <Typography variant="h2" sx={{ textAlign: "center", mt: 6, mb: 2 }}>
          {t("experience.header")}
        </Typography>
        <ExperienceTimeline />
      </Container>
    </Box>
  );
};

export default ExperienceSection;
