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
        py: 8,
        px: 2,
        width: "100%",
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
                maxWidth: 400,
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
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "28px", sm: "32px", md: "40px" },
                fontWeight: 400,
                lineHeight: 1.3,
                color: "primary.main",
              }}
            >
              {t("empowerSolutionSection.title")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                lineHeight: 1.6,
                color: "primary.main",
              }}
            >
              {t("empowerSolutionSection.body")}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EmpowerSolutionSection;
