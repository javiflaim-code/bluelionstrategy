import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "AI Marketing Agent Use Cases",
  description:
    "See how businesses use Blue Lion's AI agents to solve real marketing challenges — from content creation to full marketing system builds.",
};

export default function UseCasesPage() {
  return (
    <>
      {/* Hero - Cream */}
      <section className="section-cream pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-space-indigo">
              Not demos. Not pilots. Working agents solving real problems.
            </h1>
            <p className="mt-6 text-xl text-blue-slate">
              Problem. Agent. Workflow. Outcome. Here&apos;s how it looks in practice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Use Cases - Alternating White/Light Gray */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {useCases.map((uc, i) => (
            <FadeIn key={uc.title} delay={i * 80}>
              <div className={`rounded-2xl overflow-hidden border border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-light-gray"}`}>
                <div className="bg-space-indigo px-8 py-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-eggshell/60">
                    Use Case {i + 1}
                  </span>
                  <h3 className="mt-1 text-xl md:text-2xl font-bold text-white">{uc.title}</h3>
                </div>

                <div className="p-8 space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-danger mb-3">Problem</h4>
                    <p className="text-blue-slate leading-relaxed">{uc.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-blue mb-3">Agent</h4>
                    <p className="text-space-indigo font-medium">{uc.agent}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-blue mb-3">Workflow</h4>
                    <ol className="space-y-2">
                      {uc.workflow.map((step, j) => (
                        <li key={j} className="flex items-start gap-3 text-blue-slate">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-space-indigo/10 text-space-indigo flex items-center justify-center text-xs font-bold">
                            {j + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-success mb-3">Outcome</h4>
                    <p className="text-blue-slate leading-relaxed">{uc.outcome}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA - Dark Navy */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to See Results Like These?
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-primary inline-block px-8 py-3.5 rounded-full text-base font-semibold"
              >
                Get Your Assessment
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

const useCases = [
  {
    title: "Consistent Content for a Growing Professional Services Firm",
    problem: "A growing firm's founders know they should be posting on LinkedIn and publishing thought leadership — but between running the business and serving clients, marketing always falls to the bottom of the list. Posts are sporadic. The brand voice is inconsistent. Prospects can't tell what the firm stands for.",
    agent: "Content & Social Media Agent",
    workflow: [
      "Brand Intake captures the founders' voice, expertise, and audience",
      "Strategy agent creates content pillars and posting calendar",
      "Content agent produces 3-5 LinkedIn posts per week + 2 blog articles per month",
      "Founders review and approve in minutes",
      "Agent learns from edits and feedback, improving over time",
    ],
    outcome: "Consistent, professional brand presence across LinkedIn and the company blog. Founders spend 15 minutes per week on marketing instead of 5+ hours. Inbound inquiries increase as the firm becomes visible to its target audience.",
  },
  {
    title: "Website That Actually Converts for an Environmental Services Company",
    problem: "An environmental services company has no web presence — or a dated site that doesn't reflect their capabilities. Prospects search for services online and find competitors instead. The company is losing business it doesn't even know about.",
    agent: "Website Design & Development Agent",
    workflow: [
      "Audit existing web presence (or lack thereof)",
      "Design and build a modern, conversion-optimized site",
      "Implement SEO and local search optimization",
      "Set up analytics to track visitor behavior and conversions",
      "Monthly reporting and continuous improvement",
    ],
    outcome: "A professional web presence that ranks in search results, converts visitors into leads, and establishes credibility in the market. The company goes from invisible to discoverable.",
  },
  {
    title: "Full Marketing System for a Financial Services Firm",
    problem: "A wealth management firm has relied entirely on referrals for growth. They know they need a marketing system — website, email, LinkedIn, content, events — but their team has no marketing expertise and no bandwidth to figure it out.",
    agent: "Marketing Strategy & Growth Playbook + Content & Social Media + Campaign Management",
    workflow: [
      "Growth Assessment identifies the highest-impact opportunities",
      "Strategy agent builds a comprehensive marketing playbook covering 15+ marketing touchpoints",
      "Content agent executes: LinkedIn thought leadership, blog posts, email newsletters",
      "Campaign agent manages event promotion, lead nurture sequences, and referral programs",
      "Monthly performance reviews and optimization",
    ],
    outcome: "A multi-channel marketing engine covering website, SEO, LinkedIn, email, events, and referral programs — built, running, and generating measurable results. The firm goes from zero marketing infrastructure to a complete growth system.",
  },
  {
    title: "AI-Powered Marketing at Scale for a Multi-Location Business",
    problem: "A multi-location business needs consistent marketing across all locations — but managing content, campaigns, and brand consistency at scale with a small team is impossible. Quality varies. Messaging drifts. Opportunities are missed.",
    agent: "AI-Powered Marketing Agents + Campaign Management",
    workflow: [
      "Brand intake captures voice, standards, and location-specific nuances",
      "AI agents generate location-aware content at scale — social posts, email campaigns, local SEO",
      "Campaign agent coordinates timing and sequencing across locations",
      "Built-in guardrails ensure brand consistency and compliance",
      "Centralized dashboard tracks performance across all locations",
    ],
    outcome: "Consistent, high-quality marketing across every location — running 24/7/365 without adding headcount. The business scales its marketing output without scaling its marketing team.",
  },
];
