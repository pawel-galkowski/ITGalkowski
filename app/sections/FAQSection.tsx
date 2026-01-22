import Faqs from "@/components/Faqs/Faqs";
import { Box, Container } from "@mui/material";
import React from "react";

const FAQSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: 12,
        px: 2,
        color: "primary.contrastText",
        width: "100%",
      }}
      id="faqs"
    >
      <Container maxWidth="md">
        <Faqs />
      </Container>
    </Box>
  );
};

export default FAQSection;
