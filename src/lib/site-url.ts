const FALLBACK_SITE_URL = "https://novadent-psi.vercel.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL
).replace(/\/+$/, "");
