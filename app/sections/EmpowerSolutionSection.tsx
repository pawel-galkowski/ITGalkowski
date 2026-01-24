import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";
import { Container, Box, Typography } from "@mui/material";
import React from "react";

const EmpowerSolutionSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: { md: "500px", xs: "auto" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 6,
          }}
        >
          <Box
            sx={{
              flex: "0 0 45%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="https://media.gettyimages.com/id/2205520230/photo/3d-icon-for-web-development-and-software-engineering.jpg?b=1&s=2048x2048&w=0&k=20&c=sg_V1rAwBQp9fP76ToxnVeXoaam_4c4bW_yFprT0AVY="
              alt="Empowering Digital Solutions"
              sx={{
                width: "100%",
                maxWidth: 800,
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 2,
              }}
            />
          </Box>
          <Box
            sx={{
              flex: "0 0 55%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h1">{t("empowerSolutionSection.title")}</Typography>
            <Typography variant="body1">{t("empowerSolutionSection.body")}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EmpowerSolutionSection;
