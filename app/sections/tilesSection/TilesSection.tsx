import ImageTiles from "@/components/ImageTiles/ImageTiles";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { tilesSectionStyles } from "./TilesSection.styles";

export const tilesSectionTestIds = {
  root: "tiles-section-root",
  container: "tiles-section-container",
};

const TilesSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box sx={tilesSectionStyles.root} id="subjects" data-testid={tilesSectionTestIds.root}>
      <Container data-testid={tilesSectionTestIds.container}>
        <Typography variant="h2" sx={tilesSectionStyles.title}>
          {t("tiles.header")}
        </Typography>
        <ImageTiles />
      </Container>
    </Box>
  );
};

export default TilesSection;
