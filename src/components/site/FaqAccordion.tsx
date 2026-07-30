"use client";

import { useId, useState } from "react";
import { UiIcon } from "@/components/site/UiIcon";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-ink-950/10 border-y border-ink-950/10">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex min-h-[68px] w-full items-center justify-between gap-5 py-4 text-left text-lg font-semibold text-ink-950 transition-colors hover:text-aqua-700"
              >
                <span>{item.question}</span>
                <UiIcon
                  name="chevron-down"
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-out ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="max-w-prose pb-6 text-base leading-7 text-copy-soft"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
