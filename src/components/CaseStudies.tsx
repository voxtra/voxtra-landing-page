"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MoreVertical } from "lucide-react";

const caseStudies = [
  {
    name: "PrimeCare Medical",
    highlight: "Prime",
    category: "Healthcare",
  },
  {
    name: "AutoDeal Motors",
    highlight: "Auto",
    category: "Automotive",
  },
  {
    name: "HomeServ Pro",
    highlight: "Home",
    category: "Home Services",
  },
  {
    name: "LegalEdge Law",
    highlight: "Legal",
    category: "Legal Services",
  },
];

// Code lines for the terminal effect
const codeLines = [
  { indent: 0, text: "function optimize(data) {" },
  { indent: 1, text: "const results = [];" },
  { indent: 1, text: "for (let i = 0; i < data.length; i++) {" },
  { indent: 2, text: "const processed = transform(data[i]);" },
  { indent: 2, text: "results.push(processed);" },
  { indent: 1, text: "}" },
  { indent: 1, text: "return results.filter(Boolean);" },
  { indent: 0, text: "}" },
  { indent: 0, text: "" },
  { indent: 0, text: "async function fetchData(endpoint) {" },
  { indent: 1, text: "const response = await fetch(endpoint);" },
  { indent: 1, text: "const json = await response.json();" },
  { indent: 1, text: "return processResponse(json);" },
  { indent: 0, text: "}" },
];

function CodeVisualization() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/50 to-[var(--background)]" />

      {/* Code lines */}
      <div className="absolute inset-0 p-8 font-mono text-xs opacity-40">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-[var(--muted)] whitespace-nowrap"
            style={{ paddingLeft: line.indent * 16 }}
          >
            <span className="text-[var(--muted)]/50 mr-4">{String(i + 1).padStart(2, '0')}</span>
            {line.text}
          </motion.div>
        ))}
      </div>

      {/* Center glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      </div>

      {/* Circular overlay element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <svg viewBox="0 0 200 200" className="w-72 h-72">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-[var(--muted)]"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-[var(--muted)]"
          />
        </svg>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = container.children;
      if (!children.length) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(children).forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to card when clicking pagination dot
  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const children = container.children;
    if (children[index]) {
      const child = children[index] as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();

      const scrollLeft = container.scrollLeft + childRect.left - containerRect.left - 24; // 24px for padding
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
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
            <span className="text-[var(--primary)] text-sm">// Work</span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-semibold italic">
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--foreground)] bg-clip-text text-transparent">
                Case Studies
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
            See how businesses transformed their customer communications with AI voice agents.
          </motion.p>
        </div>

        {/* Case Studies Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth -mx-6 px-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] sm:w-[360px] lg:w-[400px] snap-start"
              >
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
                  {/* Image Area */}
                  <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] bg-[var(--background)] overflow-hidden">
                    <CodeVisualization />
                  </div>

                  {/* Content Footer - Hero card style */}
                  <div className="relative -mt-4 mx-3 mb-3">
                    <div className="flex items-center gap-4 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                      {/* Icon */}
                      <div className="h-10 w-10 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/40 to-[var(--primary)]/80" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">
                          <span className="text-[var(--foreground)]">{study.highlight}</span>
                          <span className="text-[var(--muted)]">
                            {study.name.replace(study.highlight, "")}
                          </span>
                        </h3>
                        <p className="text-xs text-[var(--primary)]">{study.category}</p>
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[var(--primary)] w-3"
                    : "bg-[var(--border)] hover:bg-[var(--muted)]"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
