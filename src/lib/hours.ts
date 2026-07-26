import { business } from "@/data/site";
import type { Copy } from "@/data/translations";

const { weekdays, saturday, sunday } = business.hours;

export const weekdayRange = `${weekdays.opens} – ${weekdays.closes}`;
export const saturdayRange = `${saturday.opens} – ${saturday.closes}`;

/** e.g. "Pzt–Cuma 09:00 – 18:30 · Cmt 09:00 – 17:00 · Pazar Kapalı" */
export function shortHours(c: Copy) {
  return c.hours.shortLine
    .replace("{weekdays}", weekdayRange)
    .replace("{saturday}", saturdayRange)
    .replace("{closed}", c.hours.closed);
}
