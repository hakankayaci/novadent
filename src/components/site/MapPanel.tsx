"use client";

import { useState } from "react";
import { UiIcon } from "@/components/site/UiIcon";

interface MapPanelProps {
  embedUrl: string;
  title: string;
  buttonLabel: string;
  privacyNote?: string;
}

export function MapPanel({
  embedUrl,
  title,
  buttonLabel,
  privacyNote,
}: MapPanelProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[22rem] min-w-0 overflow-hidden rounded-panel bg-ink-950 text-white shadow-lift lg:h-full lg:min-h-[22rem]">
      {loaded ? (
        <iframe
          title={title}
          src={embedUrl}
          className="h-full min-h-[22rem] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_50%_20%,rgba(8,183,211,0.22),transparent_45%)] p-8 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-aqua-500 text-ink-950">
            <UiIcon name="map-pin" className="h-6 w-6" />
          </span>
          <button
            type="button"
            data-testid="map-load"
            onClick={() => setLoaded(true)}
            className="min-h-11 rounded-xl bg-white px-5 py-3 font-semibold text-ink-950 transition-transform duration-300 ease-out hover:-translate-y-0.5"
          >
            {buttonLabel}
          </button>
          {privacyNote ? (
            <p className="max-w-sm text-sm leading-6 text-ink-100">
              {privacyNote}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
