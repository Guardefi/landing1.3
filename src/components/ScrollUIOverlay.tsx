"use client";
import AnimatedSection from "./AnimatedSection";
import { useScrollSync } from "./useScrollSync";

const sections = [
  {
    title: "ScorpiusCore",
    subtitle: "The Next-Gen Cyber Defense Engine",
    desc: "A living, breathing core of wireframe intelligence and pulsing quantum energy. The heart of your war room.",
    align: "center",
  },
  {
    title: "Quantum Threat Detection",
    subtitle: "See the Unseen",
    desc: "AI-powered, zero-latency threat recognition. Every anomaly, every shadow, instantly mapped and neutralized.",
    align: "left",
  },
  {
    title: "Adaptive Defense Layers",
    subtitle: "Multi-Protocol. Multi-Chain. Multi-Reality.",
    desc: "Dynamic energy shields and protocol firewalls, adapting in real-time to the evolving threatscape.",
    align: "right",
  },
  {
    title: "Enterprise Command",
    subtitle: "Total Control. Infinite Insight.",
    desc: "Executive dashboards, compliance, and instant incident response. All at your fingertips.",
    align: "center",
  },
];

export default function ScrollUIOverlay() {
  const scroll = useScrollSync();
  const active = Math.floor(scroll * (sections.length - 1) + 0.5);

  return (
    <div className="pointer-events-none fixed inset-0 flex flex-col items-center justify-center z-10">
      {sections.map((sec, i) => (
        <AnimatedSection
          key={i}
          active={active === i}
          align={sec.align as "left" | "center" | "right"}
        >
          <div
            className={`max-w-2xl mx-auto p-6 rounded-xl backdrop-blur bg-black/40 shadow-lg
            ${sec.align === "left" ? "text-left ml-0 md:ml-16" : ""}
            ${sec.align === "right" ? "text-right mr-0 md:mr-16" : ""}
            ${sec.align === "center" ? "text-center mx-auto" : ""}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold cyan-glow mb-4">
              {sec.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-4">
              {sec.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-200">{sec.desc}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
