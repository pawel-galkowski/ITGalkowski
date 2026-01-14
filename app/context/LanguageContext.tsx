"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Languages, type Language } from "../i18n/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(Languages.EN);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    if (globalThis.window !== undefined) {
      localStorage.setItem("language", lang);
    }
  }, []);

  // Initialize from localStorage after hydration only
  React.useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;
    if (stored && (stored === Languages.EN || stored === Languages.PL)) {
      setLanguage(stored);
    }
  }, []);

  const value = React.useMemo(
    () => ({ language, setLanguage: handleSetLanguage }),
    [language, handleSetLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
