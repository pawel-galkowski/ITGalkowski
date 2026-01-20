import { useTranslations } from "@/i18n";
import { fullLayoutSectionStyle } from "../styles";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const EntrySection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box sx={[fullLayoutSectionStyle, { flex: 1, backgroundColor: "secondary.main" }]}>
      <Box
        sx={{
          gap: 4,
          display: "flex",
          flexDirection: "column",
          pl: "16%",
          pr: "4%",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <Typography variant="h1">{t("entrySection.title")}</Typography>
        <Typography variant="h4">{t("entrySection.body")}</Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: 0,
            backgroundColor: "secondary.light",
            color: "secondary.contrastText",
            fontWeight: 600,
          }}
        >
          {t("entrySection.button")}
        </Button>
      </Box>
      <Box
        component="img"
        src="/img/top-layout.jpg"
        alt="Top Layout"
        sx={{
          width: "50%",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
};

export default EntrySection;
