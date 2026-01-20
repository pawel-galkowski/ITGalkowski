import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { v4 as uuidv4 } from "uuid";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";

export default function Faqs() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { language } = useLanguage();
  const { translations } = useTranslations(language);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqsList = (translations?.faqs?.list || []) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}>
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
      {faqsList?.map((faq, index) => (
        <Accordion
          key={uuidv4()}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          sx={{
            backgroundColor: "transparent",
            color: "primary.contrastText",
            border: "none",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              padding: "16px 0",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "8px 0 20px 0",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
