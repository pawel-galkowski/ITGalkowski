import { test, expect } from '@playwright/test';

test.describe('Services/Tiles Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load tiles section with service cards', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 1500));
    const tiles = page.locator('[class*="MuiBox"]').filter({ hasText: /Frontend|Backend|Full-Stack/ });
    const tileCount = await tiles.count();
    expect(tileCount).toBeGreaterThanOrEqual(3);
  });

  test('should have responsive tile layout', async ({ page }) => {
    let tiles = page.locator('[class*="grid"]');
    let desktopCount = await tiles.count();
    expect(desktopCount).toBeGreaterThan(0);
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    tiles = page.locator('[class*="grid"]');
    let mobileCount = await tiles.count();
    expect(mobileCount).toBeGreaterThan(0);
  });
});
