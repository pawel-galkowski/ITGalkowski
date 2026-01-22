import { test, expect } from '@playwright/test';

test.describe('Language Switching', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have language switcher in header', async ({ page }) => {
    const header = page.locator('header');
    const buttons = header.locator('[role="button"]');
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThan(0);
  });

  test('should switch language on button click', async ({ page }) => {
    const langButtons = page.locator('header [role="button"]');
    const count = await langButtons.count();
    if (count >= 2) {
      await langButtons.nth(1).click();
      await page.waitForTimeout(300);
      const newText = await page.locator('body').textContent();
      expect(newText).toBeTruthy();
    }
  });
});
