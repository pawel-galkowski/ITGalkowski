import { test, expect } from '@playwright/test';

test.describe('Home Page Navigation and Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load home page successfully', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
    const heading = page.locator('text=Master Your Projects with Expert Code');
    await expect(heading).toBeVisible();
  });

  test('should have navigation header', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('should have footer visible at bottom', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should display all major sections', async ({ page }) => {
    const entryHeading = page.locator('text=Master Your Projects with Expert Code');
    await expect(entryHeading).toBeVisible();
    const innovationHeading = page.locator('text=Innovative JavaScript Engineering Silesia');
    await expect(innovationHeading).toBeVisible();
    await page.evaluate(() => window.scrollBy(0, 500));
  });

  test('should scroll smoothly through page', async ({ page }) => {
    const initialScroll = await page.evaluate(() => window.scrollY);
    await page.evaluate(() => window.scrollBy(0, 1000));
    const afterScroll = await page.evaluate(() => window.scrollY);
    expect(afterScroll).toBeGreaterThan(initialScroll);
  });
});
