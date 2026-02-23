import { test, expect } from "@playwright/test";
import { en } from "../../app/i18n/en";

test.describe("Innovation Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display innovation section", async ({ page }) => {
    const innovationHeading = page.locator(`text=${en.inovationSection.title}`);
    await expect(innovationHeading).toBeVisible();
  });

  test("should contain technology description", async ({ page }) => {
    const techText = page.locator(`text=${en.inovationSection.body}`);
    await expect(techText).toBeVisible();
  });

  test("should mention scalable solutions", async ({ page }) => {
    const scalableText = page.locator(`text=${en.inovationSection.body}`);
    await expect(scalableText).toBeVisible();
  });

  test("should have innovation section image", async ({ page }) => {
    const laptopImage = page.locator('img[alt="laptop"]');
    await expect(laptopImage).toBeVisible();
  });
});
