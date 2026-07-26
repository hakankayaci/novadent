"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types/site";

interface AccessibleAccordionProps {
  items: FAQItem[];
}

export function AccessibleAccordion({ items }: AccessibleAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const accordionId = `accordion-content-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div
            key={index}
            className="border border-brand-teal-900/10 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-brand-teal-800/30"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={accordionId}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left text-base sm:text-lg font-bold text-brand-teal-950 hover:bg-brand-surface-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-900 transition-colors"
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-teal-800 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-brand-lime-500" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={accordionId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`transition-all duration-300 ${
                isOpen ? "block p-5 pt-0 text-text-secondary leading-relaxed border-t border-brand-teal-900/5 bg-brand-surface-50/50" : "hidden"
              }`}
            >
              <p className="text-base sm:text-lg text-text-secondary pt-3">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
