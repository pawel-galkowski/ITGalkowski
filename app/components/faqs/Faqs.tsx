import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import {
  accordionStyles,
  summaryStyles,
  detailsStyles,
  answerTypographyStyles,
} from "./Faqs.styles";

interface FaqsProps {
  faqsList: { question: string; answer: string }[];
}

export const baseTestIds = {
  accordion: "faq-accordion",
  summary: "faq-summary",
  details: "faq-details",
  root: "faqs-root",
}
export const generateFaqTestId = (base: string, index: number) => `${base}-${index}`;

const Faqs: React.FC<FaqsProps> = ({ faqsList }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div data-testid={baseTestIds.root}>
      {faqsList?.map((faq, index) => (
        <Accordion
          key={uuidv4()}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          disableGutters
          elevation={0}
          square
          sx={accordionStyles}
          data-testid={generateFaqTestId(baseTestIds.accordion, index)}
        >
          <AccordionSummary
            expandIcon={
              <Box sx={{ width: 32, display: "flex", justifyContent: "center" }}>
                <ExpandMore sx={{ color: "primary.contrastText" }} />
              </Box>
            }
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={summaryStyles}
            data-testid={generateFaqTestId(baseTestIds.summary, index)}
          >
            <Typography variant="h5">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={detailsStyles} data-testid={generateFaqTestId(baseTestIds.details, index)}>
            <Typography sx={answerTypographyStyles} variant="body1">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Faqs;
