"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Mail,
  Calendar,
  Sparkles,
  MessageSquare,
  Phone,
  HeadphonesIcon,
  LayoutGrid
} from "lucide-react";

const topRowCards = [
  {
    icon: HeadphonesIcon,
    title: "Inbound Call Agent",
    highlight: "Inbound",
    metric: "85% calls handled automatically",
    metricColor: "text-[var(--primary)]",
  },
  {
    icon: Phone,
    title: "Outbound Sales Agent",
    highlight: "Outbound",
    metric: "3X more leads contacted",
    metricColor: "text-[var(--primary)]",
  },
  {
    icon: Calendar,
    title: "Appointment Booking Agent",
    highlight: "Appointment",
    metric: "60% booking rate increase",
    metricColor: "text-[var(--primary)]",
  },
  {
    icon: Sparkles,
    title: "Lead Qualification Agent",
    highlight: "Lead",
    metric: "45% conversion increased",
    metricColor: "text-[var(--primary)]",
  },
];

const bottomRowCards = [
  {
    icon: MessageSquare,
    title: "Customer Support Agent",
    highlight: "Customer",
    metric: "70% faster resolution",
    metricColor: "text-[var(--primary)]",
  },
  {
    icon: Search,
    title: "Survey Call Agent",
    highlight: "Survey",
    metric: "4X response rate",
    metricColor: "text-[var(--primary)]",
  },
  {
    icon: Mail,
    title: "Follow-up Call Agent",
    highlight: "Follow-up",
    metric: "52% churn rate decreased",
    metricColor: "text-[var(--primary)]",
  },
  {
    icon: LayoutGrid,
    title: "Multi-Language Agent",
    highlight: "Multi-Language",
    metric: "20+ languages supported",
    metricColor: "text-[var(--primary)]",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  highlight,
  metric,
}: {
  icon: React.ElementType;
  title: string;
  highlight: string;
  metric: string;
}) {
  return (
    <div className="flex-shrink-0 flex items-center gap-4 px-5 py-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] min-w-[280px]">
      <div className="h-10 w-10 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center flex-shrink-0">
        <Icon size={18} className="text-[var(--foreground)]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">
          <span className="text-[var(--foreground)]">{highlight}</span>
          <span className="text-[var(--muted)]">
            {title.replace(highlight, "")}
          </span>
        </p>
        <p className="text-xs text-[var(--primary)]">{metric}</p>
      </div>
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
  );
}

export default function Hero() {
  // Duplicate cards for seamless loop
  const topCards = [...topRowCards, ...topRowCards, ...topRowCards];
  const bottomCards = [...bottomRowCards, ...bottomRowCards, ...bottomRowCards];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Orange glow at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[var(--primary)]/30 via-[var(--primary)]/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="mx-auto max-w-[1350px] px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-[var(--primary)]">AI Voice Agents</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-tight"
        >
          Never Miss
          <br />
          <span className="text-[var(--primary)]">A Call Again</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-[var(--muted)] max-w-md mx-auto"
        >
          AI voice agents that handle calls, book appointments, and convert leads 24/7.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-row items-center justify-center gap-3"
        >
          <Link
            href="#pricing"
            className="px-7 py-3.5 rounded-full font-medium border border-[var(--border)] hover:bg-[var(--card)] transition-colors text-sm"
          >
            See our pricing
          </Link>
          <Link
            href="#contact"
            className="px-7 py-3.5 rounded-full font-medium bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors text-sm"
          >
            Book a free call
          </Link>
        </motion.div>
      </div>

      {/* Marquee Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 space-y-4 w-full"
      >
        {/* Top Row - Moves Right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -1120],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {topCards.map((card, index) => (
              <FeatureCard key={`top-${index}`} {...card} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Moves Left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          <motion.div
            className="flex gap-4"
            initial={{ x: -1120 }}
            animate={{
              x: [-1120, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {bottomCards.map((card, index) => (
              <FeatureCard key={`bottom-${index}`} {...card} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
