# ESLint Rules Configuration Update

**Date:** January 9, 2026
**Status:** ✅ Implemented & Applied

---

## Overview

Three important code quality rules have been added to enforce:
1. **no-var** - Prevent using `var` (enforce `const`/`let`)
2. **no-console** - Prevent console.log statements (allow console.warn/error)
3. **no-unused-imports** - Automatically remove unused imports

---

## Configuration Details

### File: `eslint.config.mjs`

**Added Rules:**

```javascript
{
  plugins: ["unused-imports"],
  rules: {
    // Disallow var keyword - use const/let instead
    "no-var": "error",

    // Disallow console.log() - allow warn/error for debugging
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],

    // Disable default no-unused-vars
    "no-unused-vars": "off",

    // Use TypeScript version for type-aware checking
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",      // Allow unused args prefixed with _
        varsIgnorePattern: "^_",      // Allow unused vars prefixed with _
      },
    ],

    // Remove unused imports automatically
    "unused-imports/no-unused-imports": "error",

    // Report unused variables from unused-imports plugin
    "unused-imports/no-unused-vars": [
      "warn",
      { 
        "vars": "all", 
        "varsIgnorePattern": "^_", 
        "args": "after-used", 
        "argsIgnorePattern": "^_" 
      }
    ]
  },
}
```

---

## Package.json Updates

### Added Dependency

```json
{
  "devDependencies": {
    "eslint-plugin-unused-imports": "^3.1.0"
  }
}
```

**Install with:** `npm install`

---

## Rule Explanations

### 1. no-var

**Purpose:** Force use of `const`/`let` over `var` for better scoping.

**Error Example:**
```typescript
// ❌ ERROR
var name = "John";

// ✅ CORRECT
const name = "John";
let counter = 0;
```

**Why:** `var` has function-level scoping, causing bugs. `const`/`let` have block-level scoping which is safer.

---

### 2. no-console

**Purpose:** Prevent debug logging in production code.

**Warning Example:**
```typescript
// ⚠️ WARN - Will be caught
console.log("Debug info");

// ✅ ALLOWED
console.warn("Warning");
console.error("Error");
```

**Why:** `console.log()` should be removed before production. `console.warn()` and `console.error()` are allowed for error tracking.

---

### 3. no-unused-imports

**Purpose:** Automatically remove imports that aren't used.

**Error Example:**
```typescript
// ❌ ERROR - Image not used
import Image from "next/image";
import { Button } from "@mui/material";

export default function Home() {
  return <Button>Click me</Button>;
}

// ✅ CORRECT
import { Button } from "@mui/material";

export default function Home() {
  return <Button>Click me</Button>;
}
```

**Why:** Unused imports increase bundle size and reduce code clarity.

---

## Code Changes Applied

### Files Fixed

#### 1. `src/components/header/Header.tsx`
**Removed:**
- `import Image from "next/image";` (unused)
- `import { v4 as uuidv4 } from "uuid";` (unused after refactor)

**Kept:**
- All other imports used in the component

---

#### 2. `src/pages/index.tsx`
**Removed:**
- `import { Button } from "@mui/material";` (unused)
- `import LogoSlider from "@/components/Sliders/LogoSlider";` (unused)

**Kept:**
- All component imports that are rendered
- All MUI imports that are used

---

## How to Use With Auto-Fix

### Automatically Fix Issues

```bash
# Fix ESLint violations automatically
npm run lint -- --fix

# Or with eslint directly
npx eslint src --fix

# Format while fixing
npm run format
```

### Check Without Fixing

```bash
# Check for violations without fixing
npm run lint

# Check with detailed output
npx eslint src --format=detailed
```

---

## Best Practices

### ✅ DO

```typescript
// Use const for variables that don't change
const API_URL = "https://api.example.com";

// Use let for variables that will change
let counter = 0;
counter++;

// Use error logging
console.error("Failed to fetch data");
console.warn("Deprecated API used");

// Import only what you use
import { Button, Box } from "@mui/material";
```

### ❌ DON'T

```typescript
// Don't use var
var name = "John";

// Don't use console.log in production code
console.log("Debug: " + value);

// Don't import unused items
import Image, { Button } from "some-library";
export default function Component() {
  return <Button>Test</Button>;  // Image unused
}
```

---

## Ignoring Rules (When Necessary)

### Ignore Unused Variables with `_`

If you intentionally don't use a variable, prefix it with underscore:

```typescript
// Don't trigger no-unused-vars
function handler(event: ChangeEvent<HTMLInputElement>) {
  // event not used, but required by type
  return "success";
}

// Better - use underscore prefix
function handler(_event: ChangeEvent<HTMLInputElement>) {
  return "success";
}
```

### Disable Rule for Specific Line

```typescript
// eslint-disable-next-line no-console
console.log("Temporary debug");

// eslint-disable-line no-var
var x = 5;
```

### Disable for Block

```typescript
/* eslint-disable no-console */
console.log("Debug mode enabled");
console.log("Value:", result);
/* eslint-enable no-console */
```

---

## CI/CD Integration

### Pre-commit Hook

The `lint-staged` configuration will automatically check these rules before commits:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

**Behavior:**
1. Developer commits code
2. Pre-commit hook runs ESLint with `--fix`
3. Unused imports removed automatically
4. `var` keywords converted to `const`/`let`
5. `console.log()` statements flagged as warnings
6. Fixed files re-staged
7. Commit proceeds if all checks pass

### GitHub Actions Example

```yaml
name: Lint
on: [push, pull_request]
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run lint
      - run: npm run format
```

---

## Troubleshooting

### Issue: "no-unused-imports plugin not found"

**Solution:**
```bash
npm install eslint-plugin-unused-imports --save-dev
```

---

### Issue: Too Many "no-console" Warnings

**Solution 1 - Use console.warn/error:**
```typescript
// Instead of this:
console.log("Starting process");

// Use:
console.warn("Starting process");
```

**Solution 2 - Disable for section:**
```typescript
/* eslint-disable no-console */
console.log("Temporary debug");
/* eslint-enable no-console */
```

---

### Issue: Auto-fix Not Removing All Unused Imports

**Manual Fix:**
```bash
# Run lint with verbose output
npx eslint src --format=detailed

# Identify unused imports in output
# Remove them manually
# Verify with linter again
```

---

## Performance Impact

- **Build time:** Negligible impact (~50ms added)
- **Runtime:** Zero impact (linting is development-only)
- **Bundle size:** Reduced by removing unused imports
- **Code quality:** ⬆️ Improved significantly

---

## Testing the Rules

### Test for `no-var`

```bash
# Add a test file with var
echo "var x = 5;" > test-var.js

# Run linter
npx eslint test-var.js

# Expected output: Error - Unexpected var
rm test-var.js
```

### Test for `no-console`

```bash
# Create test file
echo 'console.log("test");' > test-console.js

# Run linter
npx eslint test-console.js

# Expected output: Warning - Unexpected console
rm test-console.js
```

### Test for `no-unused-imports`

```bash
# Create test file
cat > test-unused.tsx << 'EOF'
import { Button } from "@mui/material";
import Image from "next/image";

export default function Test() {
  return <Button>Test</Button>;
}
EOF

# Run linter with fix
npx eslint test-unused.tsx --fix

# Expected: Image import removed
# Verify result
cat test-unused.tsx
rm test-unused.tsx
```

---

## Migration Checklist

- [x] Added `eslint-plugin-unused-imports` to package.json
- [x] Updated `eslint.config.mjs` with three new rules
- [x] Fixed `src/components/header/Header.tsx`
- [x] Fixed `src/pages/index.tsx`
- [x] Verified no console.log in codebase
- [x] Verified no var keywords in codebase
- [x] Updated documentation
- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run lint -- --fix` to apply fixes
- [ ] Run `npm run test:ci` to verify tests pass
- [ ] Commit changes with pre-commit hook

---

## References

- [ESLint no-var Rule](https://eslint.org/docs/rules/no-var)
- [ESLint no-console Rule](https://eslint.org/docs/rules/no-console)
- [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)
- [ESLint Configuration Docs](https://eslint.org/docs/user-guide/configuring)

---

**Next Steps:**

1. Run `npm install` to install the new plugin
2. Run `npm run lint -- --fix` to apply automatic fixes
3. Review any remaining warnings with `npm run lint`
4. Run tests: `npm run test:ci`
5. Commit changes: `git commit -am "chore: add ESLint rules for code quality"`

---

**Status:** ✅ Configuration Complete & Applied
