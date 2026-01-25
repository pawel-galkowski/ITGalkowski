import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Container, Box, Typography } from "@mui/material";
import React from "react";
import { empowerSolutionSectionStyles } from "./EmpowerSolutionSection.styles";

export const empowerSolutionSectionTestIds = {
  root: "empower-solution-section-root",
  container: "empower-solution-section-container",
  contentWrapper: "empower-solution-section-content-wrapper",
  imageBox: "empower-solution-section-image-box",
  image: "empower-solution-section-image",
  textBox: "empower-solution-section-text-box",
};

const EmpowerSolutionSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box
      sx={empowerSolutionSectionStyles.root}
      data-testid={empowerSolutionSectionTestIds.root}
    >
      <Container maxWidth="xl" data-testid={empowerSolutionSectionTestIds.container}>
        <Box
          sx={empowerSolutionSectionStyles.contentWrapper}
          data-testid={empowerSolutionSectionTestIds.contentWrapper}
        >
          <Box
            sx={empowerSolutionSectionStyles.imageBox}
            data-testid={empowerSolutionSectionTestIds.imageBox}
          >
            <Box
              component="img"
              src="https://media.gettyimages.com/id/2205520230/photo/3d-icon-for-web-development-and-software-engineering.jpg?b=1&s=2048x2048&w=0&k=20&c=sg_V1rAwBQp9fP76ToxnVeXoaam_4c4bW_yFprT0AVY="
              alt="Empowering Digital Solutions"
              sx={empowerSolutionSectionStyles.image}
              data-testid={empowerSolutionSectionTestIds.image}
            />
          </Box>
          <Box
            sx={empowerSolutionSectionStyles.textBox}
            data-testid={empowerSolutionSectionTestIds.textBox}
          >
            <Typography variant="h1">{t("empowerSolutionSection.title")}</Typography>
            <Typography variant="body1">{t("empowerSolutionSection.body")}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EmpowerSolutionSection;
