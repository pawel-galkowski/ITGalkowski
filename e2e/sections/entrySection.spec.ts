import { test, expect } from "@playwright/test";
import { en } from "../../app/i18n/en";

test.describe("Entry Section - CTA and Content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display entry section with content", async ({ page }) => {
    const entryText = page.locator(`text=${en.entrySection.title}`);
    await expect(entryText).toBeVisible();
  });

  test("should have clickable CTA button", async ({ page }) => {
    const ctaButton = page.locator("button", { hasText: new RegExp(en.entrySection.button, "i") });
    await expect(ctaButton).toBeVisible();
    const isEnabled = await ctaButton.isEnabled();
    expect(isEnabled).toBe(true);
  });

  test("should display featured image", async ({ page }) => {
    const image = page.locator('img[alt="Top Layout"]');
    await expect(image).toBeVisible();
    const src = await image.getAttribute("src");
    expect(src).toBeTruthy();
  });

  test("should display entry section body", async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(200);
    const entryBodyText = page.locator(`text=${en.entrySection.body}`);
    await expect(entryBodyText).toBeVisible({ timeout: 10000 });
  });
});
