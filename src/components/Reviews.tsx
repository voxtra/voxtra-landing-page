"use client";

import { motion } from "framer-motion";

const topRowReviews = [
  {
    quote: "Voxtra's voice agent handles 80% of our inbound calls. Our team can finally focus on high-value clients.",
    name: "Priya Shah",
    role: "Operations Director",
  },
  {
    quote: "We were missing calls after hours. Now our AI agent books appointments 24/7. Revenue is up 40%.",
    name: "Amy Louise",
    role: "Clinic Manager",
  },
  {
    quote: "The voice quality is incredible. Customers often don't realize they're talking to an AI until we tell them.",
    name: "Benjamin Daul",
    role: "Customer Service Lead",
  },
  {
    quote: "Setup was fast and the team customized everything to match our brand voice perfectly.",
    name: "Sarah Chen",
    role: "VP of Operations",
  },
];

const bottomRowReviews = [
  {
    quote: "Our lead qualification improved dramatically. The AI asks all the right questions before transferring to sales.",
    name: "Michael Joseph",
    role: "Sales Director",
  },
  {
    quote: "From demo to live in under a week. The voice agent now handles all our appointment reminders automatically.",
    name: "Mateo Alvarez",
    role: "Practice Owner",
  },
  {
    quote: "We replaced our entire after-hours answering service. The savings alone made it worth it.",
    name: "Jesse Leigh",
    role: "CEO & Founder",
  },
  {
    quote: "The analytics dashboard shows exactly what customers are asking. It's helped us improve our entire business.",
    name: "Rebecca Torres",
    role: "Director of Operations",
  },
];

function ReviewCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="flex-shrink-0 w-[340px] p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      {/* Quote */}
      <p className="text-sm text-[var(--foreground)] leading-relaxed mb-6">
        &quot;{quote}&quot;
      </p>

      {/* Author - Hero card style */}
      <div className="flex items-center gap-4 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)]">
        {/* Avatar */}
        <div className="h-10 w-10 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/40 to-[var(--primary)]/80" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">
            <span className="text-[var(--foreground)]">{name}</span>
          </p>
          <p className="text-xs text-[var(--primary)]">{role}</p>
        </div>

        {/* 6-dot grid */}
        <div className="flex flex-col gap-0.5 opacity-30">
          <div className="flex gap-0.5">
            <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
            <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
          </div>
          <div className="flex gap-0.5">
            <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
            <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
          </div>
          <div className="flex gap-0.5">
            <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
            <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  // Duplicate for seamless loop
  const topCards = [...topRowReviews, ...topRowReviews, ...topRowReviews];
  const bottomCards = [...bottomRowReviews, ...bottomRowReviews, ...bottomRowReviews];

  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="mx-auto max-w-[1350px] px-6 mb-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--primary)] text-sm">// Testimonials</span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-semibold italic">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
                Reviews
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
            Hear from businesses that transformed their phone operations with Voxtra.
          </motion.p>
        </div>
      </div>

      {/* Reviews Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        {/* Top Row - Moves Left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -1440],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {topCards.map((review, index) => (
              <ReviewCard key={`top-${index}`} {...review} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Moves Right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          <motion.div
            className="flex gap-4"
            initial={{ x: -1440 }}
            animate={{
              x: [-1440, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {bottomCards.map((review, index) => (
              <ReviewCard key={`bottom-${index}`} {...review} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
