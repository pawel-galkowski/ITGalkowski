import { useTranslations } from "@/i18n";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { entrySectionStyles } from "./EntrySection.styles";

export const entrySectionTestIds = {
  root: "entry-section-root",
  textBox: "entry-section-text-box",
  button: "entry-section-button",
  image: "entry-section-image",
};

const EntrySection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box sx={entrySectionStyles.root} data-testid={entrySectionTestIds.root}>
      <Box
        sx={entrySectionStyles.textBox}
        data-testid={entrySectionTestIds.textBox}
      >
        <Typography variant="h1">{t("entrySection.title")}</Typography>
        <Typography variant="h4">{t("entrySection.body")}</Typography>
        <Button
          variant="contained"
          size="large"
          sx={entrySectionStyles.button}
          data-testid={entrySectionTestIds.button}
        >
          {t("entrySection.button")}
        </Button>
      </Box>
      <Box
        component="img"
        src="/img/top-layout.jpg"
        alt="Top Layout"
        sx={entrySectionStyles.image}
        data-testid={entrySectionTestIds.image}
      />
    </Box>
  );
};

export default EntrySection;
