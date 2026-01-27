"use client";

import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Languages } from "../i18n/types";

interface Props {
  initialLanguage: Languages;
}

export default function LanguageInitializer({ initialLanguage }: Props) {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (initialLanguage === Languages.PL) {
      setLanguage(Languages.PL);
      if (typeof document !== "undefined") {
        document.documentElement.lang = Languages.PL;
      }
    } else {
      setLanguage(Languages.EN);
      if (typeof document !== "undefined") {
        document.documentElement.lang = Languages.EN;
      }
    }
  }, [initialLanguage, setLanguage]);

  return null;
}
