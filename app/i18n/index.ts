import { useCallback, useMemo } from "react";
import { Languages, type Language, type Translations } from "./types";
import { en } from "./en";
import { pl } from "./pl";


export const translations: Record<Language, Translations> = {
  en,
  pl,
};

export const useTranslations = (language: Language = Languages.EN) => {
  const t = useMemo(() => translations[language] || en, [language]);

  const getText = useCallback(
    (path: string): string => {
      const keys = path.split(".");
      let value: unknown = t;

      for (const key of keys) {
        if (value && typeof value === "object" && key in value) {
          value = value[key];
        } else {
          return path;
        }
      }

      return typeof value === "string" ? value : path;
    },
    [t]
  );

  return { t: getText, translations: t, language };
};
