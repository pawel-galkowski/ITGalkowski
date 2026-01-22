import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have functional header with navigation', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();
    const navElements = page.locator('header').locator('[role="button"], [role="link"]');
    expect(await navElements.count()).toBeGreaterThan(0);
  });

  test('should have responsive header', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(header).toBeVisible();
  });
});
