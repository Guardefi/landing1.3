"use client";
import { Zap, Cpu, Shield, Target, Satellite, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { EnhancedFeatureCard } from "@/components/ui/enhanced-card";

const features = [
  {
    title: "Lightning Fast",
    icon: Zap,
    description:
      "Advanced quantum processors deliver unmatched computational speed for real-time tactical analysis.",
  },
  {
    title: "Neural Core",
    icon: Cpu,
    description:
      "State-of-the-art AI systems process battlefield data with military-grade precision.",
  },
  {
    title: "Fortress Protocol",
    icon: Shield,
    description:
      "Multi-layered security systems protect critical war room operations from all threats.",
  },
  {
    title: "Target Lock",
    icon: Target,
    description:
      "Precision targeting systems ensure accurate deployment of strategic resources.",
  },
  {
    title: "Deep Space Comms",
    icon: Satellite,
    description:
      "Quantum entanglement communications maintain connectivity across vast distances.",
  },
  {
    title: "AI Enhanced",
    icon: Sparkles,
    description:
      "Machine learning algorithms continuously optimize tactical decision-making processes.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-8 md:py-16 relative mt-8 md:mt-12">
      {/* Background effects - removed solid backgrounds for 3D sphere visibility */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.02),transparent_70%)]" />

      <div className="mx-auto w-full max-w-5xl space-y-8 px-4 relative z-10">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold font-command text-cyber-cyan-bright">
            TACTICAL SUPREMACY
          </h2>
          <p className="text-cyber-cyan-base/80 mt-4 text-sm tracking-wide text-balance md:text-base font-terminal">
            Advanced systems engineered for strategic dominance in the digital
            battlefield.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, i) => (
            <EnhancedFeatureCard
              key={i}
              feature={feature}
              delay={i * 0.1}
              className="hover:shadow-xl hover:shadow-cyber-cyan-bright/20"
            />
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
