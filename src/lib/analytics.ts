type EventName =
  | "phone_click"
  | "emergency_phone_click"
  | "directions_click"
  | "instagram_click"
  | "google_reviews_click"
  | "service_click"
  | "map_open"
  | "social_post_click"
  | "mobile_action_click"
  | "whatsapp_click"
  | "treatment_whatsapp_click"
  | "quick_action_click"
  | "contact_form_whatsapp_submit";

export function trackEvent(eventName: EventName, properties?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  // Safe non-blocking event dispatcher
  try {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event] ${eventName}:`, properties || {});
    }

    // Custom window event for standard analytics integrations
    const event = new CustomEvent("canbazvet_event", {
      detail: { eventName, properties, timestamp: new Date().toISOString() },
    });
    window.dispatchEvent(event);
  } catch {
    // Silent fallback
  }
}
