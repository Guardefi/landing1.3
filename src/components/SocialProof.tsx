"use client";
import { motion } from "framer-motion";
import { EnhancedCard } from "@/components/ui/enhanced-card";

const testimonials = [
  {
    quote:
      "ScorpiusCore detected a flash loan attack 3 seconds before execution. Saved us $2.3M.",
    author: "Marcus Chen",
    role: "CTO, DeFi Protocol",
    company: "AuroraSwap",
    avatar: "MC",
  },
  {
    quote:
      "The medieval aesthetic with Fortune 500 functionality is exactly what our board needed.",
    author: "Sarah Williams",
    role: "CISO",
    company: "TechFlow Industries",
    avatar: "SW",
  },
  {
    quote:
      "Finally, a security platform that doesn't look like it was built in 2015.",
    author: "Alex Rodriguez",
    role: "Security Lead",
    company: "CryptoVault",
    avatar: "AR",
  },
];

const trustedBy = [
  "Fortune 500 Companies",
  "Leading DeFi Protocols",
  "Major Crypto Exchanges",
  "Government Agencies",
  "Security Researchers",
];

export default function SocialProof() {
  return (
    <section className="relative py-16 px-8 z-20 bg-transparent mt-8 md:mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gray-400 text-sm mb-8 uppercase tracking-wide">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {trustedBy.map((entity, index) => (
              <motion.div
                key={entity}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 glass-morphism rounded-lg"
              >
                <span className="text-cyan-400 font-terminal text-sm">
                  {entity}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-command font-bold cyan-glow mb-6">
            Battle-Tested by Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <EnhancedCard
              key={index}
              title={testimonial.author}
              description={
                <>
                  <p className="text-gray-300 italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="text-cyan-400 text-sm">
                        {testimonial.role}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </>
              }
              delay={index * 0.2}
              size="medium"
              variant="glass"
              className="hover:shadow-xl hover:shadow-cyber-cyan-bright/20"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
