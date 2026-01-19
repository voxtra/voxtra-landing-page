"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01.",
    title: "Create Account",
    description:
      "Sign up in seconds, top up your credit, and get instant access to the voice agent builder.",
  },
  {
    number: "02.",
    title: "Build Your Agent",
    description:
      "Pick from ready-made templates or build your own custom agent with your scripts and tone.",
  },
  {
    number: "03.",
    title: "Train & Test",
    description:
      "Train your agent on your FAQs, products, and processes. Test calls until it's perfect.",
  },
  {
    number: "04.",
    title: "Go Live",
    description:
      "Connect your phone number and start handling calls 24/7. Scale up anytime with more concurrent lines.",
  },
];

// Progress bars indicator
function ProgressBars({ filled }: { filled: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`w-1 h-5 rounded-full ${
            i < filled ? "bg-[var(--primary)]" : "bg-[var(--border)]"
          }`}
        />
      ))}
    </div>
  );
}

export default function Approach() {
  return (
    <section id="approach" className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="mx-auto max-w-[1350px] px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Sticky */}
          <div className="lg:py-24">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[var(--primary)] text-sm">// Process</span>
                <h2 className="mt-4 text-5xl sm:text-6xl font-semibold italic">
                  <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
                    Approach
                  </span>
                </h2>

                <p className="mt-6 text-[var(--muted)] text-sm leading-relaxed max-w-sm">
                  Self-serve platform to build and
                  <br />
                  launch your AI voice agent in minutes.
                </p>

                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-[var(--card)] border border-[var(--border)] text-sm font-medium hover:bg-[var(--card-hover)] transition-colors"
                >
                  See our <span className="text-[var(--primary)]">pricing</span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="py-24 space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
              >
                {/* Top row - Number and bars */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-4xl sm:text-5xl font-semibold text-[var(--primary)]">
                    {step.number}
                  </span>
                  <ProgressBars filled={index + 1} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] leading-relaxed max-w-md">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
