"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Pay As You Go",
    price: "$0.16",
    period: "/minute",
    description: "No commitments, pay only for what you use",
    features: [
      "20 concurrent calls",
      "Inbound & outbound calls",
      "CRM integrations",
      "Call analytics dashboard",
      "Email & chat support",
      "No monthly minimums",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-volume & white-label solutions",
    features: [
      "+100 concurrent calls",
      "White-label solution",
      "Custom voice & branding",
      "Multi-language support",
      "Dedicated account manager",
      "SLA guarantees",
      "API access",
      "Volume discounts",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="mx-auto max-w-[1350px] px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] text-sm">// Pricing</span>
          <h2 className="mt-4 text-5xl sm:text-6xl font-semibold italic">
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="mt-4 text-sm text-[var(--muted)] max-w-lg mx-auto">
            Simple, transparent pricing that grows with your business. Flexible
            plans with expert support at every tier.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative p-6 rounded-2xl border ${
                plan.highlighted
                  ? "border-[var(--primary)] bg-[var(--card)]"
                  : "border-[var(--border)] bg-[var(--card)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[var(--primary)] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span className="text-xs text-[var(--muted)] uppercase tracking-wider">
                  {plan.name}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-semibold">{plan.price}</span>
                <span className="text-sm text-[var(--muted)]">{plan.period}</span>
              </div>

              <p className="text-xs text-[var(--muted)] mb-6">
                {plan.description}
              </p>

              <Link
                href="#contact"
                className={`block w-full py-2.5 rounded-full text-sm font-medium text-center transition-colors mb-6 ${
                  plan.highlighted
                    ? "bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white"
                    : "border border-[var(--border)] hover:bg-[var(--card-hover)]"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-xs"
                  >
                    <Check
                      size={14}
                      className="text-[var(--primary)] flex-shrink-0"
                    />
                    <span className="text-[var(--muted)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
