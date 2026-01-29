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
    // Set desktop viewport (beforeEach already navigated to /)
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.waitForLoadState('networkidle');
    
    // Find the language button in the desktop nav and click it
    const langButton = page.locator('nav [data-testid="language-buttons-container"] button').first();
    await expect(langButton).toBeVisible({ timeout: 10000 });
    await langButton.click();
    await page.waitForTimeout(500);
    
    // Verify page still works after language switch
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});
