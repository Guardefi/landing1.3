"use client";

import { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { MetalButton } from "@/components/ui/liquid-glass-button";
import { Shield, Loader2, AlertTriangle } from "lucide-react";

interface CheckoutFormProps {
  amount: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  className?: string;
}

export default function CheckoutForm({
  amount,
  onSuccess,
  onError,
  className,
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Create payment intent when component mounts
    const createPaymentIntent = async () => {
      try {
        const response = await fetch("/api/payments/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to create payment intent");
        }

        setClientSecret(data.clientSecret);
        setIsReady(true);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to initialize payment";
        setError(errorMessage);
        onError?.(errorMessage);
      }
    };

    if (amount > 0) {
      createPaymentIntent();
    }
  }, [amount, onError]);

  const handleSubmit = async () => {
    if (!stripe || !elements || loading) return;

    setLoading(true);
    setError(null);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        throw new Error(submitError.message);
      }

      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
        },
        redirect: "if_required",
      });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      onSuccess?.();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Payment failed";
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!isReady) {
    return (
      <div
        className={`flex flex-col items-center gap-4 p-6 bg-war-room-abyss/50 rounded-lg border border-cyber-cyan-dim/30 ${className}`}
      >
        <div className="flex items-center gap-2 text-cyber-cyan-bright">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="font-terminal">INITIALIZING PAYMENT MATRIX...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-6 p-6 bg-war-room-abyss/50 rounded-lg border border-cyber-cyan-dim/30 ${className}`}
    >
      <div className="flex items-center gap-2 text-cyber-cyan-bright font-command">
        <Shield className="w-5 h-5" />
        <span>SECURE PAYMENT PROTOCOL</span>
      </div>

      <div className="space-y-4">
        <PaymentElement
          options={{
            layout: "tabs",
            appearance: {
              theme: "night",
              variables: {
                colorPrimary: "#008b8b",
                colorBackground: "#1a1a1a",
                colorText: "#00d4d4",
                fontFamily: "Share Tech Mono, monospace",
                borderRadius: "8px",
              },
            },
          }}
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-400 bg-red-900/20 px-4 py-2 rounded border border-red-500/30">
          <AlertTriangle className="w-4 h-4" />
          <span className="font-terminal text-sm">{error}</span>
        </div>
      )}

      <MetalButton
        variant="cyber"
        onClick={handleSubmit}
        disabled={loading || !stripe || !elements}
        className="w-full"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="font-command">PROCESSING...</span>
          </>
        ) : (
          <>
            <Shield className="w-4 h-4" />
            <span className="font-command">ENGAGE SHIELDS</span>
          </>
        )}
      </MetalButton>

      <div className="text-center text-cyber-cyan-dim font-terminal text-xs">
        SECURED BY SCORPIUS DEFENSE PROTOCOLS
      </div>
    </div>
  );
}
