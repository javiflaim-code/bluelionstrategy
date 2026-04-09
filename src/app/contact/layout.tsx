import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Blue Lion Strategy — Get Your Growth Assessment",
  description:
    "Book a free 30-minute Growth Assessment. We'll audit your marketing, identify high-impact agent deployments, and build a prioritized roadmap.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
