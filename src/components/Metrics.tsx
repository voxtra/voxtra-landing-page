"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 500,
    suffix: "k+",
    label: "Calls handled",
    description: "AI voice agents answering calls for businesses worldwide",
  },
  {
    value: 98,
    suffix: "%",
    label: "Customer satisfaction",
    description: "Based on post-call surveys and client feedback scores",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Always available",
    description: "Your voice agent never sleeps, takes breaks, or calls in sick",
  },
  {
    value: 60,
    suffix: "%",
    label: "Cost reduction",
    description: "Average savings compared to traditional call center staffing",
  },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 2000;
            const startTime = Date.now();

            const updateCounter = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              setDisplayValue(Math.floor(value * easeOut));

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              }
            };

            requestAnimationFrame(updateCounter);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="mx-auto max-w-[1350px] px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[var(--primary)] text-sm">// Metrics</span>
          <h2 className="mt-4 text-5xl sm:text-6xl font-semibold italic">
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
              Our Metrics
            </span>
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="text-5xl sm:text-6xl font-semibold mb-2">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <h3 className="text-sm font-medium mb-2">{metric.label}</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
