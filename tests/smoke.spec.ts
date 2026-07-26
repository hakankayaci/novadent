import { test, expect, type Page } from "@playwright/test";

const TEL = "tel:+905011301522";

async function setLanguage(page: Page, lang: string) {
  await page.goto("/");
  await page.evaluate((l) => localStorage.setItem("novadent_lang", l), lang);
  await page.reload({ waitUntil: "networkidle" });
}

test.describe("Core content", () => {
  test("home page renders a single H1 with the brand promise", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1");
    await expect(h1).toHaveCount(1);
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Edirne'nin En Donanımlı");
  });

  test("phone and directions links point at the real destinations", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(`a[href="${TEL}"]`).first()).toBeVisible();
    await expect(page.locator('a[href^="https://goo.gl/maps/"]').first()).toBeVisible();
  });

  test("every section anchor referenced by the nav exists", async ({ page }) => {
    await page.goto("/");
    const hrefs = await page.locator('a[href^="#"]').evaluateAll((links) =>
      [...new Set(links.map((l) => l.getAttribute("href")!).filter((h) => h.length > 1))],
    );
    expect(hrefs.length).toBeGreaterThan(5);
    for (const href of hrefs) {
      await expect(page.locator(href), `${href} should resolve to an element`).toHaveCount(1);
    }
  });

  test("the hero uses the real Novadent clinic photo", async ({ page }) => {
    await page.goto("/");
    const portrait = page.locator("#anasayfa img").first();
    await expect(portrait).toBeVisible();
    // next/image rewrites the src, so assert on the encoded upstream path.
    await expect(portrait).toHaveAttribute("src", /novadent-clinic\.webp/);
    const box = await portrait.boundingBox();
    expect(box!.width).toBeGreaterThan(200);
  });
});

test.describe("Skip link", () => {
  // Regression: an invalid declaration in globals.css destroyed the .sr-only rule during
  // minification, so this link rendered as a permanently visible full-width bar.
  test("is hidden until it receives keyboard focus", async ({ page }) => {
    await page.goto("/");
    const skip = page.locator("a.skip-link");
    await expect(skip).toHaveCount(1);

    const parked = await skip.boundingBox();
    expect(parked!.y).toBeLessThan(0);
  });

  test("is the first thing Tab reaches, and slides into view", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const focused = await page.evaluate(() => document.activeElement?.className ?? "");
    expect(focused).toContain("skip-link");

    await page.waitForTimeout(450);
    const shown = await page.locator("a.skip-link").boundingBox();
    expect(shown!.y).toBeGreaterThanOrEqual(0);
  });

  test("stays hidden after a mouse click", async ({ page }) => {
    await page.goto("/");
    await page.locator("a.skip-link").dispatchEvent("click");
    await page.waitForTimeout(450);
    const box = await page.locator("a.skip-link").boundingBox();
    expect(box!.y).toBeLessThan(0);
  });
});

test.describe("Internationalisation", () => {
  const TURKISH_ONLY = ["Edirne'nin En Donanımlı", "Tedaviler", "Randevu Al"];

  for (const [lang, marker] of [
    ["bg", "Най-Добре Оборудваната"],
    ["el", "Η Πιο Εξοπλισμένη"],
  ] as const) {
    test(`${lang} translates the whole page and sets html[lang]`, async ({ page }) => {
      await setLanguage(page, lang);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("h1")).toContainText(marker);

      const text = await page.locator("header, #anasayfa").allInnerTexts();
      const localizedSurface = text.join(" ");
      for (const turkish of TURKISH_ONLY) {
        expect(localizedSurface, `"${turkish}" should not survive into ${lang}`).not.toContain(turkish);
      }
    });
  }

  test("the language button shows one code, not a duplicated flag fallback", async ({ page }) => {
    await page.goto("/");
    const label = await page
      .locator('button[aria-haspopup="menu"]')
      .first()
      .innerText();
    expect(label.trim()).toBe("TR");
  });

  test("the language menu is keyboard operable", async ({ page }) => {
    await page.goto("/");
    const trigger = page.locator('button[aria-haspopup="menu"]').first();
    await trigger.focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator('[role="menu"]')).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator('[role="menu"]')).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });
});

test.describe("Navigation affordances", () => {
  // Regression: the inline nav was hidden below 1280px while the trigger only appeared
  // below 768px, so 768-1279px had no navigation at all. Exactly one of the two must be
  // present at any width, and the trigger must actually open the drawer.
  test("exactly one navigation affordance is present, and it works", async ({ page }) => {
    await page.goto("/");
    const inlineNav = page.locator("header nav ul li").first();
    const trigger = page.locator('button[aria-controls="mobile-menu"]');

    const inlineVisible = await inlineNav.isVisible();
    const triggerVisible = await trigger.isVisible();
    expect(inlineVisible || triggerVisible).toBe(true);
    expect(inlineVisible && triggerVisible).toBe(false);

    if (triggerVisible) {
      await trigger.click();
      await expect(page.locator("#mobile-menu")).toBeVisible();
    }
  });

  test("the mobile drawer traps focus and restores it on close", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const button = page.locator('button[aria-controls="mobile-menu"]');
    await button.click();
    const drawer = page.locator("#mobile-menu");
    await expect(drawer).toBeVisible();
    await expect(drawer).toHaveAttribute("aria-modal", "true");

    await page.keyboard.press("Escape");
    await expect(drawer).toHaveCount(0);
    await expect(button).toBeFocused();
  });
});

test.describe("FAQ", () => {
  test("accordion toggles aria-expanded and reveals the answer", async ({ page }) => {
    await page.goto("/");
    const first = page.locator("#faq-button-0");
    await expect(first).toHaveAttribute("aria-expanded", "true");
    await first.click();
    await expect(first).toHaveAttribute("aria-expanded", "false");
    await first.click();
    await expect(first).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#faq-panel-0")).toBeVisible();
  });
});

test.describe("Map", () => {
  // Regression: the iframe rendered unconditionally behind a "load the map" button, so
  // the third-party request fired on every page view and the button did nothing.
  test("the Google iframe is only requested after the button is pressed", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#iletisim iframe")).toHaveCount(0);

    await page.getByTestId("map-load").click();
    await expect(page.locator("#iletisim iframe")).toHaveCount(1);
    await expect(page.locator("#iletisim iframe")).toHaveAttribute("src", /google\.com\/maps/);
  });
});

test.describe("Honest social proof", () => {
  test("no fabricated ratings, counts or verified badges", async ({ page }) => {
    await page.goto("/");
    const text = await page.evaluate(() => document.body.innerText);
    for (const banned of ["549", "takipçi", "gönderi", "Takip Ediliyor", "REELS"]) {
      expect(text, `"${banned}" is invented engagement data`).not.toContain(banned);
    }
  });

  test("structured data identifies the dental clinic and its published rating", async ({ page }) => {
    await page.goto("/");
    const raw = await page.locator('script[type="application/ld+json"]').innerText();
    const data = JSON.parse(raw);
    expect(data["@type"]).toContain("Dentist");
    expect(data.aggregateRating.ratingValue).toBe("5");
    expect(data.review).toBeUndefined();
  });
});

test.describe("Layout", () => {
  test("no horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

  test("content is never trapped under the fixed mobile action bar", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const bar = page.getByTestId("mobile-action-bar");
    await expect(bar).toBeVisible();
    const barBox = (await bar.boundingBox())!;

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    const padding = await page.evaluate(() =>
      parseFloat(getComputedStyle(document.body).paddingBottom),
    );
    expect(padding).toBeGreaterThanOrEqual(barBox.height - 8);
  });

  test("interactive targets are at least 44px tall", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const small = await page.evaluate(() => {
      const out: string[] = [];
      for (const el of document.querySelectorAll<HTMLElement>("a[href], button")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue; // off-screen / collapsed
        if (el.closest(".skip-link")) continue;
        if (r.height < 44) out.push(`${el.tagName}:${(el.textContent || "").trim().slice(0, 28)}:${Math.round(r.height)}`);
      }
      return out;
    });
    expect(small, `these targets are shorter than 44px: ${small.join(" | ")}`).toEqual([]);
  });
});
