"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Share2,
  Layers,
  TrendingUp,
  Plus,
  Link2,
  Folder,
  Mic,
  Send,
  MoreVertical,
} from "lucide-react";

// Orange bars indicator component
function OrangeBars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-1 h-4 rounded-full bg-[var(--primary)]"
        />
      ))}
    </div>
  );
}

// Inbound Voice Agent Card
function InboundCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="h-10 w-10 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
          <MessageSquare className="h-5 w-5" />
        </div>
        <OrangeBars />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-2">Inbound Voice Agents</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
        AI agents that answer calls instantly, handle inquiries, and never put customers on hold.
      </p>

      {/* Tags */}
      <div className="flex gap-2 mb-auto">
        {["24/7", "Instant", "Natural"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-lg border border-[var(--border)] text-xs"
          >
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent font-medium">
              {tag}
            </span>
          </span>
        ))}
      </div>

      {/* Voice Interface Mock */}
      <div className="mt-8">
        <p className="text-xs text-[var(--muted)] mb-4">Live call handling</p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button className="h-9 w-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors">
              <Plus size={16} />
            </button>
            <button className="h-9 w-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors">
              <Link2 size={16} />
            </button>
            <button className="h-9 w-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors">
              <Folder size={16} />
            </button>
          </div>
          <div className="flex gap-2">
            <button className="h-9 w-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors">
              <Mic size={16} />
            </button>
            <button className="h-9 w-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// CRM & Tools Integrations Card
function IntegrationsCard() {
  const topRowIcons = ["✳", "▶", "◆", "⊕", "❋", "✳", "▶", "◆", "⊕", "❋"];
  const bottomRowIcons = ["✳", "⊕", "❋", "✂", "◀", "✳", "⊕", "❋", "✂", "◀"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex flex-col h-full overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="h-10 w-10 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
          <Share2 className="h-5 w-5" />
        </div>
        <OrangeBars />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-2">CRM Integrations</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
        Seamlessly sync calls with your CRM, calendar, and business tools.
      </p>

      {/* Tools Marquee */}
      <div className="mt-auto space-y-2 overflow-hidden">
        {/* Top Row - Moves Right */}
        <div className="relative">
          <motion.div
            className="flex gap-2"
            animate={{ x: [0, -240] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {[...topRowIcons, ...topRowIcons].map((icon, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-12 w-12 rounded-xl border border-[var(--border)] bg-[var(--background)] flex items-center justify-center text-lg"
              >
                {icon}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Moves Left */}
        <div className="relative">
          <motion.div
            className="flex gap-2"
            initial={{ x: -240 }}
            animate={{ x: [-240, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {[...bottomRowIcons, ...bottomRowIcons].map((icon, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-12 w-12 rounded-xl border border-[var(--border)] bg-[var(--background)] flex items-center justify-center text-lg"
              >
                {icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Outbound Voice Campaigns Card
function OutboundCard() {
  const items = [
    { icon: "📞", title: "Sales Outreach Calls", metric: "3X more", highlight: "contacts" },
    { icon: "📅", title: "Appointment Reminders", metric: "45% no-show", highlight: "reduced" },
    { icon: "✦", title: "Follow-up Sequences", metric: "60% callback", highlight: "rate" },
    { icon: "⚡", title: "Lead Qualification", metric: "2X qualified", highlight: "leads" },
  ];

  const allItems = [...items, ...items];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex flex-col h-full overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="h-10 w-10 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
          <Layers className="h-5 w-5" />
        </div>
        <OrangeBars />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-2">Outbound Campaigns</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
        AI-powered outbound calls for sales, reminders, and follow-ups at scale.
      </p>

      {/* Metric */}
      <div className="flex items-center gap-2 mb-4 py-2 border-t border-[var(--border)]">
        <span className="text-sm">
          <span className="text-[var(--primary)]">10X</span>
          <span className="text-[var(--muted)]"> more calls </span>
          <span className="text-[var(--foreground)]">per day</span>
        </span>
      </div>

      {/* Workflow Items - Vertical Marquee */}
      <div className="mt-auto h-[140px] overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[var(--card)] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--card)] to-transparent z-10" />
        <motion.div
          className="space-y-2"
          animate={{ y: [0, -296] }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {allItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--background)]"
            >
              <div className="h-9 w-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-sm font-medium">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.title}</p>
                <p className="text-xs">
                  <span className="text-[var(--primary)]">{item.metric}</span>
                  <span className="text-[var(--foreground)]"> {item.highlight}</span>
                </p>
              </div>
              <button className="text-[var(--muted)]">
                <MoreVertical size={16} />
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Animated Bar Component
function AnimatedBar({
  month,
  value,
  heightPercent,
  index,
  totalBars,
}: {
  month: string;
  value: string;
  heightPercent: number;
  index: number;
  totalBars: number;
}) {
  // Master cycle: 10 seconds total
  // - Small initial pause
  // - Each bar animates in sequence (staggered)
  // - After last bar, hold all bars, then reset together
  const masterCycle = 10;

  // Calculate this bar's timing within the master cycle (all values 0-1)
  const initialPause = 0.05; // 5% initial pause
  const stagger = 0.08; // 8% between each bar (0.8s)

  const barStart = initialPause + (index * stagger);
  const transitionEnd = barStart + 0.07; // Transition takes 7% of cycle
  const holdEnd = 0.70; // All bars hold until 70%
  const resetPoint = 0.85; // Reset starts at 85%

  // Build keyframe times for this bar
  const times = [0, barStart, transitionEnd, holdEnd, resetPoint, 1];

  return (
    <div className="flex-1 flex flex-col items-center gap-2">
      <div className="w-full h-28 flex items-end justify-center">
        <motion.div
          className="w-full rounded-t-lg bg-[var(--background)] border border-[var(--border)] border-b-0"
          animate={{
            height: [12, 12, `${heightPercent}%`, `${heightPercent}%`, `${heightPercent}%`, 12],
          }}
          transition={{
            duration: masterCycle,
            times: times,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      <div className="h-5 relative w-full">
        {/* Month label */}
        <motion.span
          className="text-xs text-[var(--muted)] absolute inset-0 flex items-center justify-center"
          animate={{
            opacity: [1, 1, 0, 0, 0, 1],
          }}
          transition={{
            duration: masterCycle,
            times: times,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {month}
        </motion.span>
        {/* Percentage label */}
        <motion.span
          className="text-xs text-[var(--primary)] font-medium absolute inset-0 flex items-center justify-center"
          animate={{
            opacity: [0, 0, 1, 1, 1, 0],
          }}
          transition={{
            duration: masterCycle,
            times: times,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {value}
        </motion.span>
      </div>
    </div>
  );
}

// Voice Analytics Card
function AnalyticsCard() {
  const bars = [
    { month: "Jan", value: "+10%", heightPercent: 30 },
    { month: "Feb", value: "+18%", heightPercent: 45 },
    { month: "Mar", value: "+24%", heightPercent: 58 },
    { month: "Apr", value: "+29%", heightPercent: 72 },
    { month: "May", value: "+33%", heightPercent: 88 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="h-10 w-10 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
          <TrendingUp className="h-5 w-5" />
        </div>
        <OrangeBars />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-2">Voice Analytics</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
        Track call performance, sentiment analysis, and conversion insights in real-time.
      </p>

      {/* Animated Bar Chart */}
      <div className="mt-auto flex items-end justify-between gap-3 h-36">
        {bars.map((bar, i) => (
          <AnimatedBar
            key={i}
            month={bar.month}
            value={bar.value}
            heightPercent={bar.heightPercent}
            index={i}
            totalBars={bars.length}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Solutions() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="mx-auto max-w-[1350px] px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--primary)] text-sm">// Services</span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-semibold italic">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
                Voice Solutions
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
            AI voice agents that handle calls, qualify leads, and book appointments around the clock.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-4">
          {/* Top Row - 2/3 + 1/3 */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <InboundCard />
            </div>
            <div className="md:col-span-1">
              <IntegrationsCard />
            </div>
          </div>
          {/* Bottom Row - 1/3 + 2/3 */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <OutboundCard />
            </div>
            <div className="md:col-span-2">
              <AnalyticsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
