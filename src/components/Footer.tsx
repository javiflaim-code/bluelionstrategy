import Link from "next/link";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Team", href: "/about#team" },
  { label: "Resources", href: "/resources" },
];

export default function Footer() {
  return (
    <footer className="bg-[#d6dce5] border-t border-[#c0c8d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-space-indigo uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {footerNav.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="text-sm text-blue-slate hover:text-space-indigo transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-space-indigo uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-blue-slate">
              <a href="mailto:info@bluelionstrategy.com" className="block hover:text-space-indigo transition-colors">
                info@bluelionstrategy.com
              </a>
              <a href="tel:+19402779655" className="block hover:text-space-indigo transition-colors">
                (940) 277-9655
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-space-indigo uppercase tracking-wider mb-4">
              Connect
            </h3>
            <a
              href="https://www.linkedin.com/company/blue-lion-strategy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-slate hover:text-space-indigo transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#b8c2d0] text-center text-sm text-blue-slate/60">
          &copy; {new Date().getFullYear()} Blue Lion Strategy, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
