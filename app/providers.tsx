'use client';

import { ThemeProvider } from "@mui/material";
import { LanguageProvider } from "./context/LanguageContext";
import theme from "./theme";
import { ReactNode } from "react";

interface ProvidersProps {
  readonly children: ReactNode;
  readonly initialLanguage?: string;
}

export function Providers({ children, initialLanguage }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider initialLanguage={initialLanguage as any}>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
