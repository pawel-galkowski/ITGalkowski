export type Language = "en" | "pl";

export interface Translations {
  header: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  footer: {
    copyright: string;
    followUs: string;
    quickLinks: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
  };
}
