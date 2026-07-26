import { business } from "@/data/site";
import type { Copy } from "@/data/translations";

const { weekdays, sunday } = business.hours;

export const weekdayRange = `${weekdays.opens} – ${weekdays.closes}`;
export const sundayRange = `${sunday.opens} – ${sunday.closes}`;

/** e.g. "Pzt–Cmt 09:30 – 19:30 · Paz 12:00 – 17:00", localised by the copy template. */
export function shortHours(c: Copy) {
  return c.hours.shortLine
    .replace("{weekdays}", weekdayRange)
    .replace("{sunday}", sundayRange);
}
