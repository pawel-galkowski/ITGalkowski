const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/e2e/"],
  transformIgnorePatterns: ["/node_modules/(?!(uuid|react-slick)/)"],
  collectCoverageFrom: ["app/**/*.{js,jsx,ts,tsx}", "!app/**/*.d.ts"],
};

module.exports = createJestConfig(config);
