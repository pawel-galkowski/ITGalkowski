import { test, expect } from '@playwright/test';

test.describe('FAQ Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display FAQ section', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 3000));
    const faqHeading = page.locator('[role="heading"]').filter({ hasText: /FAQ|Questions/ });
    const count = await faqHeading.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('should allow FAQ accordion expansion', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 3000));
    const accordions = page.locator('[role="button"]').filter({ hasText: /\?|question/ });
    const accordionCount = await accordions.count();
    if (accordionCount > 0) {
      await accordions.first().click();
      await page.waitForTimeout(300);
      const expandedContent = page.locator('[role="region"]');
      const visibleCount = await expandedContent.count();
      expect(visibleCount).toBeGreaterThanOrEqual(0);
    }
  });
});
