'use client';

import { ThemeProvider } from "@mui/material";
import { LanguageProvider } from "./context/LanguageContext";
import theme from "./theme";
import { ReactNode } from "react";

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
