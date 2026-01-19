"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
  },
  {
    name: "Sarah Kim",
    role: "Head of Voice AI",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Engineer",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Success",
  },
];

// Futuristic VR-style placeholder
function TeamVisual({ index }: { index: number }) {
  const colors = [
    "from-orange-500/60 via-purple-500/40 to-blue-600/60",
    "from-cyan-400/60 via-blue-500/40 to-purple-500/60",
    "from-orange-600/60 via-red-500/40 to-purple-600/60",
    "from-yellow-500/60 via-orange-500/40 to-red-500/60",
  ];

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-950/90">
      {/* Glow effect */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-r ${colors[index % colors.length]} rounded-full blur-3xl opacity-60`} />

      {/* Light streaks */}
      <motion.div
        className="absolute top-1/4 right-0 w-32 h-1 bg-gradient-to-l from-orange-400/80 to-transparent rounded-full blur-sm"
        animate={{ x: [-100, 50], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 left-0 w-24 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent rounded-full blur-sm"
        animate={{ x: [50, -50], opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
      />

      {/* Circular rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-32 h-32 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border border-white/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Person silhouette placeholder */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-48">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--card)] to-transparent" />
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 relative">
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
            <span className="text-[var(--primary)] text-sm">// The Team</span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-semibold italic">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
                The Team
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
            Voice AI experts dedicated to transforming how businesses handle calls.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]"
            >
              {/* Visual */}
              <TeamVisual index={index} />

              {/* Content Footer - Hero card style */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)]/90 backdrop-blur-sm">
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate text-[var(--foreground)]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[var(--primary)]">{member.role}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
