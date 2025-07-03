"use client";
import AnimatedSection from "./AnimatedSection";
import { useScrollSync } from "./useScrollSync";

const sections = [
  {
    title: "Hello Dark Forest,",
    subtitle: "Meet Scorpius.",
    desc: "A new guardian awakens in the digital cosmos.",
    align: "center",
  },
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
    sticky: true,
    stickyCards: [
      {
        title: "🐝 Hive Alert",
        subtitle: "Swarm Intelligence Network",
        desc: "Distributed threat detection that learns from every attack pattern across the network.",
      },
      {
        title: "🧬 Bytecode Engine",
        subtitle: "Code-Level Analysis",
        desc: "Deep bytecode inspection that identifies malicious patterns before execution.",
      },
      {
        title: "🤖 AI Trading Bot",
        subtitle: "Autonomous Defense",
        desc: "AI-powered response system that automatically counters financial attacks.",
      },
      {
        title: "📡 Mempool Monitor",
        subtitle: "Transaction Surveillance",
        desc: "Real-time mempool analysis to detect and prevent malicious transactions.",
      },
    ],
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
    title: "Pricing Tiers",
    subtitle: "Choose Your Plan for Enterprise-Grade Defense",
    desc: "Scalable, enterprise-grade defense for every organization.",
    align: "center",
    pricing: [
      { name: "Pro", price: "$199/mo", icon: "⚡" },
      { name: "Elite", price: "$999/mo", icon: "🚀", popular: true },
      { name: "Enterprise", price: "Contact Us", icon: "🛡️" },
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

  // Find sticky section index
  const stickyIndex = sections.findIndex((sec) => sec.sticky);
  const totalSections = sections.length;
  const stickySubSections = sections[stickyIndex]?.stickyCards?.length || 0;

  // Adjust scroll calculation for sticky section
  let active;
  const scrollPosition = scroll * (totalSections + stickySubSections - 1);

  if (
    stickyIndex >= 0 &&
    scrollPosition >= stickyIndex &&
    scrollPosition <= stickyIndex + stickySubSections
  ) {
    // We're in the sticky section
    active = stickyIndex;
  } else if (scrollPosition > stickyIndex + stickySubSections) {
    // After sticky section, adjust for the extra sub-sections
    active = Math.floor(scrollPosition - stickySubSections + 1);
  } else {
    // Before sticky section
    active = Math.floor(scrollPosition);
  }

  // Calculate sticky card progress
  const stickyProgress =
    stickyIndex >= 0 &&
    scrollPosition >= stickyIndex &&
    scrollPosition <= stickyIndex + stickySubSections
      ? (scrollPosition - stickyIndex) / stickySubSections
      : 0;

  const activeStickyCard =
    stickyProgress > 0 ? Math.floor(stickyProgress * stickySubSections) : -1;

  return (
    <div className="pointer-events-none fixed inset-0 flex flex-col items-center justify-center z-10">
      {sections.map((sec, i) => {
        const isActive = active === i;
        const isStickySection = sec.sticky && isActive;

        return (
          <AnimatedSection
            key={i}
            active={isActive}
            align={sec.align as "left" | "center" | "right"}
          >
            <div
              className={`max-w-3xl mx-auto p-8 rounded-xl backdrop-blur shadow-lg text-center
            bg-black/70 glass-morphism corner-accent
            ${sec.align === "left" ? "text-left ml-0 md:ml-16" : ""}
            ${sec.align === "right" ? "text-right mr-0 md:mr-16" : ""}
            ${sec.align === "center" ? "text-center mx-auto" : ""}`}
            >
              <h1 className="font-bold cyan-glow mb-4 text-4xl md:text-6xl">
                {sec.title}
              </h1>
              <h2 className="text-cyan-400 mb-4 text-xl md:text-2xl">
                {sec.subtitle}
              </h2>
              <p className="text-gray-200 mb-6 text-base md:text-lg">
                {sec.desc}
              </p>

              {/* Sticky Cards for Under-the-Hood Firepower */}
              {isStickySection && sec.stickyCards && activeStickyCard >= 0 && (
                <div className="mb-6">
                  <div
                    className="bg-war-room-charcoal/80 rounded-lg p-6 border border-cyan-400/30"
                    style={{
                      opacity:
                        activeStickyCard < sec.stickyCards.length ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                    }}
                  >
                    {activeStickyCard < sec.stickyCards.length && (
                      <>
                        <h3 className="text-3xl font-command font-bold text-cyan-400 mb-2">
                          {sec.stickyCards[activeStickyCard].title}
                        </h3>
                        <h4 className="text-xl text-white mb-3">
                          {sec.stickyCards[activeStickyCard].subtitle}
                        </h4>
                        <p className="text-gray-300">
                          {sec.stickyCards[activeStickyCard].desc}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Regular Features */}
              {sec.features && !isStickySection && (
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

              {/* Overview Features for Sticky Section */}
              {isStickySection && activeStickyCard < 0 && sec.features && (
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
                        <div className="text-xs text-cyan-400 mt-1">
                          POPULAR
                        </div>
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
        );
      })}
    </div>
  );
}
