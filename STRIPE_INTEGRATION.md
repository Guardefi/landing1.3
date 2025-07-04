# Scorpius War Room - Stripe Payment Integration

Complete Stripe payment integration with cyberpunk styling for the Scorpius War Room project.

## 🚀 Features

- **Checkout Sessions**: Redirect to Stripe-hosted checkout with custom branding
- **Embedded Payments**: Payment Element embedded directly in your app with custom styling
- **Cyberpunk Design**: Custom Stripe Appearance API configuration matching your theme
- **TypeScript**: Full type safety throughout the integration
- **Next.js 14**: App Router API routes for server-side Stripe operations
- **Error Handling**: Comprehensive error states and user feedback
- **Webhooks**: Production-ready webhook handling for payment events
- **Security**: Environment variables and signature verification

## 📁 File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── payments/
│   │   │   ├── create-checkout-session/route.ts
│   │   │   └── create-payment-intent/route.ts
│   │   └── webhooks/
│   │       └── stripe/route.ts
│   ├── success/page.tsx
│   ├── cancel/page.tsx
│   └── demo-payments/page.tsx
├── components/
│   └── payments/
│       ├── StripeProvider.tsx
│       ├── PayButton.tsx
│       └── CheckoutForm.tsx
├── lib/
│   └── stripe.ts
└── .env.local.example
```

## 🔧 Setup Instructions

### 1. Install Dependencies

The required Stripe packages are already installed:

- `@stripe/stripe-js` - Client-side Stripe library
- `stripe` - Server-side Stripe library

### 2. Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Price IDs for different tiers
NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID=price_basic_plan_id
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_pro_plan_id
NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID=price_enterprise_plan_id

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Webhook Secret (for production)
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### 3. Stripe Dashboard Setup

1. **Create Products and Prices**:
   - Go to Stripe Dashboard → Products
   - Create products for Basic, Pro, and Enterprise tiers
   - Note down the price IDs and add them to your environment variables

2. **Configure Branding**:
   - Dashboard → Settings → Branding
   - Upload Scorpius logo (512×512 PNG)
   - Set accent color: `#008b8b`
   - Set background: `#0a0a0a`

3. **Setup Webhooks** (for production):
   - Dashboard → Developers → Webhooks
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - Select events: `checkout.session.completed`, `payment_intent.succeeded`, etc.

## 🎨 Styling Customization

The integration includes custom Stripe Appearance API configuration:

```typescript
const appearance = {
  theme: "night",
  variables: {
    colorPrimary: "#008b8b", // cyber-cyan-base
    colorBackground: "#0a0a0a", // war-room-void
    colorText: "#00d4d4", // cyber-cyan-bright
    fontFamily: "Share Tech Mono, Orbitron, monospace",
    borderRadius: "12px",
  },
  rules: {
    ".Input": {
      boxShadow: "0 0 4px rgba(0,255,153,0.4)",
      backgroundColor: "#1a1a1a", // war-room-abyss
      border: "1px solid #008b8b",
    },
    ".Tab:hover": {
      color: "#00ffff", // cyber-cyan-intense
      boxShadow: "0 0 6px rgba(0,255,255,0.3)",
    },
  },
};
```

## 💡 Usage Examples

### Basic Payment Button

```tsx
import PayButton from "@/components/payments/PayButton";

<PayButton priceId="price_1234567890" mode="subscription">
  DEPLOY SHIELDS
</PayButton>;
```

### Embedded Checkout Form

```tsx
import StripeProvider from "@/components/payments/StripeProvider";
import CheckoutForm from "@/components/payments/CheckoutForm";

<StripeProvider>
  <CheckoutForm
    amount={6500} // $65.00 in cents
    onSuccess={() => console.log("Payment successful!")}
    onError={(error) => console.error("Payment failed:", error)}
  />
</StripeProvider>;
```

### Custom Integration

```tsx
import { getStripe } from "@/lib/stripe";

const handleCustomCheckout = async () => {
  const response = await fetch("/api/payments/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      priceId: "price_1234567890",
      mode: "payment",
    }),
  });

  const { url } = await response.json();
  window.location.href = url;
};
```

## 🔒 Security Best Practices

1. **Environment Variables**: Never expose secret keys to the client
2. **Webhook Verification**: Always verify webhook signatures
3. **Input Validation**: Validate all inputs on the server side
4. **HTTPS**: Use HTTPS in production for all Stripe communications
5. **Price Validation**: Always validate prices on the server side

## 🧪 Testing

1. **Demo Page**: Visit `/demo-payments` to test both payment methods
2. **Test Cards**: Use Stripe test cards for development
   - Success: `4242424242424242`
   - Decline: `4000000000000002`
3. **Webhooks**: Use Stripe CLI for local webhook testing

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## 🚀 Production Deployment

1. **Environment**: Update environment variables with production keys
2. **Webhooks**: Configure production webhook endpoints
3. **DNS**: Ensure proper SSL certificates for webhook security
4. **Monitoring**: Set up logging and monitoring for payment events

## 📊 Event Handling

The webhook handler processes these events:

- `checkout.session.completed` - Successful checkout
- `payment_intent.succeeded` - Payment completed
- `payment_intent.payment_failed` - Payment failed
- `invoice.payment_succeeded` - Subscription payment
- `customer.subscription.created` - New subscription
- `customer.subscription.deleted` - Cancelled subscription

## 🎯 Integration with Existing Components

The payment integration seamlessly integrates with:

- **PricingTiers**: Updated to use PayButton components
- **MetalButton**: Custom cyberpunk button styling
- **Design System**: Matches war-room and cyber-cyan color schemes
- **Typography**: Uses command and terminal fonts

## 🔧 Customization Options

- **Colors**: Modify appearance variables in `StripeProvider.tsx`
- **Fonts**: Update fontFamily in appearance configuration
- **Button Styles**: Customize MetalButton variants
- **Success/Cancel Pages**: Modify pages in `src/app/success` and `src/app/cancel`
- **API Routes**: Extend payment endpoints for additional functionality

## 📝 Notes

- This integration follows Stripe's latest API version (2024-12-18.acacia)
- All components are server-side rendered compatible
- TypeScript interfaces ensure type safety
- Error boundaries and loading states provide good UX
- Components are responsive and accessible

---

Built with ⚡ for the Scorpius War Room defense system.
