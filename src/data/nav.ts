import type { Copy } from "@/data/translations";

export type NavItem = {
  /** In-page anchor; the id half must exist in NAV_SECTIONS. */
  href: string;
  label: (c: Copy) => string;
  primary?: boolean;
};

/** Single source of truth for desktop header nav and mobile drawer. */
export const navItems: NavItem[] = [
  { href: "#anasayfa", label: (c) => c.nav.home },
  { href: "#tedaviler", label: (c) => c.nav.treatments, primary: true },
  { href: "#neden-novadent", label: (c) => c.nav.whyUs, primary: true },
  { href: "#uluslararasi", label: (c) => c.nav.international, primary: true },
  { href: "#galeri", label: (c) => c.nav.gallery, primary: true },
  { href: "#degerlendirmeler", label: (c) => c.nav.reviews, primary: true },
  { href: "#randevu-sureci", label: (c) => c.nav.steps },
  { href: "#sss", label: (c) => c.nav.faq },
  { href: "#iletisim", label: (c) => c.nav.contact, primary: true },
];

export const primaryNavItems = navItems.filter((item) => item.primary);
