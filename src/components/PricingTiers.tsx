"use client";
import { motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const TIERS = [
  {
    id: "price_pro", // replace with your Stripe Price ID
    name: "Pro",
    price: "$199",
    interval: "mo",
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
    id: "price_elite", // replace with your Stripe Price ID
    name: "Elite",
    price: "$999",
    interval: "mo",
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
    id: "contact_us", // no Stripe ID, triggers contact form
    name: "Enterprise",
    price: "Contact Us",
    interval: "",
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
    <section id="pricing" className="relative py-32 bg-war-room-abyss">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-5xl font-command font-bold cyan-glow mb-8">
          Pricing Tiers
        </h2>
        <p className="text-lg text-gray-300 mb-16">
          Choose your plan for scalable, enterprise-grade defense.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              whileHover={{ scale: 1.05 }}
              className={`relative flex flex-col justify-between rounded-xl bg-war-room-void/80 p-8 shadow-lg transition-shadow ${
                tier.popular ? "ring-2 ring-cyan-400" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-black px-6 py-2 rounded-full text-sm font-terminal font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-command font-bold text-white mb-4">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-command text-cyan-400">
                    {tier.price}
                  </span>
                  {tier.interval && (
                    <span className="text-gray-400">/{tier.interval}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleCheckout(tier.id)}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  tier.popular
                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                    : "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
