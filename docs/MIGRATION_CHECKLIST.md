# Component Migration Checklist

This checklist tracks migration of all components to modern standards:
- ✅ i18n support (Polish & English)
- ✅ Accessibility (a11y) features
- ✅ Semantic HTML
- ✅ Tests with a11y checks

## Completed Components ✅

- [x] **Header** (`src/components/header/Header.tsx`)
  - ✅ i18n translations
  - ✅ Semantic HTML (`<header>`, `role="banner"`)
  - ✅ ARIA labels
  - ✅ a11y tests

- [x] **Footer** (`src/components/footer/Footer.tsx`)
  - ✅ i18n translations
  - ✅ Semantic HTML (`<footer>`, `role="contentinfo"`)
  - ✅ Ready for a11y tests

## To Do - Priority 1 (Core Components)

- [ ] **Navigation Menu**
  - [ ] Extract nav items to i18n
  - [ ] Add aria-current for active page
  - [ ] Test keyboard navigation
  - [ ] Add a11y tests

- [ ] **Main Page** (`src/pages/index.tsx`)
  - [ ] Wrap with semantic `<main>` tag
  - [ ] i18n all visible text
  - [ ] Add page heading (h1)
  - [ ] Update metadata
  - [ ] Add a11y tests

## To Do - Priority 2 (Section Components)

- [ ] **EntrySection** (`src/sections/EntrySection.tsx`)
  - [ ] i18n translations
  - [ ] Add section heading
  - [ ] Semantic structure
  - [ ] a11y tests

- [ ] **InovationSection** (`src/sections/InovationSection.tsx`)
  - [ ] i18n translations
  - [ ] Add section heading
  - [ ] Image alt texts
  - [ ] a11y tests

## To Do - Priority 3 (Feature Components)

- [ ] **Experience/ExperienceTimeline** (`src/components/Experience/`)
  - [ ] i18n for all labels
  - [ ] Semantic list structure
  - [ ] ARIA descriptions
  - [ ] a11y tests

- [ ] **Faqs** (`src/components/faqs/`)
  - [ ] i18n for questions/answers
  - [ ] Proper button roles
  - [ ] ARIA expanded states
  - [ ] Keyboard navigation
  - [ ] a11y tests

- [ ] **Sliders** (`src/components/Sliders/`)
  - Slider base (`Slider.tsx`)
    - [ ] i18n navigation labels
    - [ ] ARIA live regions
    - [ ] Keyboard controls
    - [ ] a11y tests
  
  - ImgSlider (`ImgSlider.tsx`)
    - [ ] i18n labels
    - [ ] Image descriptions
    - [ ] a11y tests
  
  - LogoSlider (`LogoSlider.tsx`)
    - [ ] i18n labels
    - [ ] Alternative text for logos
    - [ ] a11y tests

- [ ] **ImageTiles** (`src/components/imageTiles/`)
  - [ ] i18n for any labels
  - [ ] Image alt texts
  - [ ] Card semantics
  - [ ] a11y tests

## Global Updates Needed

- [ ] **Environment Setup**
  - [ ] Document environment variables
  - [ ] Create `.env.example`
  - [ ] Add deployment guides

- [ ] **Testing**
  - [ ] Ensure all tests pass
  - [ ] Add 100% a11y test coverage
  - [ ] Run Lighthouse audit
  - [ ] Document accessibility audit results

- [ ] **Documentation**
  - [ ] Update README.md with new features
  - [ ] Create CONTRIBUTING.md guide
  - [ ] Document translation workflow
  - [ ] Create component template

- [ ] **CI/CD**
  - [ ] Configure GitHub Actions
  - [ ] Add lint checks
  - [ ] Add test runs
  - [ ] Add a11y checks
  - [ ] Build verification

## Migration Template

For each component, follow this template:

### 1. Update Component File
```tsx
"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";

interface ComponentProps {
  // props
}

/**
 * Component description
 */
const MyComponent: React.FC<ComponentProps> = (props) => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  return (
    <section role="region" aria-label={t("section.name")}>
      {/* semantic HTML with i18n */}
    </section>
  );
};

export default MyComponent;
```

### 2. Add Translation Keys
```typescript
// src/i18n/types.ts
export interface Translations {
  section: {
    name: string;
    // ... other keys
  };
}

// src/i18n/en.ts
export const en: Translations = {
  section: {
    name: "Section Name",
  },
};

// src/i18n/pl.ts
export const pl: Translations = {
  section: {
    name: "Nazwa Sekcji",
  },
};
```

### 3. Update Tests
```tsx
import { renderWithA11y } from "@/test-utils/a11y";
import { LanguageProvider } from "@/context/LanguageContext";
import MyComponent from "./MyComponent";

const ComponentWithProvider = (props) => (
  <LanguageProvider>
    <MyComponent {...props} />
  </LanguageProvider>
);

describe("MyComponent", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithA11y(
      <ComponentWithProvider />
    );
    expect(getByText("Expected Text")).toBeInTheDocument();
  });

  it("has no a11y violations", async () => {
    const { checkA11y } = renderWithA11y(
      <ComponentWithProvider />
    );
    await checkA11y();
  });
});
```

## Translation Keys by Priority

### High Priority (Navigation & Core)
```typescript
header: {
  home: string;
  about: string;
  experience: string;
  projects: string;
  skills: string;
  contact: string;
}

footer: {
  copyright: string;
  followUs: string;
  quickLinks: string;
}
```

### Medium Priority (Sections)
```typescript
sections: {
  entry: {
    title: string;
    subtitle: string;
    cta: string;
  };
  innovation: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    company: string;
    duration: string;
  };
}
```

### Lower Priority (Forms & Misc)
```typescript
forms: {
  label: string;
  placeholder: string;
  submit: string;
  error: string;
}

messages: {
  loading: string;
  error: string;
  success: string;
}
```

## Testing Commands

```bash
# Run all tests
npm run test

# Run tests for specific file
npm run test -- Header.test.tsx

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test -- --coverage

# Run a11y tests only
npm run test -- --testNamePattern="a11y"
```

## Accessibility Audit Checklist

When checking each component, verify:

- [ ] Proper heading hierarchy (h1 > h2 > h3)
- [ ] Semantic HTML elements used
- [ ] Form labels associated with inputs
- [ ] Button/link purposes clear
- [ ] Images have alt text (or aria-hidden if decorative)
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels where needed
- [ ] No keyboard traps
- [ ] Animations respect `prefers-reduced-motion`

---

**Last Updated:** January 9, 2026
**Status:** In Progress
