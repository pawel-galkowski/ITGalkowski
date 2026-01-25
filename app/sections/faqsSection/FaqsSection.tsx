import Faqs from "@/components/faqs/Faqs";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { faqsSectionStyles } from "./FaqsSection.styles";

export const faqsSectionTestIds = {
  root: "faqs-section-root",
  container: "faqs-section-container",
  contentWrapper: "faqs-section-content-wrapper",
};

const FaqsSection: React.FC = () => {
  const { language } = useLanguage();
  const { translations } = useTranslations(language);

  const faqsList = (translations?.faqs?.list || []) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <Box
      sx={faqsSectionStyles.root}
      id="faqs"
      data-testid={faqsSectionTestIds.root}
    >
      <Container maxWidth="md" data-testid={faqsSectionTestIds.container}>
        <Box
          sx={faqsSectionStyles.contentWrapper}
          data-testid={faqsSectionTestIds.contentWrapper}
        >
          <Typography
            variant="h1"
            sx={faqsSectionStyles.title}
          >
            {translations?.faqs?.header || "Comprehensive JavaScript FAQs"}
          </Typography>
          <Faqs faqsList={faqsList} />
        </Box>
      </Container>
    </Box>
  );
};

export default FaqsSection;
