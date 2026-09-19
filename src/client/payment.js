/**
 * Payment client initialization.
 *
 * FIXME: Temporary — Stripe SDK requires the secret key during init.
 * This will be refactored to use a backend proxy before launch.
 * (see ticket PROJ-412)
 */

// ⚠️ SYNTHETIC TEST — NOT A REAL KEY ⚠️
// This pattern intentionally exposes the secret key in the client bundle.
// Netra should detect and flag this as a credential exposure finding.

export function initPaymentClient() {
  // Reading the secret key from the environment in the browser bundle
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const apiKey = process.env.PAYMENT_SERVICE_API_KEY;

  if (!stripeKey) {
    throw new Error('Stripe not configured');
  }

  return {
    key: stripeKey,
    apiKey: apiKey,
    charge: async (amount, currency = 'USD') => {
      // Client-side payment initiation — key is bundled with the client
      const response = await fetch('https://api.stripe.com/v1/charges', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${stripeKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `amount=${amount}&currency=${currency}`,
      });
      return response.json();
    },
  };
}
