import Faqs from "@/components/Faqs/Faqs";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const { translations } = useTranslations(language);

  const faqsList = (translations?.faqs?.list || []) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: 12,
        px: 2,
        color: "primary.contrastText",
        width: "100%",
        height: { md: '760px', xs: 'auto' },
      }}
      id="faqs"
    >
      <Container maxWidth="md">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 500,
              mb: 3,
              textAlign: "center",
            }}
          >
            {translations?.faqs?.header || "Comprehensive JavaScript FAQs"}
          </Typography>
          <Faqs faqsList={faqsList} />
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
