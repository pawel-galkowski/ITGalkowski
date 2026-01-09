# ITGalkowski Project Architecture & Best Practices

## Overview

This document outlines the modern Next.js architecture improvements, accessibility features, internationalization (i18n) setup, and development workflow enhancements applied to the ITGalkowski project.

## Recent Improvements

### 1. Modern Next.js Configuration

**File:** [next.config.ts](next.config.ts)

#### Key Features:
- **React Strict Mode**: Enabled for development insights and warnings
- **SWC Minification**: Faster build times with SWC compiler
- **React Compiler**: Automatic component optimization
- **Standalone Output**: Optimized for containerized deployments
- **Security Headers**: 
  - X-Frame-Options: DENY (clickjacking protection)
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Strict-Transport-Security: HSTS enabled

#### Image Handling:
```typescript
images: {
  domains: ["localhost", "images.unsplash.com"],
}
```
Configure additional domains as needed for external images.

---

### 2. Internationalization (i18n) Setup

**Location:** [src/i18n/](src/i18n/)

#### Supported Languages:
- **English (en)** - Default
- **Polish (pl)**

#### Structure:

```
src/i18n/
├── index.ts          # Main i18n hook and exports
├── types.ts          # TypeScript types for translations
├── en.ts             # English translations
└── pl.ts             # Polish translations
```

#### Usage in Components:

```tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";

export default function MyComponent() {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  return <h1>{t("header.home")}</h1>;
}
```

#### Adding New Translations:

1. Add new keys to `src/i18n/types.ts`:
```typescript
export interface Translations {
  header: {
    home: string;
    // ... add new keys
  };
}
```

2. Add translations to `src/i18n/en.ts` and `src/i18n/pl.ts`:
```typescript
export const en: Translations = {
  header: {
    home: "Home",
    // ... add translated values
  },
};
```

#### Language Switching:

```tsx
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("pl")}>Polski</button>
    </div>
  );
}
```

---

### 3. Accessibility (a11y)

**Location:** [src/test-utils/a11y.tsx](src/test-utils/a11y.tsx)

#### Tools Used:
- **jest-axe**: Automated accessibility testing
- **@mui/material**: Accessibility-first UI components
- **ESLint jsx-a11y plugin**: Code-level a11y checks

#### Best Practices Implemented:

1. **Semantic HTML:**
   - Use `<header>`, `<footer>`, `<nav>`, `<main>` elements
   - Proper heading hierarchy (h1 → h6)

2. **ARIA Attributes:**
   - `role="banner"` for header
   - `role="contentinfo"` for footer
   - `aria-label` for icon buttons

3. **Component Example:**
```tsx
<Box component="header" role="banner">
  <nav aria-label="Main navigation">
    {/* nav items */}
  </nav>
</Box>
```

#### Testing Components with Accessibility:

```tsx
import { renderWithA11y } from "@/test-utils/a11y";

describe("MyComponent a11y", () => {
  it("has no accessibility violations", async () => {
    const { checkA11y } = renderWithA11y(<MyComponent />);
    await checkA11y();
  });
});
```

#### Running Lighthouse Audits:
```bash
npm run build
npm run start
# Open DevTools → Lighthouse → Generate report
```

---

### 4. ESLint Configuration

**File:** [eslint.config.mjs](eslint.config.mjs)

#### Plugins:
- `eslint-config-next`: Next.js best practices
- `jsx-a11y`: Accessibility rules
- `react-hooks`: React hooks best practices
- `import`: Import ordering

#### Rules Enforced:
- Alt text for images
- Valid anchor usage
- React hooks dependencies
- Logical import ordering

---

### 5. Code Formatting with Prettier

**Files:**
- [.prettierrc](.prettierrc)
- [.prettierignore](.prettierignore)

#### Configuration:
- Semi-colons: enabled
- Single quotes: disabled (use double quotes)
- Tab width: 2 spaces
- Trailing comma: ES5
- Print width: 100
- Line ending: LF

#### Usage:
```bash
# Format all files
npm run format

# Format specific file
npx prettier --write src/components/Header.tsx
```

---

### 6. Husky & Lint-Staged Git Hooks

**Location:** [.husky/](.husky/)

#### Hooks Configured:

##### Pre-commit
**File:** `.husky/pre-commit`
- Runs `lint-staged` for staged files
- Lints and formats only changed files

##### Pre-push
**File:** `.husky/pre-push`
- Runs full test suite
- Prevents pushing with failing tests

##### Pre-push Lint
**File:** `.husky/pre-push-lint`
- Runs full ESLint checks
- Validates all code before push

#### Lint-Staged Configuration:
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,yml,yaml}": [
      "prettier --write"
    ]
  }
}
```

---

## NPM Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload

# Production
npm run build            # Build optimized production bundle
npm run start            # Start production server

# Quality & Testing
npm run lint             # Run ESLint checks
npm run format           # Format code with Prettier
npm run test             # Run test suite
npm run test:watch      # Run tests in watch mode
npm run test:ci         # Run tests in CI mode (non-parallel)

# Hooks
npm run prepare          # Initialize Husky (runs on install)
npm run lint:staged      # Run lint-staged
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── global.css           # Global styles
│   └── theme.ts             # MUI theme configuration
├── components/              # Reusable components
│   ├── header/
│   ├── footer/
│   ├── Experience/
│   ├── Sliders/
│   └── ...
├── context/                 # React contexts
│   └── LanguageContext.tsx  # Language switching context
├── i18n/                    # Internationalization
│   ├── index.ts
│   ├── types.ts
│   ├── en.ts
│   └── pl.ts
├── pages/                   # Page components
├── sections/                # Section components
└── test-utils/              # Testing utilities
    └── a11y.tsx
```

---

## Development Workflow

### Setup

```bash
# Install dependencies
npm install

# Initialize git hooks
npx husky install
```

### Making Changes

1. Create a feature branch
2. Make code changes
3. Pre-commit hook automatically:
   - Lints changed files
   - Formats with Prettier
   - Fixes simple issues
4. Commit if all checks pass
5. Pre-push hook runs full tests before push

### Code Quality Standards

#### Component Template:

```tsx
"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";

interface MyComponentProps {
  title: string;
}

/**
 * MyComponent description
 * @param {MyComponentProps} props - Component props
 */
const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  return <div>{title}</div>;
};

export default MyComponent;
```

#### Test Template:

```tsx
import { renderWithA11y } from "@/test-utils/a11y";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithA11y(
      <MyComponent title="Test" />
    );
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("has no a11y violations", async () => {
    const { checkA11y } = renderWithA11y(
      <MyComponent title="Test" />
    );
    await checkA11y();
  });
});
```

---

## Performance Optimization

### Image Optimization
- Use Next.js `Image` component
- Specify width/height for proper aspect ratio
- Use appropriate formats (WebP with fallback)

### Code Splitting
- Components are automatically code-split by Next.js
- Use dynamic imports for heavy components:
```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"));
```

### Bundle Analysis
```bash
npm install --save-dev @next/bundle-analyzer
# Then configure in next.config.ts
```

---

## SEO Best Practices

### Metadata Setup
Update metadata in [src/app/layout.tsx](src/app/layout.tsx):

```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
  keywords: ["relevant", "keywords"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    title: "Page Title",
    description: "Page description",
    images: [
      {
        url: "https://yoursite.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

### Structured Data
Add JSON-LD for better search visibility:

```tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Your Name",
  url: "https://yoursite.com",
};

return (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
  />
);
```

---

## Troubleshooting

### ESLint Hanging
If ESLint hangs, try:
```bash
npm run lint -- --debug
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Husky Hooks Not Running
```bash
# Reinstall husky
npm run prepare
# Make hooks executable
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Components](https://mui.com)
- [Jest Testing Library](https://testing-library.com)
- [jest-axe](https://www.npmjs.com/package/jest-axe)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)

---

## Contributing Guidelines

1. Follow the component templates above
2. Always include tests with a11y checks
3. Update translations when adding new text
4. Run tests before committing
5. Ensure ESLint passes
6. Update documentation for new features

---

**Last Updated:** January 9, 2026
