import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const main = page.locator('main');
    await expect(main).toBeVisible();
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
