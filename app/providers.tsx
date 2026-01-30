"use client";

import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import theme from "./theme";

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
