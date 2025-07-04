import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export const formatPrice = (amount: number, currency: string = "usd") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount / 100);
};

export const STRIPE_PRICE_IDS = {
  BASIC: process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID || "price_basic_dev",
  PRO: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || "price_pro_dev",
  ENTERPRISE:
    process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID ||
    "price_enterprise_dev",
} as const;
