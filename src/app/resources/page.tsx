import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Resources — AI Marketing Insights",
  description:
    "Expert insights on AI marketing agents, multi-agent workflows, and growth strategies for businesses.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero - Cream */}
      <section className="section-cream pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-space-indigo">Resources</h1>
            <p className="mt-4 text-xl text-blue-slate">
              Insights, frameworks, and thinking on AI-powered marketing
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Resources Grid - White */}
      <section className="section-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, i) => (
              <FadeIn key={resource.title} delay={i * 100}>
                <div className="h-full bg-light-gray rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-space-indigo/20 border border-transparent">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={resource.type === "video" ? "/images/resources/video-icon.png" : "/images/resources/doc-icon.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue">
                        {resource.type === "video" ? "Video" : "Article"}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-space-indigo mb-2 leading-snug">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-blue-slate mb-4 leading-relaxed">
                      {resource.preview}
                    </p>
                    <p className="text-xs text-dusty-denim">By {resource.author}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const resources = [
  {
    title: "WHY YOUR AI STRATEGY IS BACKWARDS (AND WHAT TO DO INSTEAD)",
    author: "Ari Kopmar",
    type: "article",
    preview: "Most businesses approach AI by starting with the technology. That's backwards. Learn why starting with your business objectives and working backward to the right AI implementation leads to better outcomes.",
  },
  {
    title: "Why Human-in-the-Loop AI Isn't Slowing You Down. It's Your Competitive Edge",
    author: "Ari Kopmar",
    type: "article",
    preview: "The common misconception is that human oversight slows AI down. In reality, human-in-the-loop systems produce better results, build trust, and protect your brand — while still moving faster than human-only workflows.",
  },
  {
    title: "Why Single AI Agents Fail: Building Multi-Agent Workflows That Scale",
    author: "Javier Flaim",
    type: "article",
    preview: "Single-purpose AI agents hit a ceiling fast. Discover why multi-agent workflows — where specialized agents collaborate across the marketing stack — deliver more consistent, scalable results for growing businesses.",
  },
  {
    title: "Intro to Agentic AI",
    author: "Ari Kopmar",
    type: "video",
    preview: "A clear, practical introduction to agentic AI for growing businesses. What it is, how it works, and why it matters for your marketing and growth strategy.",
  },
];
