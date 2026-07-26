import { test, expect } from "@playwright/test";

test.describe("CanbazVet Landing Page Smoke Tests", () => {
  test("Ana sayfa sorunsuz yükleniyor ve H1 başlığı mevcut", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Dostunuzun sağlığı");
  });

  test("Telefon ve acil hat bağlantıları doğru biçimlendirilmiş", async ({ page }) => {
    await page.goto("/");
    const telLinks = page.locator('a[href^="tel:+905413257682"]');
    await expect(telLinks.first()).toBeVisible();
  });

  test("Yol tarifi bağlantısı Google Maps URL içeriyor", async ({ page }) => {
    await page.goto("/");
    const mapsLink = page.locator('a[href*="maps/dir"]');
    await expect(mapsLink.first()).toHaveAttribute(
      "href",
      /destination=41.6657747,26.584173/
    );
  });

  test("SSS Accordion bileşeni aria-expanded durumunu değiştiriyor", async ({ page }) => {
    await page.goto("/");
    const accordionBtn = page.locator('button[id^="accordion-button-0"]');
    await expect(accordionBtn).toBeVisible();
    
    // Check initial state
    const isExpandedBefore = await accordionBtn.getAttribute("aria-expanded");
    expect(isExpandedBefore).toBe("true");

    // Click to toggle
    await accordionBtn.click();
    const isExpandedAfter = await accordionBtn.getAttribute("aria-expanded");
    expect(isExpandedAfter).toBe("false");
  });

  test("Mobilde yatay taşma (horizontal overflow) yok", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 650 });
    await page.goto("/");
    
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth
    );
    const clientWidth = await page.evaluate(
      () => document.documentElement.clientWidth
    );

    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});
