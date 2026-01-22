import { test, expect } from '@playwright/test';

test.describe('Image Slider Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display image slider', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 2000));
    const sliderImages = page.locator('img[class*="MuiBox"]');
    const imageCount = await sliderImages.count();
    expect(imageCount).toBeGreaterThan(0);
  });
});
