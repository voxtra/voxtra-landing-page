"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How realistic does the AI voice sound?",
    answer:
      "Our AI voices are indistinguishable from human agents. We use the latest voice synthesis technology with natural intonation, pauses, and emotion. Most callers don't realize they're speaking with AI.",
  },
  {
    question: "How quickly can I get my voice agent live?",
    answer:
      "Most clients go live within 3-5 business days. We handle the setup, training, and phone number configuration. Complex integrations may take 1-2 weeks.",
  },
  {
    question: "Can the AI transfer calls to a human?",
    answer:
      "Absolutely. You can set rules for when calls should be transferred—complex issues, VIP customers, or specific requests. The AI provides context to the human agent before transfer.",
  },
  {
    question: "What happens if the AI doesn't understand?",
    answer:
      "Our AI is trained to gracefully handle confusion. It will ask clarifying questions, and if needed, offer to transfer to a human or take a message. You can customize these fallback behaviors.",
  },
  {
    question: "Can it integrate with my CRM and calendar?",
    answer:
      "Yes, we integrate with all major CRMs (Salesforce, HubSpot, etc.), calendars (Google, Outlook), and can build custom integrations via API for your existing systems.",
  },
  {
    question: "What languages are supported?",
    answer:
      "We support 20+ languages including English, Spanish, French, German, Portuguese, and more. Multi-language agents can switch languages mid-conversation based on caller preference.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="mx-auto max-w-[1350px] px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--primary)] text-sm">// FAQ</span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-semibold italic">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
                Answers?
              </span>
            </h2>
            <p className="mt-6 text-sm text-[var(--muted)] leading-relaxed max-w-md">
              Everything you need to know about AI voice agents. Can&apos;t find the
              answer you&apos;re looking for? Book a call with our team.
            </p>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-[var(--border)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--card)] transition-colors"
                >
                  <span className="text-sm font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-[var(--muted)] transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm text-[var(--muted)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
