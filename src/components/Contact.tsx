"use client";

import { motion } from "framer-motion";
import { MapPin, Send, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[1350px] px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--primary)] text-sm">// Contact</span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-semibold italic">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
                Let&apos;s Talk!
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--muted)] max-w-sm text-sm leading-relaxed lg:text-right lg:pt-8"
          >
            Ready to never miss a call again? Get in touch and let&apos;s
            build your AI voice agent.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Office Card */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex-1 flex flex-col justify-between">
              <div className="h-10 w-10 rounded-xl border border-[var(--border)] flex items-center justify-center">
                <MapPin size={18} className="text-[var(--foreground)]" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Headquarters</h3>
                <p className="text-sm text-[var(--muted)]">
                  San Francisco, California
                </p>
              </div>
            </div>

            {/* Email & Phone Cards */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Chat to sales */}
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex flex-col justify-between">
                <div className="h-10 w-10 rounded-xl border border-[var(--border)] flex items-center justify-center">
                  <Send size={18} className="text-[var(--foreground)]" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Chat to sales</h3>
                  <a
                    href="mailto:hello@voxtra.ai"
                    className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                  >
                    hello@voxtra.ai
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex flex-col justify-between">
                <div className="h-10 w-10 rounded-xl border border-[var(--border)] flex items-center justify-center">
                  <Phone size={18} className="text-[var(--foreground)]" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <a
                    href="tel:+359888-7798"
                    className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                  >
                    +359-888-7798
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
          >
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm text-[var(--muted)] mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--muted)]/50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-[var(--muted)] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--muted)]/50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-[var(--muted)] mb-2">More for you</label>
                <textarea
                  placeholder="More about your project"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors resize-none placeholder:text-[var(--muted)]/50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm font-medium hover:border-[var(--primary)] transition-colors"
              >
                <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
                  Send an inquiry
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
