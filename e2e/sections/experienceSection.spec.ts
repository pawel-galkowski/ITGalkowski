import { test, expect } from '@playwright/test';

test.describe('Experience Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display experience timeline', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 2500));
    const timeline = page.locator('[class*="Timeline"]');
    const timelineCount = await timeline.count();
    expect(timelineCount).toBeGreaterThan(0);
  });

  test('should show work experience entries', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 2500));
    const jobEntries = page.locator('strong');
    const jobCount = await jobEntries.count();
    expect(jobCount).toBeGreaterThan(0);
  });
});
