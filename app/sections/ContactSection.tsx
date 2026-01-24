import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Container, Typography } from "@mui/material";
import ContactForm from "@/components/ContactForm/ContactForm";
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
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center", mb: 4 }}>
          {t("contact.title")}
        </Typography>
        <ContactForm />
      </Container>
    </Box>
  );
};

export default ContactSection;
