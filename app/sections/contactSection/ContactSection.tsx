import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Container, Typography } from "@mui/material";
import ContactForm from "@/components/contact-form";
import React from "react";
import { contactSectionStyles } from "./ContactSection.styles";

export const contactSectionTestIds = {
  root: "contact-section-root",
  container: "contact-section-container",
};

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box
      id="contact"
      sx={contactSectionStyles.root}
      data-testid={contactSectionTestIds.root}
    >
      <Container data-testid={contactSectionTestIds.container}>
        <Typography variant="h2" sx={contactSectionStyles.title}>
          {t("contact.title")}
        </Typography>
        <ContactForm />
      </Container>
    </Box>
  );
};

export default ContactSection;
