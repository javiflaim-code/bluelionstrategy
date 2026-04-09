"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl overflow-hidden bg-light-gray"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-space-indigo font-medium pr-4">{item.question}</span>
            <span className="shrink-0 w-6 h-6 rounded-full border border-space-indigo/30 flex items-center justify-center text-space-indigo text-sm">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          <div className={`accordion-content ${openIndex === index ? "open" : ""}`}>
            <div className="px-6 pb-5 text-blue-slate text-sm leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
