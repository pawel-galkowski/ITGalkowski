import { test, expect } from '@playwright/test';

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
