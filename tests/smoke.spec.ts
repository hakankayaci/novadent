import { expect, test, type Page } from "@playwright/test";

const TEL = "tel:+905011301522";
const INSTAGRAM = "https://www.instagram.com/novadentclinicsedirne/";
const LOCALES = [
  {
    path: "/",
    lang: "tr",
    ogLocale: "tr_TR",
    title: /NOVADENT Edirne/,
    heading: /Diş bakımında netlik/,
  },
  {
    path: "/en",
    lang: "en",
    ogLocale: "en_GB",
    title: /NOVADENT Edirne/,
    heading: /Clarity in dental care/,
  },
  {
    path: "/el",
    lang: "el",
    ogLocale: "el_GR",
    title: /NOVADENT Αδριανούπολη|NOVADENT Edirne/,
    heading: /Σαφήνεια στην οδοντιατρική φροντίδα/,
  },
  {
    path: "/bg",
    lang: "bg",
    ogLocale: "bg_BG",
    title: /NOVADENT Одрин/,
    heading: /Яснота в денталната грижа/,
  },
] as const;

async function revealAll(page: Page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(80);
  await page.evaluate(() => window.scrollTo(0, 0));
}

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

test.describe("Locale routes and metadata", () => {
  for (const locale of LOCALES) {
    test(`${locale.path} is complete and self-canonical`, async ({ page }) => {
      await page.goto(locale.path);

      await expect(page.locator("html")).toHaveAttribute("lang", locale.lang);
      await expect(page).toHaveTitle(locale.title);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toContainText(locale.heading);
      await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
        "content",
        locale.ogLocale,
      );

      const expectedCanonical =
        locale.path === "/"
          ? "https://novadent-psi.vercel.app"
          : `https://novadent-psi.vercel.app${locale.path}`;
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        expectedCanonical,
      );

      for (const language of ["tr", "en", "el", "bg", "x-default"]) {
        await expect(
          page.locator(`link[rel="alternate"][hreflang="${language}"]`),
        ).toHaveCount(1);
      }
    });
  }

  test("Turkish is the non-redirecting default", async ({ page }) => {
    await page.goto("/");
    expect(new URL(page.url()).pathname).toBe("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "tr");
  });

  test("social preview is a 1200x630 large card", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://novadent-psi.vercel.app/images/og/novadent-og.jpg",
    );
    await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute(
      "content",
      "1200",
    );
    await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute(
      "content",
      "630",
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
  });
});

test.describe("Brand, proof and content", () => {
  test("hero uses the art-directed clinic image and separate mobile copy", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const image = page.locator("#anasayfa picture img").first();
    const smileImage = page.locator("#anasayfa picture img").nth(1);
    const heading = page.locator("#anasayfa h1");
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("src", /hero-desktop\.webp/);
    await expect(smileImage).toBeVisible();
    await expect(smileImage).toHaveAttribute("src", /hero-smile-desktop\.webp/);
    const enamelGlint = page.locator(".tooth-shimmer__enamel");
    await expect(enamelGlint).toHaveCount(1);
    await expect(page.locator(".tooth-shimmer__spark")).toHaveCount(0);
    await expect(enamelGlint).toHaveCSS(
      "animation-name",
      "enamel-final-glint",
    );
    await expect(enamelGlint).toHaveCSS("animation-iteration-count", "1");
    expect(
      await enamelGlint.evaluate((element) => getComputedStyle(element).maskImage),
    ).toContain("teeth-mask-mobile.png");
    expect(
      await enamelGlint.evaluate(
        (element) =>
          getComputedStyle(element, "::before").animationIterationCount,
      ),
    ).toBe("1");

    const imageBox = await image.boundingBox();
    const headingBox = await heading.boundingBox();
    expect(imageBox).not.toBeNull();
    expect(headingBox).not.toBeNull();
    expect(imageBox!.y + imageBox!.height).toBeLessThanOrEqual(headingBox!.y + 2);
  });

  test("Google proof shows 5.0, 141, three excerpts and derived 138", async ({
    page,
  }) => {
    await page.goto("/");
    const reviews = page.locator("#yorumlar");
    await expect(reviews).toContainText("141 Google değerlendirmesi");
    await expect(reviews.locator("figure")).toHaveCount(3);
    await expect(
      reviews.getByRole("link", {
        name: /Google'daki diğer 138 yorumu gör/,
      }),
    ).toHaveAttribute("href", /LocalPoiReviews/);
    await expect(reviews.locator('[data-brand-icon="google"]')).toHaveCount(2);
    const verified = reviews.getByTestId("verified-google-reviews");
    await expect(verified).toContainText("Google yorumları doğrulanmıştır.");
    await expect(verified.locator("svg")).toHaveCount(1);
  });

  test("structured data publishes aggregate rating but no review schema", async ({
    page,
  }) => {
    await page.goto("/");
    const raw = await page
      .locator('script[type="application/ld+json"]')
      .innerText();
    const data = JSON.parse(raw);
    expect(data["@type"]).toContain("Dentist");
    expect(data.aggregateRating.ratingValue).toBe("5");
    expect(data.aggregateRating.ratingCount).toBe("141");
    expect(data.review).toBeUndefined();
  });

  test("Instagram is a curated six-image panel without invented counts", async ({
    page,
  }) => {
    await page.goto("/");
    const panel = page.locator("#instagram");
    await expect(panel).toContainText("@novadentclinicsedirne");
    await expect(panel.locator('a[href="' + INSTAGRAM + '"] img')).toHaveCount(6);
    await expect(panel.locator('[data-brand-icon="instagram"]')).toHaveCount(8);

    const text = await panel.innerText();
    for (const invented of ["takipçi", "beğeni", "549", "REELS"]) {
      expect(text).not.toContain(invented);
    }
  });

  test("platform actions use their recognizable local SVG marks", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator('[data-brand-icon="google"]').first()).toBeVisible();
    await expect(
      page.locator('[data-brand-icon="instagram"]').first(),
    ).toBeVisible();
    await expect(
      page.locator('[data-brand-icon="whatsapp"]').first(),
    ).toBeVisible();
    await expect(page.locator("[data-flag]")).toHaveCount(5);
  });

  test("all clinic images decode successfully", async ({ page }) => {
    await page.goto("/");
    await revealAll(page);

    const images = page.locator("img");
    const count = await images.count();
    for (let index = 0; index < count; index += 1) {
      await images.nth(index).scrollIntoViewIfNeeded();
    }

    await expect
      .poll(async () =>
        images.evaluateAll((nodes) =>
          nodes
            .filter(
              (node): node is HTMLImageElement =>
                node instanceof HTMLImageElement &&
                node.complete &&
                node.naturalWidth === 0,
            )
            .map((node) => node.getAttribute("src")),
        ),
      )
      .toEqual([]);

    const dentalUnitTile = page
      .locator('#klinik img[src*="dental-unit"]')
      .first()
      .locator("xpath=../..");
    await expect(dentalUnitTile).toHaveClass(/row-span-2/);
  });
});

test.describe("Keyboard and interaction", () => {
  test("skip link is first and becomes visible on focus", async ({ page }) => {
    await page.goto("/");
    const skip = page.locator("a.skip-link");
    const parked = await skip.boundingBox();
    expect(parked!.y).toBeLessThan(0);

    await page.keyboard.press("Tab");
    await expect(skip).toBeFocused();
    await expect
      .poll(async () => (await skip.boundingBox())!.y)
      .toBeGreaterThanOrEqual(0);
  });

  test("language menu opens from the keyboard and Escape restores focus", async ({
    page,
  }) => {
    await page.goto("/");
    const trigger = page.locator('button[aria-haspopup="menu"]');
    await trigger.focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator('[role="menu"]')).toBeVisible();
    await expect(page.locator('[role="menuitem"]').first()).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(page.locator('[role="menu"]')).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });

  test("mobile navigation opens, closes with Escape and restores focus", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const trigger = page.locator('button[aria-controls="mobile-navigation"]');
    await trigger.click();
    const mobileNavigation = page.locator("#mobile-navigation");
    await expect(mobileNavigation).toBeVisible();
    await expect(mobileNavigation).not.toContainText("↗");
    await page.keyboard.press("Escape");
    await expect(page.locator("#mobile-navigation")).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("one navigation affordance exists at desktop and tablet widths", async ({
    page,
  }) => {
    for (const width of [1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      const desktopNav = page.locator("header > div nav").first();
      const mobileTrigger = page.locator(
        'button[aria-controls="mobile-navigation"]',
      );
      const states = [
        await desktopNav.isVisible(),
        await mobileTrigger.isVisible(),
      ].filter(Boolean);
      expect(states).toHaveLength(1);
    }
  });

  test("FAQ uses an accessible, reversible disclosure", async ({ page }) => {
    await page.goto("/");
    const first = page.locator("#sss button").first();
    await expect(first).toHaveAttribute("aria-expanded", "true");
    const panelId = await first.getAttribute("aria-controls");
    await expect(page.locator(`#${panelId}`)).toBeVisible();
    await first.click();
    await expect(first).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator(`#${panelId}`)).toBeHidden();
  });

  test("Google map is consent-lazy", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#iletisim iframe")).toHaveCount(0);
    await page.getByTestId("map-load").click();
    await expect(page.locator("#iletisim iframe")).toHaveCount(1);
    await expect(page.locator("#iletisim iframe")).toHaveAttribute(
      "src",
      /google\.com\/maps/,
    );
  });

  test("mobile action bar appears only after leaving the hero", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await expect(page.getByTestId("mobile-action-bar")).toHaveCount(0);

    await page.locator("#tedaviler").scrollIntoViewIfNeeded();
    await expect(page.getByTestId("mobile-action-bar")).toBeVisible();
    const mobileBar = page.getByTestId("mobile-action-bar");
    const callAction = mobileBar.locator(`a[href="${TEL}"]`);
    const glassSurface = mobileBar.locator(".mobile-liquid-glass");
    await expect(callAction).toBeVisible();
    await expect(callAction).toHaveClass(/mobile-liquid-action--call/);
    await expect(glassSurface).toHaveCount(1);
    expect(
      await glassSurface.evaluate(
        (element) => getComputedStyle(element).backdropFilter,
      ),
    ).toContain("blur");
    await callAction.focus();
    await expect(callAction).toHaveCSS("outline-color", "rgb(6, 23, 46)");
    expect((await callAction.boundingBox())?.height).toBeGreaterThanOrEqual(48);
    const callBounds = await callAction.boundingBox();
    expect(callBounds).not.toBeNull();
    await page.mouse.move(
      callBounds!.x + callBounds!.width / 2,
      callBounds!.y + callBounds!.height / 2,
    );
    await page.mouse.down();
    await expect(callAction).toHaveCSS(
      "border-top-color",
      "rgba(6, 23, 46, 0.14)",
    );
    await page.mouse.up();
    await expect(
      page
        .getByTestId("mobile-action-bar")
        .locator('[data-brand-icon="whatsapp"]'),
    ).toBeVisible();
  });
});

test.describe("Responsive and accessibility matrix", () => {
  test("all target widths and languages have no horizontal overflow", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "Desktop Chrome");
    test.setTimeout(90_000);
    const widths = [320, 360, 390, 430, 768, 1024, 1279, 1280, 1440, 1920];

    for (const locale of LOCALES) {
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(locale.path);
        const dimensions = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
        }));
        expect(
          dimensions.scrollWidth,
          `${locale.path} overflowed at ${width}px`,
        ).toBeLessThanOrEqual(dimensions.clientWidth + 1);
      }
    }
  });

  test("mobile header is porcelain and distinct from the navy hero", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const colors = await page.evaluate(() => ({
      header: getComputedStyle(document.querySelector("header")!)
        .backgroundColor,
      hero: getComputedStyle(document.querySelector("#anasayfa")!)
        .backgroundColor,
    }));
    expect(colors.header).not.toBe(colors.hero);
    expect(colors.header).not.toBe("rgb(6, 23, 46)");
  });

  test("long localized copy remains contained at 200 percent text size", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "Desktop Chrome");
    for (const locale of LOCALES) {
      await page.setViewportSize({ width: 320, height: 900 });
      await page.goto(locale.path);
      await page.evaluate(() => {
        document.documentElement.style.fontSize = "200%";
      });
      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(
        dimensions.scrollWidth,
        `${locale.path} overflowed at 200% text`,
      ).toBeLessThanOrEqual(dimensions.clientWidth + 1);
    }
  });

  test("visible interactive targets are at least 44px tall", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await revealAll(page);
    const tooSmall = await page.evaluate(() => {
      const failures: string[] = [];
      for (const element of document.querySelectorAll<HTMLElement>(
        "a[href], button",
      )) {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        if (
          rect.width === 0 ||
          rect.height === 0 ||
          style.visibility === "hidden" ||
          style.display === "none"
        ) {
          continue;
        }
        if (rect.height < 44) {
          failures.push(
            `${element.tagName}:${(element.textContent || "").trim().slice(0, 24)}:${Math.round(rect.height)}`,
          );
        }
      }
      return failures;
    });
    expect(tooSmall).toEqual([]);
  });

  test("reduced motion leaves every reveal readable", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const hidden = await page.locator("[data-reveal]").evaluateAll((nodes) =>
      nodes.filter((node) => getComputedStyle(node).opacity === "0").length,
    );
    expect(hidden).toBe(0);
    await expect(page.locator(".floss-path")).toHaveCSS(
      "animation-name",
      "none",
    );
    await expect(page.locator(".floss-path-glow")).toHaveCSS(
      "animation-name",
      "none",
    );
    await expect(page.locator(".floss-path-pulse")).toHaveCSS(
      "display",
      "none",
    );
    await expect(page.locator(".tooth-shimmer")).toHaveCSS("display", "none");
  });
});

test.describe("Public endpoints", () => {
  test("sitemap lists all four locale URLs", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.ok()).toBeTruthy();
    const xml = await response.text();
    for (const path of ["", "/en", "/el", "/bg"]) {
      expect(xml).toContain(`https://novadent-psi.vercel.app${path}`);
    }
  });

  test("robots points at the production sitemap", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.ok()).toBeTruthy();
    expect(await response.text()).toContain(
      "Sitemap: https://novadent-psi.vercel.app/sitemap.xml",
    );
  });
});
