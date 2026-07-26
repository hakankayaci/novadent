import type { Copy } from "@/data/translations";

export type NavItem = {
  /** In-page anchor; the id half must exist in NAV_SECTIONS. */
  href: string;
  label: (c: Copy) => string;
  /**
   * Shown in the desktop bar. All nine labels do not fit on one line at 1280px in
   * Turkish, let alone in Bulgarian or Greek, so the bar carries the six that drive
   * decisions and the drawer plus the footer carry the full set.
   */
  primary?: boolean;
};

/** Single source of truth so the header and the mobile drawer can never drift apart. */
export const navItems: NavItem[] = [
  { href: "#anasayfa", label: (c) => c.nav.home },
  { href: "#hizmetler", label: (c) => c.nav.services, primary: true },
  { href: "#hakkimizda", label: (c) => c.nav.about, primary: true },
  { href: "#veteriner-hekim", label: (c) => c.nav.vet, primary: true },
  { href: "#klinik", label: (c) => c.nav.clinic, primary: true },
  { href: "#acil-hat", label: (c) => c.nav.emergency, primary: true },
  { href: "#yorumlar", label: (c) => c.nav.reviews },
  { href: "#sss", label: (c) => c.nav.faq },
  { href: "#iletisim", label: (c) => c.nav.contact, primary: true },
];

export const primaryNavItems = navItems.filter((item) => item.primary);
