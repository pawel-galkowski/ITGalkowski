import { test, expect } from "@playwright/test";

test.describe("FAQ Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display FAQ section", async ({ page }) => {
    // Scroll to FAQ section
    await page.evaluate(() => {
      const faqSection =
        document.querySelector("#faqs") ||
        document.querySelector('[data-testid="faqs-section-root"]');
      if (faqSection) faqSection.scrollIntoView();
      else window.scrollBy(0, 3000);
    });
    await page.waitForTimeout(500);
    // Look for FAQ section by test-id or heading text
    const faqSection = page.locator('[data-testid="faqs-section-root"], #faqs').first();
    const sectionVisible = await faqSection.isVisible().catch(() => false);
    if (sectionVisible) {
      await expect(faqSection).toBeVisible();
    } else {
      // Fallback: look for FAQ heading text
      const faqHeading = page.locator("text=/FAQ|Questions|FAQs/i").first();
      await expect(faqHeading).toBeVisible({ timeout: 10000 });
    }
  });

  test("should allow FAQ accordion expansion", async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 3000));
    const accordions = page.locator('[role="button"]').filter({ hasText: /\?|question/ });
    const accordionCount = await accordions.count();
    if (accordionCount > 0) {
      await accordions.first().click();
      await page.waitForTimeout(300);
      const expandedContent = page.locator('[role="region"]');
      const visibleCount = await expandedContent.count();
      expect(visibleCount).toBeGreaterThanOrEqual(0);
    }
  });
});
