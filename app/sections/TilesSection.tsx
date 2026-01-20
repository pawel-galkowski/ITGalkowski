import ImageTiles from "@/components/ImageTiles/ImageTiles";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const TilesSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box sx={{ width: "100%", backgroundColor: "secondary.main", py: 12 }}>
      <Container>
        <Typography variant="h2" sx={{ mt: 6, mb: 2 }}>
          {t("tiles.header")}
        </Typography>
        <ImageTiles />
      </Container>
    </Box>
  );
};

export default TilesSection;
