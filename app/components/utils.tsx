import { Languages } from "@/i18n/types";
import { Box } from "@mui/material";

export const LanguageButtons: React.FC<{
  language: Languages;
  handleLanguageChange: (ln: Languages) => void;
}> = ({ language, handleLanguageChange }) => (
  <Box sx={{ marginX: 2, display: "flex", alignItems: "center" }}>
    {language === Languages.EN && (
      <Box
        onClick={() => handleLanguageChange(Languages.PL)}
        component="img"
        src="/img/en.png"
        alt="English flag"
        sx={{
          objectFit: "cover",
          width: 20,
          height: "auto",
        }}
      />
    )}
    {language === Languages.PL && (
      <Box
        onClick={() => handleLanguageChange(Languages.EN)}
        component="img"
        src="/img/pl.png"
        alt="Polish flag"
        sx={{
          objectFit: "cover",
          width: 20,
          height: "auto",
        }}
      />
    )}
  </Box>
);
