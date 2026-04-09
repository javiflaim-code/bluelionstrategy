import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Cream background like current site */}
      <section className="section-cream pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-space-indigo leading-tight">
              Marketing Systems That Grow Your Business While You Run It.
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-lg md:text-xl text-blue-slate max-w-3xl mx-auto leading-relaxed">
              We deploy specialized AI agents that attract customers, create content, and
              accelerate growth — without increasing headcount, without heavy infrastructure
              spend, and without the overhead of a traditional marketing team. Just smarter
              systems and measurable ROI.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-secondary px-8 py-3.5 rounded-full text-base font-semibold"
              >
                Get a Demo
              </Link>
              <Link
                href="/services"
                className="btn-primary px-8 py-3.5 rounded-full text-base font-semibold"
              >
                Explore Agents
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mt-10 text-lg text-space-indigo font-medium">
              No pilots. No theory. Just working systems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Problem Statement - Dark Navy Section */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              You Know Your Marketing Could Be Better. So Why Isn&apos;t It?
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-8 space-y-4 text-eggshell/80 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                You&apos;re running a growing business. You know consistent marketing drives
                revenue. But between managing operations, serving clients, and leading your team
                — marketing always falls to the bottom of the list. Hiring a full team is
                expensive. Agencies are slow and misaligned. And doing it yourself means late
                nights writing LinkedIn posts that never get published.
              </p>
              <p>
                We built something different: a complete AI agent ecosystem that handles your
                marketing strategy and execution — deployed, optimized, and running while you
                focus on what you do best.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Agent Categories - White with Flip Cards */}
      <section className="section-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-space-indigo">
                Specialized Agents. Five Integrated Categories.
              </h2>
              <p className="mt-4 text-blue-slate max-w-3xl mx-auto text-lg">
                Each agent owns a specific workflow. Together, they cover your entire marketing
                operation — from strategy to content to campaigns to optimization. You approve
                the work. The agents do the rest.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentCategories.map((agent, i) => (
              <FadeIn key={agent.title} delay={i * 80}>
                <div className="flip-card h-[280px]">
                  <div className="flip-card-inner relative w-full h-full">
                    {/* Front - Navy with icon */}
                    <div className="flip-card-front absolute inset-0 bg-space-indigo rounded-xl p-6 flex flex-col items-center justify-center text-center">
                      <Image src={agent.icon} alt="" width={64} height={64} className="w-16 h-16 mb-4" />
                      <h3 className="text-lg font-semibold text-white">{agent.title}</h3>
                    </div>
                    {/* Back - Cream with description */}
                    <div className="flip-card-back absolute inset-0 bg-eggshell border-2 border-space-indigo rounded-xl p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-space-indigo mb-3">{agent.title}</h3>
                      <p className="text-sm text-deep-space leading-relaxed">{agent.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-12">
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

      {/* Trust / Differentiator - Light Gray */}
      <section className="section-light-gray py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-space-indigo/10 text-space-indigo border border-space-indigo/20 mb-6">
              Built with Enterprise-Grade Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-space-indigo">
              AI Agents That Work For You — Not Instead Of You
            </h2>
            <p className="mt-6 text-blue-slate text-lg max-w-3xl mx-auto leading-relaxed">
              Our agents are built on secure, enterprise-grade AI infrastructure with human
              oversight at every step. You stay in control. The agents handle the execution.
              Your brand voice stays consistent, your data stays protected, and your marketing
              runs around the clock.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {trustItems.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <Image src={item.icon} alt="" width={48} height={48} className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-space-indigo font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-slate">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Assessment CTA - Dark Navy */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              We Have Agents Working Around the Clock. So You Don&apos;t Have To.
            </h2>
            <p className="mt-4 text-eggshell/80 text-lg max-w-2xl mx-auto">
              Take full control of everything we build to run your business. We empower your
              team with systems and AI agents that work whether we&apos;re in the room or not.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-10 bg-white/10 border border-white/20 rounded-xl p-8 max-w-xl mx-auto text-left">
              <h3 className="text-white font-semibold text-lg mb-4">
                Book a 30-minute Growth Assessment:
              </h3>
              <ul className="space-y-3">
                {assessmentItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-eggshell/80">
                    <span className="text-accent-blue mt-1">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-primary inline-block px-8 py-3.5 rounded-full text-base font-semibold"
                >
                  Get Your Growth Assessment
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA - White */}
      <section className="section-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-space-indigo">
              Your Competitors Already Started. When Will You?
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary px-8 py-3.5 rounded-full text-base font-semibold"
              >
                Get a Demo
              </Link>
              <Link
                href="/contact"
                className="btn-secondary px-8 py-3.5 rounded-full text-base font-semibold"
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

const agentCategories = [
  {
    title: "Marketing Strategy & Growth Playbook",
    description:
      "We learn your business, audit your current marketing, and build a customized growth plan designed to drive measurable results.",
    icon: "/images/icons/agent-strategy.png",
  },
  {
    title: "Content & Social Media",
    description:
      "We create the content. You approve it. Your audience sees a consistent, professional brand — every day, every channel.",
    icon: "/images/icons/agent-content.png",
  },
  {
    title: "Website Design & Development",
    description:
      "We build websites that convert visitors into customers — and keep them performing month after month.",
    icon: "/images/icons/agent-website.png",
  },
  {
    title: "AI-Powered Marketing Agents",
    description:
      "The power of a full marketing department — without the headcount, the overhead, or the wait.",
    icon: "/images/icons/agent-ai.png",
  },
  {
    title: "Campaign Management & Growth",
    description:
      "From strategy to execution to optimization — we run the campaigns that move your numbers.",
    icon: "/images/icons/agent-campaign.png",
  },
];

const trustItems = [
  {
    title: "Human Oversight",
    description: "Every agent operates with built-in quality guardrails and human oversight checkpoints.",
    icon: "/images/icons/shield.png",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. GDPR and CCPA compliant. AES-256 encryption at rest.",
    icon: "/images/icons/handshake.png",
  },
  {
    title: "Measurable Results",
    description: "Complete audit trails, performance metrics, and continuous improvement loops.",
    icon: "/images/icons/success.png",
  },
];

const assessmentItems = [
  "Audit your current marketing and workflows",
  "Identify the highest-impact agent deployments",
  "Build a prioritized growth roadmap",
  "No commitment required",
];
