"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const challenges = [
  "Operational Efficiency",
  "Content & Marketing",
  "Customer Acquisition",
  "Brand Consistency",
  "Let's Figure It Out Together!",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    challenges: [] as string[],
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChallengeToggle = (challenge: string) => {
    setFormData((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter((c) => c !== challenge)
        : [...prev.challenges, challenge],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "", challenges: [] });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero - Cream */}
      <section className="section-cream pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-space-indigo">
              Let&apos;s Build Your AI Agent Ecosystem
            </h1>
            <p className="mt-6 text-lg text-blue-slate max-w-2xl mx-auto">
              Start with a conversation. We&apos;ll assess your current marketing and workflows,
              identify high-impact agent deployments, and give you honest feedback on the best
              next steps for your business.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form - White */}
      <section className="section-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-space-indigo mb-2">Name *</label>
                  <input
                    id="name" type="text" required placeholder="Your name here"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-light-gray border border-gray-200 rounded-lg text-space-indigo placeholder-dusty-denim focus:outline-none focus:border-space-indigo focus:ring-1 focus:ring-space-indigo transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-space-indigo mb-2">Email Address *</label>
                  <input
                    id="email" type="email" required placeholder="Your email address here"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-light-gray border border-gray-200 rounded-lg text-space-indigo placeholder-dusty-denim focus:outline-none focus:border-space-indigo focus:ring-1 focus:ring-space-indigo transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-space-indigo mb-2">Message / Inquiry</label>
                  <textarea
                    id="message" rows={4} placeholder="Type your message here"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-light-gray border border-gray-200 rounded-lg text-space-indigo placeholder-dusty-denim focus:outline-none focus:border-space-indigo focus:ring-1 focus:ring-space-indigo transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-space-indigo mb-3">Primary Challenge</label>
                  <div className="space-y-2">
                    {challenges.map((challenge) => (
                      <label key={challenge} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                          formData.challenges.includes(challenge)
                            ? "bg-space-indigo border-space-indigo"
                            : "border-gray-300 group-hover:border-space-indigo/50"
                        }`}>
                          {formData.challenges.includes(challenge) && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <input type="checkbox" checked={formData.challenges.includes(challenge)} onChange={() => handleChallengeToggle(challenge)} className="sr-only" />
                        <span className="text-blue-slate text-sm">{challenge}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" disabled={status === "sending"} className="w-full btn-primary px-8 py-3.5 rounded-full text-base font-semibold disabled:opacity-50">
                  {status === "sending" ? "Sending..." : "Click to Submit"}
                </button>
                {status === "sent" && (
                  <p className="text-success text-sm text-center">Thank you! We&apos;ll be in touch soon.</p>
                )}
                {status === "error" && (
                  <p className="text-danger text-sm text-center">
                    Something went wrong. Please email us at{" "}
                    <a href="mailto:info@bluelionstrategy.com" className="underline">info@bluelionstrategy.com</a>
                  </p>
                )}
              </form>
            </FadeIn>

            {/* What to Expect */}
            <FadeIn delay={200}>
              <div className="bg-light-gray rounded-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-space-indigo mb-6">
                  What to Expect From Our Initial Discussion
                </h2>
                <ol className="space-y-4">
                  {expectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-space-indigo/10 text-space-indigo flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="text-blue-slate pt-1">{item}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-blue-slate">
                    <svg className="w-5 h-5 text-space-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@bluelionstrategy.com" className="hover:text-space-indigo transition-colors">info@bluelionstrategy.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-blue-slate">
                    <svg className="w-5 h-5 text-space-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+19402779655" className="hover:text-space-indigo transition-colors">(940) 277-9655</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

const expectations = [
  "30-minute strategy conversation",
  "Assessment of your current growth bottlenecks",
  "Honest evaluation of agent fit (not every business is ready)",
  "Specific recommendations on where to start",
  "Clear pricing and timeline after we understand your needs",
];
