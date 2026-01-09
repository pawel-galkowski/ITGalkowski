"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: 100,
        backgroundColor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
      role="contentinfo"
    >
      <Typography variant="body1">
        &copy; {currentYear} {t("footer.copyright")}
      </Typography>
    </Box>
  );
};

export default Footer;

