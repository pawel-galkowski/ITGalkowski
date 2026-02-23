import { test, expect } from "@playwright/test";
import enTiles from "../../app/components/image-tiles/data/en.json";

test.describe("Services/Tiles Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load tiles section with service cards", async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 1500));
    const tiles = page.locator('[class*="MuiBox"]').filter({ hasText: enTiles[0]!.title });
    const tileCount = await tiles.count();
    expect(tileCount).toBeGreaterThan(0);
  });

  test("should have responsive tile layout", async ({ page }) => {
    // Scroll to tiles section
    const tilesSection = page.locator('[data-testid="tiles-section-root"]');
    await tilesSection.scrollIntoViewIfNeeded();
    await expect(tilesSection).toBeVisible({ timeout: 10000 });

    // Check on mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);
    await expect(tilesSection).toBeVisible({ timeout: 10000 });
  });
});
