"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#approach" },
  { label: "Metrix", href: "#metrics" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faq" },
];

const resourceLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms Of Service", href: "#" },
  { label: "404 Page", href: "#" },
];

export default function Footer() {
  return (
    <footer className="py-16 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="mx-auto max-w-[1350px] px-6">
        {/* Main Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Brand Card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full border border-[var(--border)] flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
              </div>
              <span className="font-semibold">Voxtra</span>
            </Link>
            <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">
              AI voice agents that handle<br />
              calls 24/7 for your business.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="h-10 w-10 rounded-xl border border-[var(--border)] bg-[var(--background)] flex items-center justify-center hover:border-[var(--primary)] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-xl border border-[var(--border)] bg-[var(--background)] flex items-center justify-center hover:border-[var(--primary)] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-xl border border-[var(--border)] bg-[var(--background)] flex items-center justify-center hover:border-[var(--primary)] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h4 className="font-medium mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h4 className="font-medium mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h4 className="font-medium mb-6">Subscribe</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 pr-12 rounded-full border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--muted)]"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary)]/10 transition-colors">
                <ArrowRight size={16} className="text-[var(--primary)]" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Voxtra.
          </p>

          <p className="text-sm text-[var(--muted)]">
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
