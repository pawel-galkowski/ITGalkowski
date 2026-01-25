"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { footerStyles } from "@/components/footer/Footer.styles";

export const footerTestIds = {
  root: "footer-root",
};

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      suppressHydrationWarning
      sx={footerStyles}
      role="contentinfo"
      data-testid={footerTestIds.root}
    >
      <Typography variant="body1">&copy; Copyright {currentYear} ITGalkowski.&nbsp;</Typography>
      <Typography variant="body1">{t("footer.rightsReserved")}</Typography>
    </Box>
  );
};

export default Footer;
