"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EnhancedCardProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactNode;
  primaryImage?: string;
  secondaryImage?: string;
  badge?: string;
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  size?: "small" | "medium" | "large";
  variant?: "glass" | "solid" | "minimal";
}

export function EnhancedCard({
  title,
  description,
  icon,
  primaryImage,
  secondaryImage,
  badge,
  className,
  children,
  delay = 0,
  size = "medium",
  variant = "glass",
}: EnhancedCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    },
  };

  const sizeClasses = {
    small: "p-4 min-h-[200px]",
    medium: "p-6 min-h-[280px]",
    large: "p-8 min-h-[400px]",
  };

  const variantClasses = {
    glass:
      "bg-cyber-cyan-dim/10 backdrop-blur-[15px] backdrop-brightness-[100%] border border-cyber-cyan-dim/30",
    solid:
      "bg-gradient-to-br from-war-room-charcoal/80 to-war-room-steel/60 border border-cyber-cyan-dim/40",
    minimal: "bg-war-room-charcoal/20 border border-cyber-cyan-dim/20",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "relative rounded-[24px] overflow-hidden group hover:scale-[1.02] transition-all duration-500",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {/* Decorative Background Element (inspired by SectionWithMockup) */}
      {secondaryImage && (
        <motion.div
          className="absolute w-full h-full bg-war-room-charcoal rounded-[24px] z-0 opacity-30"
          style={{
            top: "10%",
            left: "-10%",
            transform: "scale(0.9)",
            filter: "blur(2px)",
          }}
          initial={{ y: 0 }}
          whileInView={{ y: -20 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div
            className="relative w-full h-full bg-cover bg-center rounded-[24px]"
            style={{
              backgroundImage: `url(${secondaryImage})`,
            }}
          />
        </motion.div>
      )}

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 h-full flex flex-col"
        initial={{ y: 0 }}
        whileInView={{ y: primaryImage ? 10 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-gradient-to-r from-cyber-cyan-base to-cyber-cyan-bright text-black text-xs font-terminal font-bold rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Primary Image */}
        {primaryImage && (
          <div className="relative mb-6 rounded-[20px] overflow-hidden h-48 bg-gradient-to-br from-cyber-cyan-dim/20 to-transparent">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${primaryImage})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        )}

        {/* Icon */}
        {icon && !primaryImage && (
          <div className="mb-4">
            {typeof icon === "function" ? (
              React.createElement(
                icon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
                {
                  className: "text-cyber-cyan-bright size-8",
                  strokeWidth: 1.5,
                },
              )
            ) : (
              <div className="text-4xl">{icon}</div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-cyber-cyan-bright font-command font-semibold mb-3 text-lg md:text-xl leading-tight">
            {title}
          </h3>

          {description && (
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 flex-1">
              {description}
            </p>
          )}

          {children}
        </div>

        {/* Cyber Glow Effect on Hover */}
        <div className="absolute inset-0 border-2 border-cyber-cyan-bright/0 group-hover:border-cyber-cyan-bright/30 transition-all duration-500 rounded-[24px] pointer-events-none" />

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-[24px] pointer-events-none">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan-bright to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line transition-opacity duration-300" />
        </div>
      </motion.div>

      {/* Decorative bottom gradient (from SectionWithMockup) */}
      <div
        className="absolute w-full h-px bottom-0 left-0 z-0 opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0,255,255,0.24) 0%, rgba(0,255,255,0) 100%)",
        }}
      />
    </motion.div>
  );
}

// Feature-specific enhanced card for compatibility with existing FeatureCard usage
interface EnhancedFeatureCardProps {
  feature: {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
  };
  className?: string;
  delay?: number;
}

export function EnhancedFeatureCard({
  feature,
  className,
  delay = 0,
}: EnhancedFeatureCardProps) {
  return (
    <EnhancedCard
      title={feature.title}
      description={feature.description}
      icon={feature.icon}
      delay={delay}
      size="medium"
      variant="glass"
      className={className}
    />
  );
}
