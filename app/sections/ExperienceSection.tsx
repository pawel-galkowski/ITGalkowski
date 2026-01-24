import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const experienceSectionStyle = {
  pt: 4,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: 4,
  backgroundColor: "secondary.main",
};

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box sx={experienceSectionStyle} id="timeline">
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center", mt: 6, mb: 2 }}>
          {t("experience.header")}
        </Typography>
        <ExperienceTimeline />
      </Container>
    </Box>
  );
};

export default ExperienceSection;
