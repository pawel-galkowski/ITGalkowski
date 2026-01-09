"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Language } from "@/i18n/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    if (globalThis.window !== undefined) {
      localStorage.setItem("language", lang);
    }
  }, []);

  // Initialize from localStorage on mount
  React.useEffect(() => {
    if (globalThis.window !== undefined) {
      const stored = localStorage.getItem("language") as Language | null;
      if (stored && (stored === "en" || stored === "pl")) {
        handleSetLanguage(stored);
      }
    }
  }, []);

  const value = React.useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
