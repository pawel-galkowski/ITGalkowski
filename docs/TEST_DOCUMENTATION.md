# Test Suite Documentation

## Overview

This document outlines the comprehensive test suite created for the ITGalkowski portfolio website. The tests cover all components, sections, and the main page using Jest and React Testing Library.

## Test Configuration

### Files Added:

1. **jest.config.ts** - Jest configuration with Next.js support
2. **jest.setup.ts** - Jest setup file with testing-library utilities

### Dependencies Added to package.json:

- `@testing-library/react` - React component testing utilities
- `@testing-library/jest-dom` - Custom Jest matchers
- `@testing-library/user-event` - User interaction simulation
- `jest` - Testing framework
- `jest-environment-jsdom` - DOM environment for tests
- `ts-jest` - TypeScript support for Jest
- `@types/jest` - TypeScript types for Jest

## Test Files Created

### Components Tests

#### 1. Header Component (`src/components/header/Header.test.tsx`)

- **Tests:**
  - Renders header with logo text
  - Renders all navigation items (Home, About, Contact)
  - Has correct data-testid
  - Renders menu button on mobile
  - Toggles drawer when menu button is clicked
  - Renders AppBar component

#### 2. Footer Component (`src/components/footer/Footer.test.tsx`)

- **Tests:**
  - Renders footer with copyright text
  - Displays correct current year
  - Has correct styling with primary background
  - Displays "All rights reserved" text
  - Displays company name

#### 3. Faqs Component (`src/components/faqs/Faqs.test.tsx`)

- **Tests:**
  - Renders accordion component
  - Displays all FAQ questions
  - Contains JavaScript-related content
  - Contains Katowice reference
  - Contains development process mention
  - Contains agile methodologies mention

#### 4. ImageTiles Component (`src/components/imageTiles/ImageTiles.test.tsx`)

- **Tests:**
  - Renders ImageList component
  - Displays all service titles and descriptions
  - Renders correct number of image tiles (4)
  - Displays images with correct alt text
  - Images have proper src attributes
  - Displays service bar with title and subtitle

#### 5. Slider Component (`src/components/Sliders/Slider.test.tsx`)

- **Tests:**
  - Renders carousel with images
  - Renders navigation buttons (Previous/Next)
  - Handles button clicks
  - Renders all images from props
  - Handles empty images array
  - Applies custom sx prop to container
  - Applies custom imgStyles to images
  - Auto-advances carousel with timer

#### 6. ImgSlider Component (`src/components/Sliders/ImgSlider.test.tsx`)

- **Tests:**
  - Renders with title "Proudly Supported by"
  - Renders all 6 featured images
  - Contains correct number of images
  - Has navigation buttons
  - All images have valid src attributes
  - Renders with full viewport width styling

#### 7. LogoSlider Component (`src/components/Sliders/LogoSlider.test.tsx`)

- **Tests:**
  - Renders with title "Proudly Supported by"
  - Renders all 5 company logos
  - Contains correct number of logos
  - Has navigation buttons
  - All logos have valid src attributes
  - Renders with full viewport width styling

#### 8. ExperienceTimeline Component (`src/components/Experience/ExperienceTimeline.test.tsx`)

- **Tests:**
  - Renders timeline component
  - Displays experience entries
  - Displays company names and dates
  - Renders timeline items and dots
  - Renders timeline separators
  - Renders position as strong text

### Sections Tests

#### 1. EntrySection Component (`src/sections/EntrySection.test.tsx`)

- **Tests:**
  - Renders main heading
  - Displays description text
  - Contains Katowice reference
  - Renders call-to-action button
  - Renders featured image
  - Has correct button variant
  - Displays all key content sections
  - Image has correct src attribute

#### 2. InovationSection Component (`src/sections/InovationSection.test.tsx`)

- **Tests:**
  - Renders main heading
  - Displays description text
  - Contains Katowice and Silesian Voivodeship references
  - Renders feature image with correct src
  - Displays multiple typography variants
  - Contains cutting-edge and scalable mentions
  - Mentions business needs
  - Renders with dark background color

### Page Tests

#### 1. Home Page (`src/pages/index.test.tsx`)

- **Tests:**
  - Renders main element
  - Renders all child components (Header, Footer, sections)
  - Displays "My work timeline" heading
  - Renders all major sections

## Running Tests

### Commands:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests for a specific file
npm test -- Header.test.tsx

# Run tests with coverage
npm test -- --coverage
```

## Test Coverage

Total test files created: **11**
Total test cases: **80+**

### Coverage Summary:

- **Header Component:** 6 tests
- **Footer Component:** 5 tests
- **Faqs Component:** 7 tests
- **ImageTiles Component:** 7 tests
- **Slider Component:** 8 tests
- **ImgSlider Component:** 6 tests
- **LogoSlider Component:** 6 tests
- **ExperienceTimeline Component:** 7 tests
- **EntrySection Component:** 8 tests
- **InovationSection Component:** 10 tests
- **Home Page:** 11 tests

## Testing Approach

### Technologies Used:

- **Jest:** Test runner and assertion library
- **React Testing Library:** Component testing utilities
- **@testing-library/user-event:** User interaction testing

### Testing Principles Applied:

1. **User-centric testing:** Tests focus on what users see and interact with
2. **Component isolation:** Each component is tested independently
3. **Mock dependencies:** External components are mocked in parent tests
4. **Comprehensive coverage:** Tests cover rendering, interactions, and content

## Next Steps

1. **Run the test suite:** Execute `npm test` to verify all tests pass
2. **Add integration tests:** Create tests for component interactions
3. **Add visual regression tests:** Consider tools like Percy or Chromatic
4. **Setup CI/CD:** Integrate tests into your deployment pipeline
5. **Monitor coverage:** Track test coverage metrics over time

## Notes

- All tests use semantic HTML and accessibility best practices
- Tests are resilient to implementation changes
- Mocked components are used to isolate component behavior
- Test data matches actual component data where possible
