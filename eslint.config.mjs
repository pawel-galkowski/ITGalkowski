import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import unusedImports from "eslint-plugin-unused-imports";
import eslintImport from "eslint-plugin-import";
import eslintA11y from "eslint-plugin-jsx-a11y";
import eslintPrettier from "eslint-plugin-prettier";
import eslintParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
      ".git/**",
      "node_modules/**",
      "jest.config.js"
    ],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}", "**/*.mts"],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
      "unused-imports": unusedImports,
      import: eslintImport,
      "jsx-a11y": eslintA11y,
      prettier: eslintPrettier,
    },
    rules: {
      "no-var": "error",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "import/order": ["error"],
      "jsx-a11y/no-autofocus": ["off"],
      "prettier/prettier": ["warn"],
      "no-restricted-imports": "warn",
    },
  },
];
