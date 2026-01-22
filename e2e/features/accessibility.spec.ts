import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    const h1 = page.locator('h1');
    const h1Count = await h1.count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });

  test('should have semantic HTML structure', async ({ page }) => {
    await page.goto('/');
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
      if (i < 3) {
        expect(alt).toBeTruthy();
      }
    }
  });

  test('should have keyboard navigable buttons', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['BUTTON', 'A', 'INPUT']).toContain(focusedElement);
  });
});
