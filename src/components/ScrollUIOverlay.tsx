"use client";
import AnimatedSection from "./AnimatedSection";
import { useScrollSync } from "./useScrollSync";
import SectionWithMockup from "./ui/section-with-mockup";
import { GlowCard } from "./ui/spotlight-card";
import {
  Activity,
  Code,
  Bot,
  Radio,
  Shield,
  TestTube,
  ClipboardCheck,
  KeyRound,
} from "lucide-react";

const sections = [
  {
    title: "Hello Dark Forest,",
    subtitle: "Meet Scorpius.",
    desc: "A new guardian awakens in the digital cosmos.",
    align: "center",
    heroSection: true,
    image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
  },
  {
    title: "Real-Time Quantum Threat Detection",
    subtitle: "Advanced AI-Powered Detection Systems",
    desc: "Real-time quantum threat detection represents the cutting edge of cybersecurity, combining artificial intelligence with quantum-aware algorithms to identify and neutralize emerging threats before they can execute.",
    align: "left",
    mockupSection: true,
    mockupData: {
      title: (
        <>
          Quantum Threat
          <br />
          Detection Systems
        </>
      ),
      description: (
        <>
          Advanced AI-powered detection combining artificial intelligence
          <br />
          with quantum-aware algorithms to identify and neutralize
          <br />
          emerging threats before they execute. Real-time response
          <br />
          within milliseconds for maximum security.
        </>
      ),
      primaryImageSrc:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      secondaryImageSrc:
        "https://images.unsplash.com/photo-1557838794-17df5f6b83b5?w=800&h=600&fit=crop",
      reverseLayout: false,
    },
    image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
  },
  {
    title: "Blockchain Security Monitoring",
    subtitle: "Multi-Protocol Defense Architecture",
    desc: "Sophisticated mempool monitoring and blockchain analysis providing enhanced network security through real-time transaction analysis and pattern recognition.",
    align: "right",
    mockupSection: true,
    mockupData: {
      title: (
        <>
          Blockchain Security
          <br />& Monitoring
        </>
      ),
      description: (
        <>
          Sophisticated mempool monitoring systems providing enhanced
          <br />
          network security through real-time transaction analysis.
          <br />
          Identifies attacks through pattern recognition and
          <br />
          coordinated manipulation detection.
        </>
      ),
      primaryImageSrc:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      secondaryImageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      reverseLayout: true,
    },
    image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
  },
  {
    title: "Enterprise Command Center",
    subtitle: "Total Control & Infinite Insight",
    desc: "Executive dashboards, compliance monitoring, and instant incident response. Complete operational oversight with real-time analytics and threat intelligence.",
    align: "left",
    mockupSection: true,
    mockupData: {
      title: (
        <>
          Enterprise Command
          <br />& Control Center
        </>
      ),
      description: (
        <>
          Executive dashboards providing total operational oversight
          <br />
          with real-time analytics, compliance monitoring, and
          <br />
          instant incident response capabilities. Complete
          <br />
          situational awareness for security teams.
        </>
      ),
      primaryImageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      secondaryImageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      reverseLayout: false,
    },
    image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
  },
  {
    title: "Choose Your Defense Level",
    subtitle: "Pricing Tiers",
    desc: "From indie builders to Fortune 500 enterprises. Every tier forged for the digital battlefield.",
    align: "center",
    fullScreenPricing: true,
    image: "https://images.pexels.com/photos/3582392/pexels-photo-3582392.jpeg",
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
  const ctaIndices = sections
    .map((sec, i) => (sec.cta ? i : -1))
    .filter((i) => i >= 0);
  const totalSections = sections.length;
  const totalStickySubSections = stickyIndices.reduce(
    (sum, index) => sum + (sections[index]?.stickyCards?.length || 0),
    0,
  );
  const carouselSubSections =
    sections[carouselIndex]?.carouselImages?.length || 0;
  const totalCtaExtraSpace = ctaIndices.length * 0.5; // Extra space for CTA sections

  // Adjust scroll calculation for multiple sticky sections and carousel
  let active;
  let activeStickyCard = -1;
  let currentSticky = -1;
  let carouselProgress = 0;
  let activeCarouselImage = -1;
  const scrollPosition =
    scroll *
    (totalSections +
      totalStickySubSections +
      carouselSubSections +
      totalCtaExtraSpace -
      1);

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
    } else if (section.cta) {
      // CTA section - give it extra visibility space
      if (adjustedScrollPos >= i && adjustedScrollPos < i + 1.5) {
        active = i;
        break;
      } else if (adjustedScrollPos >= i + 1.5) {
        // Passed CTA section, adjust for its extra space
        adjustedScrollPos -= 0.5;
      }
    } else if (
      !section.sticky &&
      !section.carousel &&
      !section.cyberpunkSlider &&
      !section.quantumStickyScroll &&
      !section.mockupSection &&
      !section.cta
    ) {
      // Regular section
      if (adjustedScrollPos >= i && adjustedScrollPos < i + 1) {
        active = i;
        break;
      }
    } else if (section.mockupSection) {
      // Mockup section
      if (adjustedScrollPos >= i && adjustedScrollPos < i + 1) {
        active = i;
        break;
      }
    } else if (section.cyberpunkSlider) {
      // Cyberpunk slider section
      if (adjustedScrollPos >= i && adjustedScrollPos < i + 1) {
        active = i;
        break;
      }
    } else if (section.quantumStickyScroll) {
      // Quantum sticky scroll section
      if (adjustedScrollPos >= i && adjustedScrollPos < i + 1) {
        active = i;
        break;
      }
    } else {
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

  // Ensure we can reach the final section (pricing) - only when very close to end
  if (scroll > 0.95) {
    active = totalSections - 1; // Force show pricing section only when at the very end
  }

  // Debug removed

  // Temporary debug
  const currentSection = sections[active];

  return (
    <>
      {/* Debug indicator */}
      <div className="fixed top-4 right-4 z-[9999] bg-black/80 text-cyber-cyan-bright p-2 rounded text-xs font-mono">
        Active: {active} | {currentSection?.title} | Mockup:{" "}
        {currentSection?.mockupSection ? "YES" : "NO"}
      </div>

      {/* Background Image that flips with each section - with tunnel vision effects */}
      <div className="fixed inset-0 z-[5] pointer-events-none perspective-[1000px] overflow-hidden">
        {sections.map((sec, i) => {
          if (!sec.image) return null;
          const isActive = active === i;
          const isNextSectionPricing = sections[i + 1]?.fullScreenPricing;
          const isPricingSection = sec.fullScreenPricing;

          // Calculate transition opacity for CTA -> Pricing fade
          let finalOpacity = isActive ? 0.3 : 0;
          if (sec.cta && isActive && adjustedScrollPos > i + 1) {
            // Fade out CTA background as we approach pricing
            const fadeProgress = Math.min((adjustedScrollPos - i - 1) / 0.5, 1);
            finalOpacity = 0.3 * (1 - fadeProgress);
          }

          // Calculate tunnel vision effects based on scroll position
          const sectionProgress = adjustedScrollPos - i;
          const tunnelScale = isActive
            ? 1 + Math.sin(sectionProgress * Math.PI) * 0.1
            : 1;
          const tunnelBlur = isActive ? Math.abs(sectionProgress - 0.5) * 2 : 0;
          const depthZ = isActive
            ? Math.sin(sectionProgress * Math.PI) * 20
            : 0;

          return (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-1000 ease-in-out transform-gpu"
              style={{
                opacity: finalOpacity,
                transform: `scale(${tunnelScale}) translateZ(${depthZ}px)`,
                filter: `blur(${tunnelBlur}px)`,
              }}
            >
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-full object-cover transform-gpu"
                style={{
                  transform: `scale(${1 + tunnelScale * 0.1}) translateZ(${depthZ * 0.5}px)`,
                  filter: `brightness(${0.7 + Math.sin(sectionProgress * Math.PI) * 0.3})`,
                }}
              />
              {/* Enhanced overlay for different section types with depth effects */}
              <div
                className={`absolute inset-0 transition-all duration-1000 ${
                  false
                    ? "bg-black/80 backdrop-blur-[8px]"
                    : sec.cta
                      ? "bg-black/70 backdrop-blur-[2px]"
                      : isPricingSection
                        ? "bg-black/90 backdrop-blur-[4px]"
                        : "bg-black/60 backdrop-blur-[1px]"
                }`}
                style={{
                  background: `radial-gradient(circle at center, rgba(0,0,0,${isActive ? 0.4 + tunnelBlur * 0.1 : 0.6}) 0%, rgba(0,0,0,${isActive ? 0.8 + tunnelBlur * 0.1 : 0.9}) 100%)`,
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none fixed inset-0 flex flex-col items-center justify-start pt-16 md:pt-20 z-10 perspective-[1500px]">
        {sections.map((sec, i) => {
          const isActive = active === i;
          const isStickySection = sec.sticky && isActive;
          const isCarouselSection = sec.carousel && isActive;

          // Special rendering for hero section
          if (sec.heroSection && isActive) {
            return (
              <div
                key={i}
                className="fixed inset-0 flex flex-col justify-between items-center z-20 pointer-events-none"
              >
                {/* Top text group */}
                <div className="pt-16 space-y-4">
                  <div className="animate-fade-in-slow">
                    <h1 className="font-bold cyan-glow text-4xl md:text-6xl font-command text-center">
                      {sec.title}
                    </h1>
                  </div>
                  <div className="animate-fade-in-slower">
                    <h2 className="text-cyan-400 text-2xl md:text-4xl font-command text-center">
                      {sec.subtitle}
                    </h2>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="pb-16 animate-fade-in-slowest">
                  <p className="text-cyber-cyan-base/80 text-lg md:text-xl font-terminal text-center">
                    {sec.desc}
                  </p>
                </div>
              </div>
            );
          }

          // Special rendering for mockup sections
          if (sec.mockupSection && isActive && sec.mockupData) {
            return (
              <div key={i} className="fixed inset-0 z-[999] bg-transparent">
                <SectionWithMockup
                  title={sec.mockupData.title}
                  description={sec.mockupData.description}
                  primaryImageSrc={sec.mockupData.primaryImageSrc}
                  secondaryImageSrc={sec.mockupData.secondaryImageSrc}
                  reverseLayout={sec.mockupData.reverseLayout}
                />
              </div>
            );
          }

          return (
            <AnimatedSection
              key={i}
              active={isActive}
              align={sec.align as "left" | "center" | "right"}
            >
              <GlowCard
                customSize={true}
                glowColor="cyan"
                className={`max-w-3xl mx-auto p-8 rounded-xl backdrop-blur shadow-lg text-center
            bg-black/70 glass-morphism corner-accent transform-gpu
            ${sec.align === "left" ? "text-left ml-0 md:ml-16" : ""}
            ${sec.align === "right" ? "text-right mr-0 md:mr-16" : ""}
            ${sec.align === "center" ? "text-center mx-auto" : ""}
            ${sec.fullScreenPricing ? "hidden" : ""}
            ${sec.cyberpunkSlider ? "hidden" : ""}
            ${sec.quantumStickyScroll ? "hidden" : ""}
            ${sec.mockupSection ? "hidden" : ""}`}
                style={{
                  transform: isActive
                    ? `perspective(1000px) translateZ(${15 * Math.sin((adjustedScrollPos - i + 0.5) * Math.PI)}px) rotateX(${1.5 * Math.sin((adjustedScrollPos - i + 0.5) * Math.PI * 2)}deg) scale(${1 + 0.05 * Math.sin((adjustedScrollPos - i + 0.5) * Math.PI)})`
                    : "perspective(1000px) translateZ(0px) rotateX(0deg) scale(1)",
                  transition:
                    "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  filter: isActive
                    ? `blur(${Math.abs(adjustedScrollPos - i - 0.5) * 0.5}px)`
                    : "blur(0px)",
                }}
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

                {/* Sticky Cards for any sticky section - Grid Style */}
                {isStickySection &&
                  sec.stickyCards &&
                  activeStickyCard >= 0 &&
                  currentSticky === i && (
                    <div className="mb-6 max-w-md mx-auto">
                      <div
                        style={{
                          opacity:
                            activeStickyCard < sec.stickyCards.length ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                        }}
                      >
                        {activeStickyCard < sec.stickyCards.length && (
                          <FeatureCard
                            feature={sec.stickyCards[activeStickyCard]}
                            className="bg-gradient-to-br from-war-room-charcoal/60 to-war-room-steel/30 border border-cyber-cyan-dim/40 hover:border-cyber-cyan-base/60 transition-all duration-300"
                          />
                        )}
                      </div>
                    </div>
                  )}

                {/* Grid overview when no specific card is active */}
                {isStickySection && activeStickyCard < 0 && sec.stickyCards && (
                  <div className="mb-6 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-x-0 divide-y-0">
                      {sec.stickyCards.map((card, idx) => (
                        <FeatureCard
                          key={idx}
                          feature={card}
                          className="bg-gradient-to-br from-war-room-charcoal/40 to-war-room-steel/20 border border-cyber-cyan-dim/30 hover:border-cyber-cyan-base/50 transition-all duration-300"
                        />
                      ))}
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

                {/* Quantum Sticky Scroll */}
                {sec.quantumStickyScroll && isActive && (
                  <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-auto">
                    <div className="w-full h-full">
                      <QuantumStickyScroll />
                    </div>
                  </div>
                )}

                {/* Cyberpunk Image Slider for Enterprise Command */}
                {sec.cyberpunkSlider && isActive && (
                  <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
                    <div className="bg-red-500 text-white p-8 text-2xl">
                      CYBERPUNK SLIDER DETECTED - SECTION ACTIVE
                    </div>
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
                          style={{
                            width: `${100 / sec.carouselImages.length}%`,
                          }}
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
                  <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/50 backdrop-blur-sm pt-16">
                    <div className="max-w-6xl w-full px-4 mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                        {sec.pricingTiers.map((tier, idx) => (
                          <div
                            key={idx}
                            className={`relative flex flex-col w-full max-w-sm h-[70vh] rounded-2xl p-6 transition-all duration-500 hover:scale-105 mx-auto ${
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
                            <div className="text-center mb-4">
                              <h3 className="text-3xl font-command font-bold text-white mb-2">
                                {tier.name}
                              </h3>
                              <div className="flex items-baseline justify-center mb-2">
                                <span className="text-4xl font-command text-cyan-400">
                                  {tier.price}
                                </span>
                                {tier.period && (
                                  <span className="text-lg text-gray-400 ml-1">
                                    {tier.period}
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-300 text-xs italic">
                                {tier.description}
                              </p>
                            </div>

                            {/* Features */}
                            <div className="flex-1 mb-4">
                              <h4 className="text-sm font-terminal text-cyan-400 mb-3 uppercase tracking-wide border-b border-cyan-400/30 pb-1">
                                What You Get
                              </h4>
                              <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                                {tier.features.map((feature, i) => (
                                  <div
                                    key={i}
                                    className="flex items-start text-xs text-gray-300"
                                  >
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-1.5 flex-shrink-0 animate-pulse"></div>
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
              </GlowCard>
            </AnimatedSection>
          );
        })}
      </div>
    </>
  );
}
