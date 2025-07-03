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
    carousel: true,
    carouselImages: [
      {
        title: "Executive Dashboard",
        desc: "Real-time threat intelligence overview",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      },
      {
        title: "Threat Map",
        desc: "Global attack visualization",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center",
      },
      {
        title: "Analytics Hub",
        desc: "Advanced security metrics",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      },
      {
        title: "Compliance Center",
        desc: "Regulatory monitoring",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center",
      },
      {
        title: "Incident Response",
        desc: "Emergency action protocols",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center",
      },
      {
        title: "Network Monitor",
        desc: "Infrastructure surveillance",
        image:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop&crop=center",
      },
      {
        title: "Alert System",
        desc: "Priority notification center",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
      },
      {
        title: "Command Console",
        desc: "Central control interface",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&h=600&fit=crop&crop=center",
      },
    ],
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
    sticky: true,
    stickyCards: [
      {
        title: "🔮 Quantum Security",
        subtitle: "Quantum-Grade Encryption",
        desc: "Unbreakable quantum encryption protocols that secure data at the subatomic level.",
      },
      {
        title: "🧪 Simulation Sandbox",
        subtitle: "Safe Testing Environment",
        desc: "Isolated simulation environments for testing attack vectors without risk.",
      },
      {
        title: "📋 Compliance Grid",
        subtitle: "Regulatory Compliance",
        desc: "Automated compliance monitoring across SOC2, ISO27001, and custom frameworks.",
      },
      {
        title: "🛂 Access Control Matrix",
        subtitle: "Identity & Access Management",
        desc: "Military-grade access controls with biometric authentication and zero-trust architecture.",
      },
    ],
    features: [
      "🔮 Quantum Security",
      "🧪 Simulation Sandbox",
      "📋 Compliance Grid",
      "🛂 Access Control Matrix",
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
  {
    title: "Choose Your Defense Level",
    subtitle: "Pricing Tiers",
    desc: "From indie builders to Fortune 500 enterprises. Every tier forged for the digital battlefield.",
    align: "center",
    fullScreenPricing: true,
    pricingTiers: [
      {
        name: "Pro",
        price: "$199",
        period: "/month",
        description: "For growing teams ready to scale their defenses",
        features: [
          "Unlimited vulnerability scans",
          "Core security modules",
          "Email support (24hr response)",
          "Standard SLA (99.9% uptime)",
          "Basic threat intelligence",
          "Weekly security reports",
          "API access (1000 calls/day)",
          "Standard integrations",
        ],
        cta: "Start Pro Defense",
        popular: false,
      },
      {
        name: "Elite",
        price: "$999",
        period: "/month",
        description:
          "For serious organizations demanding enterprise-grade protection",
        features: [
          "Everything in Pro",
          "All premium modules + integrations",
          "Priority support (4hr response)",
          "Enhanced SLA (99.95% uptime)",
          "Advanced threat intelligence",
          "Real-time security monitoring",
          "Unlimited API access",
          "Custom integrations",
          "Dedicated account manager",
          "Monthly strategy sessions",
        ],
        cta: "Deploy Elite Arsenal",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For Fortune 500 companies and critical infrastructure",
        features: [
          "Everything in Elite",
          "Custom security modules",
          "White-label solutions",
          "24/7 dedicated support team",
          "Custom SLAs & compliance",
          "On-premise deployment options",
          "Advanced analytics & reporting",
          "Security team training",
          "Incident response team",
          "Compliance certifications",
          "Custom threat modeling",
          "Executive security briefings",
        ],
        cta: "Contact War Room",
        popular: false,
      },
    ],
  },
];

export default function ScrollUIOverlay() {
  const scroll = useScrollSync();

  // Find sticky sections and carousel sections
  const stickyIndices = sections
    .map((sec, i) => (sec.sticky ? i : -1))
    .filter((i) => i >= 0);
  const carouselIndex = sections.findIndex((sec) => sec.carousel);
  const totalSections = sections.length;
  const totalStickySubSections = stickyIndices.reduce(
    (sum, index) => sum + (sections[index]?.stickyCards?.length || 0),
    0,
  );
  const carouselSubSections =
    sections[carouselIndex]?.carouselImages?.length || 0;

  // Adjust scroll calculation for multiple sticky sections and carousel
  let active;
  let activeStickyCard = -1;
  let currentSticky = -1;
  let carouselProgress = 0;
  let activeCarouselImage = -1;
  const scrollPosition =
    scroll * (totalSections + totalStickySubSections + carouselSubSections - 1);

  // Check each section sequentially
  let adjustedScrollPos = scrollPosition;

  for (let i = 0; i < totalSections; i++) {
    const section = sections[i];
    const stickySubSections = section.stickyCards?.length || 0;
    const carouselSubSections = section.carouselImages?.length || 0;

    if (
      section.sticky &&
      adjustedScrollPos >= i &&
      adjustedScrollPos <= i + stickySubSections
    ) {
      // We're in this sticky section
      active = i;
      currentSticky = i;
      const stickyProgress = (adjustedScrollPos - i) / stickySubSections;
      activeStickyCard =
        stickyProgress > 0
          ? Math.floor(stickyProgress * stickySubSections)
          : -1;
      break;
    } else if (
      section.carousel &&
      adjustedScrollPos >= i &&
      adjustedScrollPos <= i + carouselSubSections
    ) {
      // We're in the carousel section
      active = i;
      carouselProgress = (adjustedScrollPos - i) / carouselSubSections;
      activeCarouselImage = Math.floor(carouselProgress * carouselSubSections);
      break;
    } else if (section.sticky && adjustedScrollPos > i + stickySubSections) {
      // Passed this sticky section, adjust scroll position
      adjustedScrollPos -= stickySubSections;
    } else if (
      section.carousel &&
      adjustedScrollPos > i + carouselSubSections
    ) {
      // Passed carousel section, adjust scroll position
      adjustedScrollPos -= carouselSubSections;
    } else if (!section.sticky && !section.carousel) {
      // Regular section
      if (adjustedScrollPos >= i && adjustedScrollPos < i + 1) {
        active = i;
        break;
      }
    }
  }

  // If no section matched, use fallback
  if (active === undefined) {
    active = Math.min(Math.floor(adjustedScrollPos), totalSections - 1);
  }

  // Ensure we can reach the final section (pricing)
  if (scroll > 0.95) {
    active = totalSections - 1;
  }

  // Debug logging (remove in production)
  if (typeof window !== "undefined") {
    console.log("Scroll debug:", {
      scroll: scroll.toFixed(3),
      active,
      totalSections,
      scrollPosition: scrollPosition.toFixed(2),
      lastSectionIndex: totalSections - 1,
    });
  }

  return (
    <div className="pointer-events-none fixed inset-0 flex flex-col items-center justify-center z-10">
      {sections.map((sec, i) => {
        const isActive = active === i;
        const isStickySection = sec.sticky && isActive;
        const isCarouselSection = sec.carousel && isActive;

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

              {/* Sticky Cards for any sticky section */}
              {isStickySection &&
                sec.stickyCards &&
                activeStickyCard >= 0 &&
                currentSticky === i && (
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

              {/* Carousel Images for Enterprise Command */}
              {isCarouselSection && sec.carouselImages && (
                <div className="mb-6 relative overflow-hidden rounded-xl">
                  <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{
                      transform: `translateX(-${activeCarouselImage * 100}%)`,
                      width: `${sec.carouselImages.length * 100}%`,
                    }}
                  >
                    {sec.carouselImages.map((image, idx) => (
                      <div
                        key={idx}
                        className="relative min-w-full h-96 group"
                        style={{ width: `${100 / sec.carouselImages.length}%` }}
                      >
                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-xl font-command font-bold text-cyan-400 mb-1">
                              {image.title}
                            </h4>
                            <p className="text-sm text-gray-300">
                              {image.desc}
                            </p>
                          </div>
                        </div>
                        {/* Cyber glow effect */}
                        <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-300 rounded-lg"></div>
                      </div>
                    ))}
                  </div>

                  {/* Progress indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {sec.carouselImages.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === activeCarouselImage
                            ? "bg-cyan-400 scale-125"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
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

              {/* Full-Screen Pricing Tiers */}
              {sec.fullScreenPricing && sec.pricingTiers && (
                <div className="w-screen h-screen flex items-center justify-center -ml-8 -mt-8">
                  <div className="max-w-7xl w-full px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[80vh]">
                      {sec.pricingTiers.map((tier, idx) => (
                        <div
                          key={idx}
                          className={`relative flex flex-col h-full rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                            tier.popular
                              ? "bg-gradient-to-b from-cyan-400/20 to-war-room-void ring-2 ring-cyan-400 shadow-2xl shadow-cyan-400/20"
                              : "bg-gradient-to-b from-war-room-charcoal/80 to-war-room-void border border-gray-600 hover:border-cyan-400/50"
                          }`}
                        >
                          {tier.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-6 py-2 rounded-full text-sm font-terminal font-bold">
                                MOST POPULAR
                              </span>
                            </div>
                          )}

                          {/* Header */}
                          <div className="text-center mb-6">
                            <h3 className="text-4xl font-command font-bold text-white mb-2">
                              {tier.name}
                            </h3>
                            <div className="flex items-baseline justify-center mb-3">
                              <span className="text-5xl font-command text-cyan-400">
                                {tier.price}
                              </span>
                              {tier.period && (
                                <span className="text-xl text-gray-400 ml-1">
                                  {tier.period}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-300 text-sm italic">
                              {tier.description}
                            </p>
                          </div>

                          {/* Features */}
                          <div className="flex-1 mb-6">
                            <h4 className="text-lg font-terminal text-cyan-400 mb-4 uppercase tracking-wide border-b border-cyan-400/30 pb-2">
                              What You Get
                            </h4>
                            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                              {tier.features.map((feature, i) => (
                                <div
                                  key={i}
                                  className="flex items-start text-sm text-gray-300"
                                >
                                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <button
                            className={`
                            w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 font-command
                            ${
                              tier.popular
                                ? "bg-cyan-400 text-black hover:bg-cyan-300 shadow-lg shadow-cyan-400/30"
                                : "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/30"
                            }
                          `}
                          >
                            {tier.cta}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Regular Pricing (legacy) */}
              {sec.pricing && !sec.fullScreenPricing && (
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
