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
  {
    title: "Under-the-Hood Firepower",
    subtitle: "Medieval Precision Meets Alien Technology",
    desc: "Seven combat-ready modules forged in quantum cybersecurity fires. Each weapon designed for digital warfare.",
    align: "left",
    features: [
      "🐝 Hive Alert",
      "🧬 Bytecode Engine",
      "🤖 AI Trading Bot",
      "📡 Mempool Monitor",
    ],
  },
  {
    title: "Enterprise Arsenal",
    subtitle: "When Fortune 500 Meets Medieval War Tactics",
    desc: "Advanced tier capabilities that separate the knights from the peasants. Enterprise-grade digital battlefield tools.",
    align: "right",
    features: [
      "🔮 Quantum Security",
      "🧪 Simulation Sandbox",
      "📋 Compliance Grid",
      "🛂 Access Control Matrix",
    ],
  },
  {
    title: "Pricing / Access Tiers",
    subtitle: "Choose Your Level of Defense",
    desc: "From indie builders to Fortune 500 fortresses. Every tier built for the digital battlefield.",
    align: "center",
    pricing: [
      { name: "Starter", price: "$99/month", icon: "🏁" },
      { name: "Professional", price: "$499/month", icon: "🛰️", popular: true },
      { name: "Enterprise", price: "Custom", icon: "🛡️" },
    ],
  },
  {
    title: "Battle-Tested by Leaders",
    subtitle: "Trusted by Fortune 500 & DeFi Protocols",
    desc: "ScorpiusCore protects over $847B in digital assets. Join the defense against the Dark Forest.",
    align: "left",
    testimonials: [
      {
        quote:
          "ScorpiusCore detected a flash loan attack 3 seconds before execution. Saved us $2.3M.",
        author: "Marcus Chen, CTO",
      },
      {
        quote:
          "The medieval aesthetic with Fortune 500 functionality is exactly what our board needed.",
        author: "Sarah Williams, CISO",
      },
    ],
  },
  {
    title: "Ready to Deploy?",
    subtitle: "The Dark Forest is Watching",
    desc: "Book a live demo or deploy now—because 'maybe secure' is just another way to say next victim.",
    align: "center",
    cta: true,
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
            className={`max-w-3xl mx-auto p-8 rounded-xl backdrop-blur bg-black/70 shadow-lg glass-morphism corner-accent
            ${sec.align === "left" ? "text-left ml-0 md:ml-16" : ""}
            ${sec.align === "right" ? "text-right mr-0 md:mr-16" : ""}
            ${sec.align === "center" ? "text-center mx-auto" : ""}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold cyan-glow mb-4">
              {sec.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-cyan-400 mb-4">
              {sec.subtitle}
            </h2>
            <p className="text-base md:text-lg text-gray-200 mb-6">
              {sec.desc}
            </p>

            {/* Features */}
            {sec.features && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {sec.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-cyan-300"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 pulse-glow"></div>
                    {feature}
                  </div>
                ))}
              </div>
            )}

            {/* Pricing */}
            {sec.pricing && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {sec.pricing.map((tier, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg bg-war-room-charcoal/60 border border-cyan-400/30 ${tier.popular ? "ring-2 ring-cyan-400" : ""}`}
                  >
                    <div className="text-2xl mb-2">{tier.icon}</div>
                    <div className="text-sm text-cyan-400 font-bold">
                      {tier.name}
                    </div>
                    <div className="text-xs text-white">{tier.price}</div>
                    {tier.popular && (
                      <div className="text-xs text-cyan-400 mt-1">POPULAR</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Testimonials */}
            {sec.testimonials && (
              <div className="space-y-4 mb-6">
                {sec.testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-war-room-charcoal/60 border-l-4 border-cyan-400"
                  >
                    <p className="text-sm text-gray-300 italic mb-2">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-xs text-cyan-400">
                      — {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            {sec.cta && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
                <button className="btn-glow bg-cyan-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-cyan-300 transition-all duration-300">
                  Book Live Demo
                </button>
                <button className="btn-glow bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Deploy Now
                </button>
              </div>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
