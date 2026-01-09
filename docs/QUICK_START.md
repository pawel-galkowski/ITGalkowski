# Quick Start Guide - ITGalkowski Project

## Installation & Setup

```bash
# 1. Install dependencies
npm install

# 2. Initialize Husky hooks
npx husky install

# 3. Make hooks executable (Windows Git Bash)
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
chmod +x .husky/pre-push-lint
```

## Development

```bash
# Start development server
npm run dev
# Open http://localhost:3000
```

## Key Features Implemented

### ✅ Internationalization (i18n)
- **Default:** English (en)
- **Available:** Polish (pl)

**Files Modified:**
- Added `src/i18n/` directory with language files
- Added `src/context/LanguageContext.tsx` for language switching
- Updated `src/components/header/Header.tsx` to use i18n
- Updated `src/components/footer/Footer.tsx` to use i18n
- Updated `src/app/layout.tsx` to include LanguageProvider

**Usage in Components:**
```tsx
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n";

export default function MyComponent() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations(language);
  
  return (
    <div>
      <h1>{t("header.home")}</h1>
      <button onClick={() => setLanguage("pl")}>Polski</button>
    </div>
  );
}
```

### ✅ Accessibility (a11y)
- **jest-axe** for automated testing
- **ESLint jsx-a11y** plugin for code checks
- Semantic HTML with proper roles
- ARIA labels for interactive elements

**Files Modified:**
- Updated `jest.setup.ts` to include jest-axe
- Created `src/test-utils/a11y.tsx` with accessibility utilities
- Updated `src/components/header/Header.tsx` with:
  - `role="banner"` on header
  - `aria-label` on menu buttons
  - Better alt text for images
  - Semantic nav structure
- Updated `src/components/footer/Footer.tsx` with:
  - `component="footer"`
  - `role="contentinfo"`
- Updated `src/components/header/Header.test.tsx` with a11y tests

**Testing Components:**
```tsx
import { renderWithA11y } from "@/test-utils/a11y";

it("has no a11y violations", async () => {
  const { checkA11y } = renderWithA11y(<MyComponent />);
  await checkA11y();
});
```

### ✅ Code Quality Tools
- **ESLint** with accessibility rules
- **Prettier** for code formatting
- **Husky** for git hooks
- **lint-staged** for pre-commit checks

**Files Modified:**
- Updated `eslint.config.mjs` with jsx-a11y plugin
- Created `.prettierrc` configuration
- Created `.prettierignore`
- Updated `package.json` with:
  - New npm scripts
  - Dev dependencies for a11y and formatting
  - lint-staged configuration
- Created `.husky/pre-commit` hook
- Created `.husky/pre-push` hook
- Created `.husky/pre-push-lint` hook

### ✅ Next.js Modern Configuration
**File:** `next.config.ts`
- React Strict Mode enabled
- SWC minification
- React Compiler enabled
- Security headers (CSP, X-Frame, HSTS, etc.)
- Standalone output for Docker
- Image optimization

### ✅ Enhanced SEO & Metadata
**File:** `src/app/layout.tsx`
- Descriptive title and meta description
- OpenGraph metadata
- Proper charset and viewport settings
- Author information

## NPM Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run test             # Run tests
npm run test:watch      # Tests in watch mode
npm run test:ci         # Tests for CI/CD

# Utilities
npm run prepare          # Initialize Husky (auto on install)
npm run lint:staged      # Run lint-staged manually
```

## Translation Management

### Adding New Translation Keys

1. **Update `src/i18n/types.ts`:**
```typescript
export interface Translations {
  header: {
    home: string;
    about: string;
    // Add new keys here
  };
  footer: {
    copyright: string;
    // Add new keys here
  };
}
```

2. **Update `src/i18n/en.ts`:**
```typescript
export const en: Translations = {
  header: {
    home: "Home",
    about: "About",
  },
  footer: {
    copyright: "© 2026 All Rights Reserved",
  },
};
```

3. **Update `src/i18n/pl.ts`:**
```typescript
export const pl: Translations = {
  header: {
    home: "Strona główna",
    about: "O mnie",
  },
  footer: {
    copyright: "© 2026 Wszystkie prawa zastrzeżone",
  },
};
```

## Next Steps for Component Migration

All components should be updated to:

1. **Use i18n for all user-facing text:**
   - Update component to be a "use client" component
   - Import `useLanguage` and `useTranslations`
   - Replace hardcoded strings with `t()` function calls

2. **Add accessibility attributes:**
   - Use semantic HTML (`<header>`, `<footer>`, `<nav>`, `<main>`)
   - Add `role` attributes where needed
   - Add `aria-label` for icon buttons
   - Ensure proper heading hierarchy
   - Add alt text to images

3. **Add a11y tests:**
   - Use `renderWithA11y` in test files
   - Add `checkA11y()` test case

**Example components to update next:**
- [ ] Footer translations
- [ ] Navigation items
- [ ] Section titles and descriptions
- [ ] All button labels
- [ ] Form labels and placeholders
- [ ] Image alt texts

## Troubleshooting

### Dependencies not installed
```bash
rm -rf node_modules package-lock.json
npm install
```

### Husky not working
```bash
npx husky install
chmod +x .husky/*
```

### ESLint errors
```bash
npm run lint -- --debug
# or fix automatically
npx eslint . --fix
```

### Tests failing
```bash
npm run test -- --verbose
# or in watch mode
npm run test:watch
```

## Resources

- [Full Architecture Documentation](./ARCHITECTURE.md)
- [Test Documentation](./TEST_DOCUMENTATION.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Material-UI Components](https://mui.com)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Created:** January 9, 2026
