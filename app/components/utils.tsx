import { Languages } from "@/i18n/types";
import { Box } from "@mui/material";
import { languageButtonsStyles } from "./utils.styles";

export const languageButtonsTestIds = {
  container: "language-buttons-container",
  enFlag: "language-buttons-en-flag",
  plFlag: "language-buttons-pl-flag",
};

export const LanguageButtons: React.FC<{
  language: Languages;
  handleLanguageChange: (ln: Languages) => void;
}> = ({ language, handleLanguageChange }) => (
  <Box sx={languageButtonsStyles.container} data-testid={languageButtonsTestIds.container}>
    {language === Languages.EN && (
      <Box
        onClick={() => handleLanguageChange(Languages.PL)}
        component="img"
        src="/img/en.png"
        alt="English flag"
        sx={languageButtonsStyles.flag}
        data-testid={languageButtonsTestIds.enFlag}
      />
    )}
    {language === Languages.PL && (
      <Box
        onClick={() => handleLanguageChange(Languages.EN)}
        component="img"
        src="/img/pl.png"
        alt="Polish flag"
        sx={languageButtonsStyles.flag}
        data-testid={languageButtonsTestIds.plFlag}
      />
    )}
  </Box>
);
