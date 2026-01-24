import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

interface FaqsProps {
  faqsList: { question: string; answer: string }[];
}

const Faqs: React.FC<FaqsProps> = ({ faqsList }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {faqsList?.map((faq, index) => (
        <Accordion
          key={uuidv4()}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          disableGutters
          elevation={0}
          square
          sx={{
            backgroundColor: "transparent",
            color: "primary.contrastText",
            border: "1px solid transparent",
            py: 0,
            px: 2,
            margin: 0,
            transition: "border-color 0.2s",
            "&:before": { display: "none" },
            "&.Mui-expanded": {
              margin: 0,
              borderColor: "primary.contrastText",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <Box sx={{ width: 32, display: "flex", justifyContent: "center" }}>
                <ExpandMore sx={{ color: "primary.contrastText" }} />
              </Box>
            }
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              padding: "16px 0",
              minHeight: "48px",
              transition: "min-height 0.2s",
              "&.Mui-expanded": {
                minHeight: "48px",
              },
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
              overflow: "hidden",
              transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
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
    </>
  );
};

export default Faqs;
