"use client";

import { useState } from "react";
import { Shield, CreditCard, Zap } from "lucide-react";
import PayButton from "@/components/payments/PayButton";
import CheckoutForm from "@/components/payments/CheckoutForm";
import StripeProvider from "@/components/payments/StripeProvider";
import { MetalButton } from "@/components/ui/liquid-glass-button";
import { STRIPE_PRICE_IDS } from "@/lib/stripe";

type DemoMode = "checkout" | "embedded" | null;

export default function PaymentsDemoPage() {
  const [demoMode, setDemoMode] = useState<DemoMode>(null);
  const [showEmbedded, setShowEmbedded] = useState(false);

  const handlePaymentSuccess = () => {
    alert("Payment successful! This is just a demo.");
    setShowEmbedded(false);
  };

  const handlePaymentError = (error: string) => {
    alert(`Payment error: ${error}`);
  };

  return (
    <div className="min-h-screen bg-war-room-void">
      {/* Header */}
      <div className="bg-war-room-abyss border-b border-cyber-cyan-dim/30">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-cyber-cyan-bright" />
            <h1 className="text-2xl font-command text-cyber-cyan-bright">
              PAYMENT INTEGRATION DEMO
            </h1>
          </div>
          <p className="mt-2 text-cyber-cyan-base font-terminal">
            Demonstration of Stripe payment integration with Scorpius cyberpunk
            styling
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Demo Controls */}
          <div className="space-y-8">
            <div className="bg-war-room-abyss/50 rounded-lg border border-cyber-cyan-dim/30 p-6">
              <h2 className="text-xl font-command text-cyber-cyan-bright mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                PAYMENT METHODS
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-command text-cyber-cyan-base">
                    1. Checkout Session (Redirect)
                  </h3>
                  <p className="text-sm text-cyber-cyan-dim font-terminal">
                    Redirects to Stripe-hosted checkout page with custom
                    branding
                  </p>
                  <PayButton
                    priceId={STRIPE_PRICE_IDS.BASIC}
                    mode="subscription"
                    className="w-full"
                  >
                    TRY CHECKOUT SESSION
                  </PayButton>
                </div>

                <div className="border-t border-cyber-cyan-dim/20 pt-4 space-y-2">
                  <h3 className="font-command text-cyber-cyan-base">
                    2. Embedded Payment Element
                  </h3>
                  <p className="text-sm text-cyber-cyan-dim font-terminal">
                    Embedded payment form with custom cyberpunk styling
                  </p>
                  <MetalButton
                    variant="cyber"
                    onClick={() => setShowEmbedded(!showEmbedded)}
                    className="w-full"
                  >
                    <Zap className="w-4 h-4" />
                    <span className="font-command">
                      {showEmbedded ? "HIDE" : "SHOW"} EMBEDDED FORM
                    </span>
                  </MetalButton>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-war-room-abyss/50 rounded-lg border border-cyber-cyan-dim/30 p-6">
              <h3 className="text-lg font-command text-cyber-cyan-bright mb-4">
                INTEGRATION FEATURES
              </h3>
              <div className="space-y-2">
                {[
                  "Custom cyberpunk styling with Stripe Appearance API",
                  "Next.js 14 App Router API routes",
                  "TypeScript with full type safety",
                  "Error handling and loading states",
                  "Responsive design with Tailwind CSS",
                  "Success and cancel page handling",
                  "Environment variable configuration",
                  "Production-ready security practices",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start text-sm">
                    <div className="w-1.5 h-1.5 bg-cyber-cyan-bright rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-cyber-cyan-base font-terminal">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Embedded Payment Form */}
          <div className="space-y-8">
            {showEmbedded ? (
              <StripeProvider>
                <div className="bg-war-room-abyss/50 rounded-lg border border-cyber-cyan-dim/30 p-1">
                  <CheckoutForm
                    amount={6500} // $65.00 in cents
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                    className="border-0 bg-transparent"
                  />
                </div>
              </StripeProvider>
            ) : (
              <div className="bg-war-room-abyss/50 rounded-lg border border-cyber-cyan-dim/30 p-12 text-center">
                <div className="text-cyber-cyan-dim font-terminal">
                  Click "SHOW EMBEDDED FORM" to see the payment element in
                  action
                </div>
              </div>
            )}

            {/* Code Preview */}
            <div className="bg-war-room-charcoal/50 rounded-lg border border-cyber-cyan-dim/30 p-4">
              <h3 className="text-sm font-command text-cyber-cyan-bright mb-3">
                IMPLEMENTATION PREVIEW
              </h3>
              <pre className="text-xs text-cyber-cyan-base font-terminal overflow-x-auto">
                {`// Basic usage
<PayButton 
  priceId="price_1234567890"
  mode="subscription"
>
  DEPLOY SHIELDS
</PayButton>

// Embedded checkout
<StripeProvider>
  <CheckoutForm 
    amount={6500}
    onSuccess={handleSuccess}
  />
</StripeProvider>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Environment Setup Instructions */}
        <div className="mt-12 bg-war-room-abyss/50 rounded-lg border border-cyber-cyan-dim/30 p-6">
          <h3 className="text-lg font-command text-cyber-cyan-bright mb-4">
            ENVIRONMENT CONFIGURATION
          </h3>
          <div className="bg-war-room-charcoal/50 rounded p-4 overflow-x-auto">
            <pre className="text-sm text-cyber-cyan-base font-terminal">
              {`# .env.local
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID=price_basic_plan_id
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_pro_plan_id
NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID=price_enterprise_plan_id
NEXT_PUBLIC_APP_URL=http://localhost:3000`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
