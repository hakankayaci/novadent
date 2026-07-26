"use client";

import React, { useRef, useState } from "react";
import { Plus } from "lucide-react";

export interface AccordionItem {
  q: string;
  a: string;
}

/**
 * Height is animated with a grid-template-rows trick rather than max-height, so the panel
 * measures its own content and no magic pixel value can clip a long Bulgarian answer.
 * The panel is never `hidden`, so in-page find still reaches collapsed text.
 */
export function AccessibleAccordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const map: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowUp: index - 1,
      Home: 0,
      End: items.length - 1,
    };
    const next = map[event.key];
    if (next === undefined) return;
    event.preventDefault();
    buttons.current[(next + items.length) % items.length]?.focus();
  };

  return (
    <div className="divide-y divide-navy-950/10 border-y border-navy-950/10">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                ref={(node) => {
                  buttons.current[index] = node;
                }}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="group flex w-full min-h-[64px] items-center justify-between gap-5 py-5 text-left transition-colors duration-200"
              >
                <span
                  className={`text-display-sm font-bold transition-colors duration-200 ${
                    isOpen ? "text-cyan-600" : "text-navy-950 group-hover:text-cyan-600"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ease-out ${
                    isOpen
                      ? "rotate-45 bg-cyan-500 text-navy-950 font-bold"
                      : "bg-navy-50 text-navy-800 group-hover:bg-navy-100"
                  }`}
                >
                  <Plus className="h-4 w-4 stroke-[2.5]" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-400 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose pb-6 pr-12 text-body text-ink-soft">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
