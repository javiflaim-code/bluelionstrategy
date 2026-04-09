import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Get answers about Blue Lion Strategy's AI marketing agents, security, implementation timeline, pricing, and how human oversight works.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero - Cream */}
      <section className="section-cream pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-space-indigo">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-xl text-blue-slate">
              Everything you need to know about working with Blue Lion Strategy
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Sections - White */}
      <section className="section-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeIn>
            <h2 className="text-xl font-semibold text-space-indigo mb-6">How Our Agents Work</h2>
            <FAQAccordion items={agentFAQs} />
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-xl font-semibold text-space-indigo mb-6">Security &amp; Data Protection</h2>
            <FAQAccordion items={securityFAQs} />
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="text-xl font-semibold text-space-indigo mb-6">Implementation &amp; Pricing</h2>
            <FAQAccordion items={implementationFAQs} />
          </FadeIn>
        </div>
      </section>

      {/* CTA - Dark Navy */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-eggshell/80 text-lg">
              Book a 30-minute conversation and we&apos;ll answer everything.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-primary inline-block px-8 py-3.5 rounded-full text-base font-semibold"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

const agentFAQs = [
  { question: "What exactly are AI marketing agents?", answer: "AI marketing agents are specialized systems that handle specific marketing workflows autonomously — from content creation to campaign management. Unlike generic AI tools, our agents are configured for your brand voice, your audience, and your goals. They execute real marketing tasks (writing posts, managing campaigns, optimizing performance) with human oversight at every checkpoint." },
  { question: "How do agents maintain my brand voice?", answer: "Every engagement starts with a comprehensive Brand Intake process where we capture your voice, tone, messaging, and positioning. The agents are calibrated to your specific style and learn from your feedback over time. Every piece of content goes through approval before publishing, so you always have final say." },
  { question: "What does 'human-in-the-loop' mean in practice?", answer: "It means you stay in control. Our agents draft, create, and optimize — but you (or your team) review and approve before anything goes live. You can provide feedback that the agents learn from, continuously improving output quality. Think of it as having a tireless team that always checks with you before acting." },
  { question: "Can agents work across multiple channels simultaneously?", answer: "Yes. Our five agent categories are designed to work together across your entire marketing stack — LinkedIn, email, website, blog, paid media, events, and more. A single content brief can be turned into multiple formats across multiple channels, all coordinated by the agent ecosystem." },
  { question: "What happens if something goes wrong with an agent?", answer: "Every agent has built-in guardrails and quality checks. If an output doesn't meet quality thresholds, it's flagged for human review before it can be published. You also have complete audit trails showing every action taken. And because nothing goes live without your approval, the risk of a public mistake is virtually zero." },
];

const securityFAQs = [
  { question: "How is my data protected?", answer: "We use enterprise-grade security including AES-256 encryption at rest and TLS 1.3 encryption in transit. Our infrastructure is SOC 2 Type II certified, GDPR compliant, and CCPA compliant. Your data is never used to train AI models, and we offer contractual guarantees on data handling." },
  { question: "Does my data get used to train AI models?", answer: "No. We have a zero data retention policy with our AI providers. Your data is processed and immediately deleted — it never becomes training data. This is contractually guaranteed. We can also deploy private, open-source models if your business requires additional data isolation." },
  { question: "What compliance certifications do you hold?", answer: "Our infrastructure is SOC 2 Type II certified, GDPR compliant, and CCPA compliant. We maintain AES-256 encryption at rest and TLS 1.3 encryption in transit. All agent actions are logged with complete audit trails for your records." },
];

const implementationFAQs = [
  { question: "How long does implementation take?", answer: "Most businesses are up and running within 2-4 weeks. The first week focuses on Brand Intake and strategy. Weeks 2-3 involve agent configuration and calibration. By week 4, agents are typically producing work at full capacity. The exact timeline depends on the complexity of your marketing needs and how many agent categories you're deploying." },
  { question: "How does pricing work?", answer: "We offer flexible engagement models based on which agent categories you need and the scope of your marketing program. Every engagement starts with a free 30-minute Growth Assessment where we identify the highest-impact opportunities. After that, we provide clear pricing based on your specific needs — no hidden fees, no long-term contracts required to start." },
  { question: "Do I need technical expertise to work with the agents?", answer: "Not at all. We handle all the technical setup, configuration, and optimization. Your role is to review and approve content, provide feedback, and tell us when your business priorities shift. We build it, we teach it, and we hand you the keys — but you don't need to be technical to drive." },
  { question: "Can I start with just one agent category and expand later?", answer: "Absolutely. Many businesses start with the agent category that addresses their most pressing need — usually Content & Social Media or Marketing Strategy — and expand to additional categories as they see results. Our Growth Assessment helps identify where to start for maximum impact." },
  { question: "What if I want to bring marketing in-house eventually?", answer: "That's exactly how we designed it. We build systems that you can own and operate independently. We empower your team with the tools, processes, and AI agents that work whether we're in the room or not. When you're ready to take full ownership, we make the transition seamless." },
];
