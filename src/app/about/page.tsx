import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Blue Lion Strategy — AI Marketing Execution Partners",
  description:
    "We deploy working AI marketing systems for growing businesses. Strategy decks don't grow revenue. Deployed AI agents do.",
};

export default function AboutPage() {
  return (
    <>
      {/* Mission - Cream */}
      <section className="section-cream pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="space-y-4 text-lg md:text-xl text-blue-slate mb-10">
              <p>We started Blue Lion to be the execution partner that deploys working systems.</p>
              <p>We&apos;re not exploring what AI could do for your business.</p>
              <p className="text-space-indigo font-semibold">We&apos;re deploying what works.</p>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-space-indigo">
              Strategy decks don&apos;t grow revenue. Deployed AI agents do.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* How We Operate - White */}
      <section className="section-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-blue">
              How We Operate
            </span>
            <p className="mt-4 text-blue-slate text-lg leading-relaxed">
              Great implementation requires two things: creative vision and operational discipline
              that delivers. We built Blue Lion with both. We combine marketing expertise with
              agentic AI to give businesses the tools and systems they need to attract customers,
              grow revenue, and compete — on their own terms. We build it, we teach it, and we
              hand you the keys.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Technology & Trust - Light Gray */}
      <section className="section-light-gray py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-space-indigo text-center max-w-3xl mx-auto">
              Built on enterprise-grade AI infrastructure. Not generic tools retrofitted with
              security features.
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Zero Data Retention */}
            <FadeIn delay={100}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                <Image
                  src="/images/about/zero-data.png"
                  alt=""
                  width={56}
                  height={56}
                  className="w-14 h-14 mb-4"
                />
                <h3 className="text-xl font-semibold text-space-indigo mb-1">Zero Data Retention</h3>
                <p className="text-sm text-accent-blue mb-4">
                  Your data never becomes training data.
                </p>
                <ul className="space-y-2">
                  {zeroDataItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-slate">
                      <span className="text-space-indigo mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Security */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                <Image
                  src="/images/about/security-certs.png"
                  alt=""
                  width={56}
                  height={56}
                  className="w-14 h-14 mb-4"
                />
                <h3 className="text-xl font-semibold text-space-indigo mb-1">Security You Can Trust</h3>
                <p className="text-sm text-accent-blue mb-4">
                  Independent verification, not just promises
                </p>
                <ul className="space-y-2">
                  {securityItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-slate">
                      <span className="text-space-indigo mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Certification Logos - Outside the boxes, centered */}
          <FadeIn delay={300}>
            <div className="mt-10 flex items-center justify-center gap-8 flex-wrap">
              {[
                { src: "/images/security/soc2.png", alt: "SOC 2 Type II" },
                { src: "/images/security/gdpr.png", alt: "GDPR" },
                { src: "/images/security/ccpa.png", alt: "CCPA" },
                { src: "/images/security/tls.png", alt: "TLS 1.3" },
              ].map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Integrations - White */}
      <section className="section-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-space-indigo">Built for Your Stack</h2>
            <p className="mt-2 text-blue-slate text-lg">
              Integrates with the tools you already use
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {integrationCategories.map((cat) => (
                <div key={cat.category} className="bg-light-gray rounded-xl p-5 text-left">
                  <h3 className="text-sm font-semibold text-space-indigo uppercase tracking-wider mb-3">
                    {cat.category}
                  </h3>
                  <p className="text-sm text-blue-slate">{cat.tools}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-dusty-denim">
              Complete audit trails on every integration
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Section - Cream */}
      <section id="team" className="section-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-space-indigo text-center mb-14">
              Our Team
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 150}>
                <div className="flip-card h-[480px]">
                  <div className="flip-card-inner relative w-full h-full">
                    {/* Front */}
                    <div className="flip-card-front absolute inset-0 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <div className="h-[360px] relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-space-indigo">{member.name}</h3>
                        <p className="text-sm text-accent-blue">{member.title}</p>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="flip-card-back absolute inset-0 bg-space-indigo rounded-xl p-6 overflow-y-auto">
                      <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                      <p className="text-sm text-accent-blue mb-4">{member.title}</p>
                      <p className="text-sm text-eggshell/80 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA - Dark Navy */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Designed for Businesses That Demand Results
            </h2>
            <div className="mt-8">
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

const zeroDataItems = [
  "Processed in milliseconds, then deleted",
  "Contractually guaranteed with AI providers",
  "Private open-source model deployment available",
  "No client data stored on provider systems",
];

const securityItems = [
  "SOC 2 Type II certified",
  "GDPR compliant",
  "CCPA compliant",
  "AES-256 encryption at rest",
  "TLS 1.3 encryption in transit",
];

const integrationCategories = [
  { category: "CRMs", tools: "Salesforce, HubSpot, Zoho, Monday.com" },
  { category: "Marketing", tools: "Mailchimp, Constant Contact, Klaviyo, Sendible" },
  { category: "Communication", tools: "Zoom, Teams, Gmail, Outlook" },
  { category: "Analytics", tools: "Google Analytics, Search Console, LinkedIn Analytics" },
];

const teamMembers = [
  {
    name: "Javier Flaim",
    title: "Co-Founder, Blue Lion Strategy",
    image: "/images/team/javier.png",
    bio: "Javier brings 25+ years of technology and marketing executive experience to Blue Lion Strategy. He previously served as CMO at Digital Harmonic, an enterprise AI platform company, and as CEO of Recyclebank, a VC-backed behavioral engagement platform. Javier holds an MBA in Strategy & Marketing from The Wharton School and a BA in Economics and Political Science from UC Berkeley.",
  },
  {
    name: "Ari Kopmar",
    title: "Co-Founder, Blue Lion Strategy",
    image: "/images/team/ari.png",
    bio: "Ari is an AI-focused strategic executive and Wharton-certified AI strategist. He previously served as VP of Product Marketing at Unifund Corp, a fintech company, and as EVP of Consumer Initiatives at Carroll Shelby International. His expertise spans digital transformation, AI implementation, and brand positioning for growth-stage companies.",
  },
];
