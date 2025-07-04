"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FeatureCard } from "./ui/grid-feature-cards";
import { Zap, Crown, Building2 } from "lucide-react";
import PayButton from "./payments/PayButton";
import { STRIPE_PRICE_IDS } from "@/lib/stripe";

const TIERS = [
  {
    id: STRIPE_PRICE_IDS.PRO,
    title: "Pro Defense",
    icon: Zap,
    price: "$199",
    interval: "mo",
    description:
      "For growing teams ready to scale their tactical operations in the digital battlefield.",
    features: [
      "Unlimited vulnerability scans",
      "Core security modules access",
      "Email support (24hr response)",
      "Standard SLA (99.9% uptime)",
      "Basic threat intelligence",
      "Weekly security reports",
      "API access (1000 calls/day)",
      "Standard integrations",
      "Real-time alerts",
      "Basic compliance monitoring",
    ],
    cta: "Deploy Pro Defense",
    popular: false,
    mode: "subscription" as const,
  },
  {
    id: STRIPE_PRICE_IDS.ENTERPRISE,
    title: "Elite Arsenal",
    icon: Crown,
    price: "$999",
    interval: "mo",
    description:
      "For serious organizations demanding enterprise-grade protection and tactical superiority.",
    features: [
      "Everything in Pro Defense",
      "All premium modules + integrations",
      "Priority support (4hr response)",
      "Enhanced SLA (99.95% uptime)",
      "Advanced threat intelligence",
      "Real-time security monitoring",
      "Unlimited API access",
      "Custom integrations",
      "Dedicated account manager",
      "Monthly strategy sessions",
      "Advanced analytics dashboard",
      "SOC2 compliance assistance",
    ],
    cta: "Deploy Elite Arsenal",
    popular: true,
    mode: "subscription" as const,
  },
  {
    id: "contact_us",
    title: "Enterprise Command",
    icon: Building2,
    price: "Custom",
    interval: "",
    description:
      "For Fortune 500 companies and critical infrastructure requiring maximum tactical control.",
    features: [
      "Everything in Elite Arsenal",
      "Custom security modules",
      "White-label solutions",
      "24/7 dedicated support team",
      "Custom SLAs & compliance",
      "On-premise deployment options",
      "Advanced analytics & reporting",
      "Security team training programs",
      "Incident response team",
      "Compliance certifications",
      "Custom threat modeling",
      "Executive security briefings",
      "Penetration testing services",
      "Custom API development",
    ],
    cta: "Contact War Room",
    popular: false,
    mode: null,
  },
];

export default function PricingTiers() {
  const handleContactUs = () => {
    // For demo purposes, could link to a contact form
    window.open(
      "mailto:contact@scorpius.io?subject=Enterprise%20Command%20Inquiry",
      "_blank",
    );
  };

  return (
    <section
      id="pricing"
      className="pt-32 md:pt-48 pb-16 md:pb-32 relative bg-gradient-to-b from-war-room-abyss to-war-room-void"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_70%)]" />

      <div className="mx-auto w-full max-w-5xl space-y-8 px-4 relative z-10">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold font-command text-cyber-cyan-bright">
            TACTICAL PRICING
          </h2>
          <p className="text-cyber-cyan-base/80 mt-4 text-sm tracking-wide text-balance md:text-base font-terminal">
            Choose your defense level for the digital battlefield. Every tier
            engineered for tactical supremacy.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {TIERS.slice(0, 2).map((tier, i) => (
            <div key={tier.id} className="relative min-h-[700px]">
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-cyber-cyan-bright to-cyber-cyan-intense text-black px-4 py-1 rounded-full text-xs font-terminal font-bold uppercase">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div
                className={`h-full bg-gradient-to-br from-war-room-charcoal/60 to-war-room-steel/30 border transition-all duration-300 rounded-lg overflow-hidden relative ${
                  tier.popular
                    ? "border-cyber-cyan-bright/60 hover:border-cyber-cyan-intense/80 ring-1 ring-cyber-cyan-bright/30"
                    : "border-cyber-cyan-dim/40 hover:border-cyber-cyan-base/60"
                }`}
              >
                {/* Grid Pattern Background with gradient fade effect */}
                <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                  <div className="from-cyber-cyan-dim/20 to-cyber-cyan-dim/5 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
                    <svg
                      className="fill-cyber-cyan-dim/10 stroke-cyber-cyan-base/30 absolute inset-0 h-full w-full mix-blend-overlay"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id={`grid-${i}`}
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                          x="-12"
                          y="4"
                        >
                          <path d="M.5 20V.5H20" fill="none" />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        strokeWidth="0"
                        fill={`url(#grid-${i})`}
                      />
                      <svg x="-12" y="4" className="overflow-visible">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <rect
                            key={idx}
                            strokeWidth="0"
                            width="21"
                            height="21"
                            x={(Math.floor(Math.random() * 4) + 7) * 20}
                            y={(Math.floor(Math.random() * 6) + 1) * 20}
                          />
                        ))}
                      </svg>
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <tier.icon
                        className="text-cyber-cyan-bright size-8"
                        strokeWidth={1}
                        aria-hidden
                      />
                      <div className="text-right">
                        <div className="text-2xl font-command text-cyber-cyan-bright">
                          {tier.price}
                          {tier.interval && (
                            <span className="text-sm text-cyber-cyan-base/60">
                              /{tier.interval}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-command font-bold text-cyber-cyan-bright mb-3">
                      {tier.title}
                    </h3>

                    <p className="text-cyber-cyan-base/80 text-sm font-terminal leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 mb-6">
                    <h4 className="text-sm font-terminal text-cyber-cyan-bright mb-4 uppercase tracking-wide border-b border-cyber-cyan-bright/30 pb-2">
                      Tactical Capabilities
                    </h4>
                    <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                      {tier.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start text-xs text-cyber-cyan-base/90"
                        >
                          <div className="w-1.5 h-1.5 bg-cyber-cyan-bright rounded-full mr-3 mt-1.5 flex-shrink-0 animate-pulse"></div>
                          <span className="font-terminal">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  {tier.mode ? (
                    <PayButton
                      priceId={tier.id}
                      mode={tier.mode}
                      className="w-full"
                    >
                      {tier.cta}
                    </PayButton>
                  ) : (
                    <button
                      onClick={handleContactUs}
                      className="w-full py-4 rounded-lg font-bold text-sm transition-all duration-300 font-command bg-transparent border border-cyber-cyan-base text-cyber-cyan-base hover:bg-cyber-cyan-base hover:text-black hover:shadow-lg hover:shadow-cyber-cyan-base/30"
                    >
                      {tier.cta}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </AnimatedContainer>

        {/* Separate Enterprise Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan-bright/10 to-transparent h-px" />

          <AnimatedContainer delay={0.8} className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-command text-cyber-cyan-bright mb-2">
                ENTERPRISE COMMAND CENTER
              </h3>
              <p className="text-cyber-cyan-base/80 font-terminal text-sm">
                For Fortune 500 companies requiring maximum tactical control
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {TIERS.slice(2).map((tier, i) => (
                <div key={tier.id} className="relative">
                  <div className="h-full bg-gradient-to-br from-war-room-charcoal/80 to-war-room-steel/50 border-2 border-cyber-cyan-bright/60 transition-all duration-300 rounded-lg overflow-hidden relative shadow-2xl shadow-cyber-cyan-bright/20">
                    {/* Premium Badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-cyber-cyan-bright to-cyber-cyan-intense text-black px-6 py-2 rounded-full text-sm font-terminal font-bold uppercase tracking-wider">
                        ENTERPRISE ONLY
                      </span>
                    </div>

                    {/* Enhanced Grid Pattern */}
                    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                      <div className="from-cyber-cyan-bright/30 to-cyber-cyan-bright/10 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
                        <svg
                          className="fill-cyber-cyan-bright/20 stroke-cyber-cyan-bright/40 absolute inset-0 h-full w-full mix-blend-overlay"
                          aria-hidden="true"
                        >
                          <defs>
                            <pattern
                              id={`enterprise-grid-${i}`}
                              width="20"
                              height="20"
                              patternUnits="userSpaceOnUse"
                              x="-12"
                              y="4"
                            >
                              <path d="M.5 20V.5H20" fill="none" />
                            </pattern>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            strokeWidth="0"
                            fill={`url(#enterprise-grid-${i})`}
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <tier.icon
                            className="text-cyber-cyan-bright size-10"
                            strokeWidth={1}
                            aria-hidden
                          />
                          <div className="text-right">
                            <div className="text-3xl font-command text-cyber-cyan-bright">
                              {tier.price}
                              {tier.interval && (
                                <span className="text-sm text-cyber-cyan-base/60">
                                  /{tier.interval}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-command font-bold text-cyber-cyan-bright mb-4">
                          {tier.title}
                        </h3>

                        <p className="text-cyber-cyan-base/90 text-base font-terminal leading-relaxed">
                          {tier.description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="flex-1 mb-8">
                        <h4 className="text-base font-terminal text-cyber-cyan-bright mb-6 uppercase tracking-wide border-b border-cyber-cyan-bright/40 pb-3">
                          Enterprise Capabilities
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {tier.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start text-sm text-cyber-cyan-base/90"
                            >
                              <div className="w-2 h-2 bg-cyber-cyan-bright rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse"></div>
                              <span className="font-terminal">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      {tier.mode ? (
                        <PayButton
                          priceId={tier.id}
                          mode={tier.mode}
                          className="w-full"
                        >
                          {tier.cta}
                        </PayButton>
                      ) : (
                        <button
                          onClick={handleContactUs}
                          className="w-full py-4 rounded-lg font-bold text-base transition-all duration-300 font-command bg-cyber-cyan-bright text-black hover:bg-cyber-cyan-intense shadow-lg shadow-cyber-cyan-bright/40 hover:shadow-cyber-cyan-bright/60"
                        >
                          {tier.cta}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>["className"];
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
