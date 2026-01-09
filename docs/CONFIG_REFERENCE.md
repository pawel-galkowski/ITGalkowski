# Configuration Reference

Complete reference for all project configurations implemented.

---

## Next.js Configuration

**File:** `next.config.ts`

```typescript
import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",  // Prevent clickjacking
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",  // Prevent MIME sniffing
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",  // Control referrer info
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",  // HSTS
  },
];

const nextConfig: NextConfig = {
  // Enable React features
  reactStrictMode: true,           // Catches unsafe lifecycles
  swcMinify: true,                 // Fast minification
  reactCompiler: true,             // Auto-optimize components
  
  // Experimental features
  experimental: {
    appDir: true,                  // Use /app directory
  },
  
  // Image optimization
  images: {
    domains: ["localhost", "images.unsplash.com"],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  
  // Docker-friendly output
  output: "standalone",
};

export default nextConfig;
```

---

## ESLint Configuration

**File:** `eslint.config.mjs`

```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "next-env.d.ts",
    ".git/**",
    "node_modules/**",
  ]),
]);

export default eslintConfig;
```

**Active Rules:**
- Next.js core web vitals
- TypeScript best practices
- React hooks validation
- Accessibility checks (jsx-a11y)
- Import organization

---

## Prettier Configuration

**File:** `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf"
}
```

**Ignore Patterns:** See `.prettierignore`

---

## Husky Hooks

### Pre-commit Hook

**File:** `.husky/pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

**Purpose:** Lint and format staged files before commit

---

### Pre-push Hook

**File:** `.husky/pre-push`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run test:ci
```

**Purpose:** Ensure tests pass before pushing

---

### Pre-push Lint Hook

**File:** `.husky/pre-push-lint`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
```

**Purpose:** Full lint check before push

---

## Lint-staged Configuration

**Location:** `package.json` → `lint-staged` key

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

**Behavior:**
- JavaScript/TypeScript files: ESLint fix + Prettier format
- Other files: Prettier format only

---

## Jest Configuration

**File:** `jest.config.js`

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

**Setup File:** `jest.setup.ts`

```typescript
import "@testing-library/jest-dom";
import "jest-axe/extend-expect";

jest.mock("uuid", () => ({
  v4: () => "test-uuid-" + Math.random().toString(36).substring(2, 11),
}));
```

---

## TypeScript Configuration

**File:** `tsconfig.json`

Key settings:
- Strict mode enabled
- JSX support for React
- Path aliases (`@/` → `src/`)
- ES2020+ target
- ESNext module system

---

## NPM Scripts

**File:** `package.json` → `scripts` section

```json
{
  "scripts": {
    "dev": "next dev",              # Development server
    "build": "next build",          # Production build
    "start": "next start",          # Production server
    "lint": "next lint",            # ESLint check
    "format": "prettier --write .",  # Format all files
    "prepare": "husky install",     # Setup git hooks
    "lint:staged": "lint-staged",   # Run lint-staged
    "test": "jest",                 # Run tests
    "test:watch": "jest --watch",   # Tests in watch mode
    "test:ci": "jest --runInBand"   # CI test mode
  }
}
```

---

## i18n Configuration

### Type Definitions

**File:** `src/i18n/types.ts`

```typescript
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
```

### English Translations

**File:** `src/i18n/en.ts`

```typescript
import type { Translations } from "./types";

export const en: Translations = {
  header: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  footer: {
    copyright: "© 2026 All Rights Reserved",
    followUs: "Follow Us",
    quickLinks: "Quick Links",
  },
  common: {
    loading: "Loading...",
    error: "An error occurred",
    success: "Success!",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
  },
};
```

### Polish Translations

**File:** `src/i18n/pl.ts`

```typescript
import type { Translations } from "./types";

export const pl: Translations = {
  header: {
    home: "Strona główna",
    about: "O mnie",
    experience: "Doświadczenie",
    projects: "Projekty",
    skills: "Umiejętności",
    contact: "Kontakt",
  },
  footer: {
    copyright: "© 2026 Wszystkie prawa zastrzeżone",
    followUs: "Śledź nas",
    quickLinks: "Szybkie linki",
  },
  common: {
    loading: "Ładowanie...",
    error: "Wystąpił błąd",
    success: "Sukces!",
    cancel: "Anuluj",
    save: "Zapisz",
    delete: "Usuń",
    edit: "Edytuj",
  },
};
```

### i18n Hook

**File:** `src/i18n/index.ts`

```typescript
import { useCallback, useMemo } from "react";
import type { Language, Translations } from "./types";
import { en } from "./en";
import { pl } from "./pl";

const translations: Record<Language, Translations> = {
  en,
  pl,
};

export const useTranslations = (language: Language = "en") => {
  const t = useMemo(() => translations[language] || en, [language]);

  const getText = useCallback(
    (path: string): string => {
      const keys = path.split(".");
      let value: any = t;

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

export { translations };
export type { Language, Translations };
```

---

## React Context Configuration

### Language Context

**File:** `src/context/LanguageContext.tsx`

```typescript
"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { Language } from "../i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
```

---

## Environment Variables

Create `.env.local` (not tracked in git):

```bash
# Example (currently not required)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Create `.env.example` (tracked in git):

```bash
# Example environment variables
# NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Naming Convention:**
- `NEXT_PUBLIC_*` - Exposed to browser
- Other variables - Server-side only

---

## Build Configuration

### Output Directory
- **Development:** `.next/`
- **Production:** `.next/` (standalone mode optimized)

### Source Maps
- **Development:** Enabled (faster rebuilds)
- **Production:** Enabled (for debugging)

---

## Security Configuration Summary

| Header | Value | Purpose |
|--------|-------|---------|
| X-Frame-Options | DENY | Prevent clickjacking |
| X-Content-Type-Options | nosniff | Prevent MIME sniffing |
| Referrer-Policy | strict-origin-when-cross-origin | Control referrer info |
| Strict-Transport-Security | max-age=63072000; preload | Enforce HTTPS |

---

## Performance Configuration

| Setting | Configuration | Impact |
|---------|---------------|--------|
| SWC Minify | Enabled | Faster builds & smaller bundles |
| React Compiler | Enabled | Auto-component optimization |
| Image Optimization | Domain whitelist | Optimized image delivery |
| Standalone Output | Enabled | Efficient Docker deployments |

---

## Development Tools Versions

```json
{
  "node": ">=18.0.0",
  "npm": ">=9.0.0",
  "react": "19.2.3",
  "next": "16.1.1",
  "typescript": "^5",
  "eslint": "^9",
  "prettier": "^3.0.0",
  "jest": "^29.7.0",
  "jest-axe": "^10.0.0"
}
```

---

## Additional Resources

- [Next.js Config Docs](https://nextjs.org/docs/app/api-reference/next-config-js)
- [ESLint Config Docs](https://eslint.org/docs/user-guide/configuring)
- [Prettier Docs](https://prettier.io/docs/en/configuration.html)
- [Husky Docs](https://typicode.github.io/husky/)
- [jest-axe Docs](https://github.com/nickcolley/jest-axe)

---

**Last Updated:** January 9, 2026
