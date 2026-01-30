import { test, expect } from "@playwright/test";

test.describe("Entry Section - CTA and Content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display entry section with content", async ({ page }) => {
    const entryText = page.locator("text=Elevate your projects with expert full-stack JavaScript");
    await expect(entryText).toBeVisible();
  });

  test("should have clickable CTA button", async ({ page }) => {
    const ctaButton = page.locator("button", { hasText: /Hire Your Expert/ });
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

  test("should mention Katowice location", async ({ page }) => {
    // Katowice is mentioned in various sections, scroll to see more content
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(200);
    const katowiceText = page.locator("text=/Katowice/i").first();
    await expect(katowiceText).toBeVisible({ timeout: 10000 });
  });
});
