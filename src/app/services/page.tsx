import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import AgentCard from "@/components/AgentCard";

export const metadata: Metadata = {
  title: "AI Marketing Agents — Five Agent Categories",
  description:
    "Specialized AI agents for marketing strategy, content creation, website development, campaign management, and growth optimization. See how our five agent categories work together.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero - Cream */}
      <section className="section-cream pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-space-indigo">
              Multiple Agents. Five Categories.
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-accent-blue font-medium">
              Agents That Own Workflows &amp; Outcomes, Not Just Tasks
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-blue-slate text-sm leading-relaxed">
                  Each of our agents owns a complete workflow — from input to output to
                  optimization — with measurable performance metrics and continuous improvement loops.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-blue-slate text-sm leading-relaxed">
                  Every agent operates with built-in quality guardrails and human oversight
                  checkpoints. Complete audit trails. Your brand reputation stays protected.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Five Agent Categories - White, with flip card grid first, then expandable details */}
      <section className="section-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-space-indigo">
                Five Agent Categories. One Complete System.
              </h2>
              <p className="mt-4 text-blue-slate text-lg max-w-2xl mx-auto">
                These agent categories cover your entire marketing operation — from strategy
                through execution to optimization.
              </p>
            </div>
          </FadeIn>

          {/* Flip card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {agentDetails.map((agent, i) => (
              <FadeIn key={agent.title + "-card"} delay={i * 80}>
                <div className="flip-card h-[260px]">
                  <div className="flip-card-inner relative w-full h-full">
                    <div className="flip-card-front absolute inset-0 bg-space-indigo rounded-xl p-6 flex flex-col items-center justify-center text-center">
                      <Image src={agent.icon} alt="" width={56} height={56} className="w-14 h-14 mb-4" />
                      <h3 className="text-lg font-semibold text-white">{agent.title}</h3>
                    </div>
                    <div className="flip-card-back absolute inset-0 bg-eggshell border-2 border-space-indigo rounded-xl p-5 flex flex-col justify-center overflow-y-auto">
                      <h3 className="text-base font-semibold text-space-indigo mb-2">{agent.title}</h3>
                      <p className="text-sm text-deep-space leading-relaxed">{agent.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Expandable detail cards */}
          <FadeIn>
            <p className="text-sm text-accent-blue text-center mb-6 font-medium">
              Click on each Agent to find out more:
            </p>
          </FadeIn>
          <div className="space-y-4 max-w-4xl mx-auto">
            {agentDetails.map((agent, i) => (
              <FadeIn key={agent.title} delay={i * 60}>
                <AgentCard {...agent} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Pathway - Dark Navy */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Not Sure Which Agents You Need First?
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="mt-10 text-left max-w-md mx-auto">
              <ol className="space-y-4">
                {assessmentSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-eggshell/80 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="btn-primary inline-block px-8 py-3.5 rounded-full text-base font-semibold"
              >
                Let&apos;s Discuss Your Agents
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

const agentDetails = [
  {
    title: "Marketing Strategy & Growth Playbook",
    description: "We learn your business, audit your current marketing, and build a customized growth plan designed to drive measurable results.",
    icon: "/images/icons/agent-strategy.png",
    deliverables: [
      "Deep brand and competitive audit",
      "Target audience definition and segmentation",
      "Channel strategy — which platforms, what content, how often",
      "Content calendar and execution roadmap",
      "Ongoing performance review and optimization",
    ],
    expandedContent: "This agent starts by deeply understanding your brand, your voice, your audience, and your goals before creating a single piece of content. We build systems, not one-off deliverables — the goal is a marketing engine that runs with minimal ongoing effort.",
  },
  {
    title: "Content & Social Media",
    description: "We create the content. You approve it. Your audience sees a consistent, professional brand — every day, every channel.",
    icon: "/images/icons/agent-content.png",
    deliverables: [
      "LinkedIn content strategy and execution (personal + company pages)",
      "Blog and article writing in the founder's or executive's voice",
      "Email newsletters and drip campaigns",
      "Social media management across all channels",
      "Content repurposing — turn one piece into many formats",
    ],
    expandedContent: "",
  },
  {
    title: "Website Design & Development",
    description: "We build websites that convert visitors into customers — and keep them performing month after month.",
    icon: "/images/icons/agent-website.png",
    deliverables: [
      "Website audit and UX review",
      "Full design and development (or redesign of existing site)",
      "SEO and GEO optimization for local and organic search",
      "Analytics setup and monthly performance reporting",
      "Landing page creation for campaigns and lead capture",
    ],
    expandedContent: "",
  },
  {
    title: "AI-Powered Marketing Agents",
    description: "The power of a full marketing department — without the headcount, the overhead, or the wait.",
    icon: "/images/icons/agent-ai.png",
    deliverables: [
      "AI-assisted content creation calibrated to your brand voice",
      "Automated content workflows that run 24/7/365",
      "Data-driven campaign optimization",
      "Marketing analytics and performance insights",
    ],
    expandedContent: "The Agentic AI advantage: No new hires needed. No dependency on people's availability or sick days. Manual, repetitive tasks handled automatically. Your marketing runs around the clock — nights, weekends, holidays — with built-in guardrails and compliance safeguards. The result is speed, consistency, and scale that human-only teams simply cannot match.",
  },
  {
    title: "Campaign Management & Growth",
    description: "From strategy to execution to optimization — we run the campaigns that move your numbers.",
    icon: "/images/icons/agent-campaign.png",
    deliverables: [
      "Email campaign strategy, build, and deployment",
      "Lead generation and nurture sequences",
      "Paid media strategy and management",
      "Event and webinar promotion and follow-up sequences",
      "Performance tracking and ROI reporting",
    ],
    expandedContent: "",
  },
];

const assessmentSteps = [
  "We'll start with a Growth Assessment",
  "Audit your current marketing and workflows",
  "Identify the highest-impact agent deployments",
  "Build a prioritized growth roadmap",
  "No commitment required",
];
