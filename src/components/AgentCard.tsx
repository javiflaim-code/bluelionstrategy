"use client";

import { useState } from "react";
import Image from "next/image";

interface AgentCardProps {
  title: string;
  description: string;
  expandedContent: string;
  deliverables: string[];
  icon: string;
}

export default function AgentCard({
  title,
  description,
  expandedContent,
  deliverables,
  icon,
}: AgentCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="group cursor-pointer bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-space-indigo/30 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-lg bg-space-indigo flex items-center justify-center">
          <Image src={icon} alt="" width={28} height={28} className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-space-indigo">{title}</h3>
            <svg
              className={`w-5 h-5 text-accent-blue transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <p className="mt-2 text-sm text-blue-slate">{description}</p>
        </div>
      </div>

      <div className={`accordion-content ${expanded ? "open" : ""}`}>
        <div className="pt-4 mt-4 border-t border-gray-100">
          <h4 className="text-sm font-semibold text-accent-blue mb-3">
            What this agent delivers:
          </h4>
          <ul className="space-y-2 mb-4">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-blue-slate">
                <span className="text-space-indigo mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          {expandedContent && (
            <p className="text-sm text-blue-slate leading-relaxed">{expandedContent}</p>
          )}
        </div>
      </div>
    </div>
  );
}
