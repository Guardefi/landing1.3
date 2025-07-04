"use client";

import { Elements } from "@stripe/react-stripe-js";
import { getStripe } from "@/lib/stripe";
import { ReactNode } from "react";

const stripePromise = getStripe();

const appearance = {
  theme: "night" as const,
  variables: {
    colorPrimary: "#008b8b",
    colorBackground: "#0a0a0a",
    colorText: "#00d4d4",
    colorDanger: "#ff4444",
    colorSuccess: "#00ff99",
    fontFamily: "Share Tech Mono, Orbitron, monospace",
    spacingUnit: "8px",
    borderRadius: "12px",
    colorTextSecondary: "#00d4d4",
    colorTextPlaceholder: "#4a4a4a",
  },
  rules: {
    ".Input": {
      boxShadow: "0 0 4px rgba(0,255,153,0.4)",
      backgroundColor: "#1a1a1a",
      border: "1px solid #008b8b",
      color: "#00d4d4",
    },
    ".Input:focus": {
      boxShadow: "0 0 8px rgba(0,255,255,0.6)",
      borderColor: "#00ffff",
    },
    ".Tab": {
      backgroundColor: "#2a2a2a",
      border: "1px solid #008b8b",
      color: "#00d4d4",
    },
    ".Tab:hover": {
      backgroundColor: "#3a3a3a",
      color: "#00ffff",
      boxShadow: "0 0 6px rgba(0,255,255,0.3)",
    },
    ".Tab--selected": {
      backgroundColor: "#008b8b",
      color: "#0a0a0a",
      boxShadow: "0 0 8px rgba(0,255,255,0.4)",
    },
    ".Label": {
      color: "#00d4d4",
      fontFamily: "Share Tech Mono, monospace",
      textTransform: "uppercase",
      fontSize: "12px",
      letterSpacing: "1px",
    },
    ".Error": {
      color: "#ff4444",
      fontFamily: "Share Tech Mono, monospace",
    },
  },
};

interface StripeProviderProps {
  children: ReactNode;
  clientSecret?: string;
}

export default function StripeProvider({
  children,
  clientSecret,
}: StripeProviderProps) {
  const options = {
    appearance,
    ...(clientSecret && { clientSecret }),
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}
