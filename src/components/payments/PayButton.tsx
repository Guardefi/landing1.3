"use client";

import { useState } from "react";
import { MetalButton } from "@/components/ui/liquid-glass-button";
import { getStripe } from "@/lib/stripe";
import { Shield, Loader2 } from "lucide-react";

interface PayButtonProps {
  priceId: string;
  mode?: "payment" | "subscription";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function PayButton({
  priceId,
  mode = "payment",
  children,
  className,
  disabled = false,
}: PayButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (loading || disabled) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/payments/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, mode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Payment failed");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError(err instanceof Error ? err.message : "Payment failed");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <MetalButton
        variant="cyber"
        onClick={handleCheckout}
        disabled={loading || disabled}
        className={className}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="font-command">CONNECTING...</span>
          </>
        ) : (
          <>
            <Shield className="w-4 h-4" />
            <span className="font-command">{children || "ENGAGE SHIELDS"}</span>
          </>
        )}
      </MetalButton>

      {error && (
        <div className="text-red-400 text-sm font-terminal bg-war-room-abyss/50 px-3 py-1 rounded border border-red-500/30">
          ERROR: {error}
        </div>
      )}
    </div>
  );
}
