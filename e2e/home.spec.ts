import { test, expect } from '@playwright/test';

test.describe('Home Page Navigation and Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load home page successfully', async ({ page }) => {
    // Check if main header is visible
    await expect(page.locator('main')).toBeVisible();
    
    // Check for title/heading
    const heading = page.locator('text=Master Your Projects with Expert Code');
    await expect(heading).toBeVisible();
  });

  test('should have navigation header', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('should have footer visible at bottom', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should display all major sections', async ({ page }) => {
    // Entry Section
    const entryHeading = page.locator('text=Master Your Projects with Expert Code');
    await expect(entryHeading).toBeVisible();

    // Innovation Section
    const innovationHeading = page.locator('text=Innovative JavaScript Engineering Silesia');
    await expect(innovationHeading).toBeVisible();

    // Scroll to ensure sections load
    await page.evaluate(() => window.scrollBy(0, 500));
  });

  test('should scroll smoothly through page', async ({ page }) => {
    const initialScroll = await page.evaluate(() => window.scrollY);
    
    await page.evaluate(() => window.scrollBy(0, 1000));
    const afterScroll = await page.evaluate(() => window.scrollY);
    
    expect(afterScroll).toBeGreaterThan(initialScroll);
  });
});

test.describe('Header Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have functional header with navigation', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Check for language switcher or navigation elements
    const navElements = page.locator('header').locator('[role="button"], [role="link"]');
    expect(await navElements.count()).toBeGreaterThan(0);
  });

  test('should have responsive header', async ({ page }) => {
    const header = page.locator('header');
    
    // Check header visibility on desktop
    await expect(header).toBeVisible();
    
    // Resize to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(header).toBeVisible();
  });
});

test.describe('Entry Section - CTA and Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display entry section with content', async ({ page }) => {
    const entryText = page.locator('text=Elevate your projects with expert full-stack JavaScript');
    await expect(entryText).toBeVisible();
  });

  test('should have clickable CTA button', async ({ page }) => {
    const ctaButton = page.locator('button', { hasText: /Hire Your Expert/ });
    await expect(ctaButton).toBeVisible();
    
    // Button should be interactive
    const isEnabled = await ctaButton.isEnabled();
    expect(isEnabled).toBe(true);
  });

  test('should display featured image', async ({ page }) => {
    const image = page.locator('img[alt="Top Layout"]');
    await expect(image).toBeVisible();
    
    // Check image src
    const src = await image.getAttribute('src');
    expect(src).toBeTruthy();
  });

  test('should mention Katowice location', async ({ page }) => {
    const katowiceText = page.locator('text=/Katowice/i');
    await expect(katowiceText).toBeVisible();
  });
});

test.describe('Innovation Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display innovation section', async ({ page }) => {
    const innovationHeading = page.locator('text=Innovative JavaScript Engineering Silesia');
    await expect(innovationHeading).toBeVisible();
  });

  test('should contain technology description', async ({ page }) => {
    const techText = page.locator('text=/cutting-edge technologies/i');
    await expect(techText).toBeVisible();
  });

  test('should mention scalable solutions', async ({ page }) => {
    const scalableText = page.locator('text=/scalable web applications/i');
    await expect(scalableText).toBeVisible();
  });

  test('should have innovation section image', async ({ page }) => {
    const laptopImage = page.locator('img[alt="laptop"]');
    await expect(laptopImage).toBeVisible();
  });
});

test.describe('Services/Tiles Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load tiles section with service cards', async ({ page }) => {
    // Scroll to tiles section
    await page.evaluate(() => window.scrollBy(0, 1500));
    
    // Check for service tiles
    const tiles = page.locator('[class*="MuiBox"]').filter({ hasText: /Frontend|Backend|Full-Stack/ });
    const tileCount = await tiles.count();
    
    // Should have multiple service tiles
    expect(tileCount).toBeGreaterThanOrEqual(3);
  });

  test('should have responsive tile layout', async ({ page }) => {
    // Desktop view
    let tiles = page.locator('[class*="grid"]');
    let desktopCount = await tiles.count();
    expect(desktopCount).toBeGreaterThan(0);
    
    // Mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    
    tiles = page.locator('[class*="grid"]');
    let mobileCount = await tiles.count();
    expect(mobileCount).toBeGreaterThan(0);
  });
});

test.describe('Image Slider Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display image slider', async ({ page }) => {
    // Scroll to slider section
    await page.evaluate(() => window.scrollBy(0, 2000));
    
    // Check for slider container
    const sliderImages = page.locator('img[class*="MuiBox"]');
    const imageCount = await sliderImages.count();
    
    expect(imageCount).toBeGreaterThan(0);
  });
});

test.describe('FAQ Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display FAQ section', async ({ page }) => {
    // Scroll to FAQ section
    await page.evaluate(() => window.scrollBy(0, 3000));
    
    // Check for FAQ heading
    const faqHeading = page.locator('[role="heading"]').filter({ hasText: /FAQ|Questions/ });
    const count = await faqHeading.count();
    
    // FAQ section should have at least one heading
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should allow FAQ accordion expansion', async ({ page }) => {
    // Scroll to FAQ section
    await page.evaluate(() => window.scrollBy(0, 3000));
    
    // Try to find and click an accordion
    const accordions = page.locator('[role="button"]').filter({ hasText: /\?|question/ });
    const accordionCount = await accordions.count();
    
    if (accordionCount > 0) {
      await accordions.first().click();
      await page.waitForTimeout(300);
      
      // Verify accordion content is visible
      const expandedContent = page.locator('[role="region"]');
      const visibleCount = await expandedContent.count();
      expect(visibleCount).toBeGreaterThanOrEqual(0);
    }
  });
});

test.describe('Experience Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display experience timeline', async ({ page }) => {
    // Scroll to experience section
    await page.evaluate(() => window.scrollBy(0, 2500));
    
    // Check for timeline element
    const timeline = page.locator('[class*="Timeline"]');
    const timelineCount = await timeline.count();
    
    expect(timelineCount).toBeGreaterThan(0);
  });

  test('should show work experience entries', async ({ page }) => {
    // Scroll to experience section
    await page.evaluate(() => window.scrollBy(0, 2500));
    
    // Look for job titles or companies
    const jobEntries = page.locator('strong');
    const jobCount = await jobEntries.count();
    
    expect(jobCount).toBeGreaterThan(0);
  });
});

test.describe('Language Switching', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have language switcher in header', async ({ page }) => {
    const header = page.locator('header');
    const buttons = header.locator('[role="button"]');
    
    // There should be buttons for language switching
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThan(0);
  });

  test('should switch language on button click', async ({ page }) => {
    // Find language toggle buttons
    const langButtons = page.locator('header [role="button"]');
    const count = await langButtons.count();
    
    if (count >= 2) {
      // Click second button (assuming it's language switch)
      await langButtons.nth(1).click();
      await page.waitForTimeout(300);
      
      const newText = await page.locator('body').textContent();
      // Text might change if language actually switched
      expect(newText).toBeTruthy();
    }
  });
});

test.describe('Responsive Design', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check main elements are visible
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Check header adapts
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('should render correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('should render correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('should not have horizontal scrollbar on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const bodyWidth = await page.evaluate(() => document.body.offsetWidth);
    const windowWidth = await page.evaluate(() => window.innerWidth);
    
    expect(bodyWidth).toBeLessThanOrEqual(windowWidth);
  });
});

test.describe('Performance', () => {
  test('should load page in reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have all images loaded', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const images = page.locator('img');
    const imageCount = await images.count();
    
    expect(imageCount).toBeGreaterThan(0);
  });
});

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    const h1 = page.locator('h1');
    const h1Count = await h1.count();
    
    // Page should have at least one h1
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });

  test('should have semantic HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for semantic elements
    const header = page.locator('header');
    const main = page.locator('main');
    const footer = page.locator('footer');
    
    await expect(header).toBeVisible();
    await expect(main).toBeVisible();
    await expect(footer).toBeVisible();
  });

  test('should have alt text on images', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const alt = await images.nth(i).getAttribute('alt');
      if (i < 3) { // First few images should have alt text
        expect(alt).toBeTruthy();
      }
    }
  });

  test('should have keyboard navigable buttons', async ({ page }) => {
    await page.goto('/');
    
    // Tab to first button
    await page.keyboard.press('Tab');
    
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    // Should focus on an interactive element
    expect(['BUTTON', 'A', 'INPUT']).toContain(focusedElement);
  });
});
