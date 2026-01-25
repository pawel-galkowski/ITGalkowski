export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  date: string;
  summary: string;
  url: {
    label: string;
    href: string;
  };
}

export type ExperienceData = ExperienceItem[];
