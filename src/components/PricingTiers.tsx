"use client";
import { motion, useReducedMotion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import { FeatureCard } from "./ui/grid-feature-cards";
import { Zap, Crown, Building2 } from "lucide-react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const TIERS = [
  {
    id: "price_pro",
    title: "Pro Defense",
    icon: Zap,
    price: "$199",
    interval: "mo",
    description:
      "Unlimited scans • Core modules access • Basic support • Standard SLA (99.9%)",
    features: [
      "Unlimited scans",
      "Core modules access",
      "Basic support",
      "Standard SLA (99.9%)",
    ],
    cta: "Subscribe",
    popular: false,
  },
  {
    id: "price_elite",
    title: "Elite Arsenal",
    icon: Crown,
    price: "$999",
    interval: "mo",
    description:
      "Unlimited scans • All modules + integrations • Priority support • Enhanced SLA (99.95%)",
    features: [
      "Unlimited scans",
      "All modules + integrations",
      "Priority support",
      "Enhanced SLA (99.95%)",
    ],
    cta: "Subscribe",
    popular: true,
  },
  {
    id: "contact_us",
    title: "Enterprise Command",
    icon: Building2,
    price: "Contact Us",
    interval: "",
    description:
      "Custom integrations • Dedicated account manager • 24/7 support • Custom SLAs & compliance",
    features: [
      "Custom integrations",
      "Dedicated account manager",
      "24/7 support",
      "Custom SLAs & compliance",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingTiers() {
  const handleCheckout = async (priceId: string) => {
    if (priceId === "contact_us") {
      // Redirect to contact form or modal
      window.location.href = "/contact";
      return;
    }
    const stripe = await stripePromise;
    if (!stripe) return;
    await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      successUrl: window.location.href,
      cancelUrl: window.location.href,
    });
  };

  return (
    <section
      id="pricing"
      className="py-16 md:py-32 relative bg-gradient-to-b from-war-room-abyss to-war-room-void"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {TIERS.map((tier, i) => (
            <div key={tier.id} className="relative">
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-cyber-cyan-bright to-cyber-cyan-intense text-black px-4 py-1 rounded-full text-xs font-terminal font-bold uppercase">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <FeatureCard
                feature={tier}
                className={`bg-gradient-to-br from-war-room-charcoal/60 to-war-room-steel/30 border transition-all duration-300 h-full flex flex-col ${
                  tier.popular
                    ? "border-cyber-cyan-bright/60 hover:border-cyber-cyan-intense/80 ring-1 ring-cyber-cyan-bright/30"
                    : "border-cyber-cyan-dim/40 hover:border-cyber-cyan-base/60"
                }`}
              />

              {/* Price overlay */}
              <div className="absolute top-6 right-6 text-right">
                <div className="text-lg font-command text-cyber-cyan-bright">
                  {tier.price}
                  {tier.interval && (
                    <span className="text-sm text-cyber-cyan-base/60">
                      /{tier.interval}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA Button overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <button
                  onClick={() => handleCheckout(tier.id)}
                  className={`w-full py-3 rounded-lg font-bold text-sm transition-all duration-300 font-command ${
                    tier.popular
                      ? "bg-cyber-cyan-bright text-black hover:bg-cyber-cyan-intense shadow-lg shadow-cyber-cyan-bright/30"
                      : "bg-transparent border border-cyber-cyan-base text-cyber-cyan-base hover:bg-cyber-cyan-base hover:text-black hover:shadow-lg hover:shadow-cyber-cyan-base/30"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </AnimatedContainer>
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
