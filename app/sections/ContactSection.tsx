import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Typography } from "@mui/material";
import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "primary.main",
        py: 12,
        px: 2,
        color: "primary.contrastText",
        width: "100%",
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "center", mb: 4 }}>
        {t("contact.title")}
      </Typography>
      <ContactForm />
    </Box>
  );
};

export default ContactSection;
