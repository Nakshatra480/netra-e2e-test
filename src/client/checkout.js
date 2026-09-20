/**
 * Express checkout widget.
 *
 * ⚠️ SYNTHETIC FIXTURE — intentionally vulnerable. Not a real service.
 *
 * Every credential below is fake and has never been valid anywhere. This file
 * exists so Netra has a credential exposure to find: the Stripe key is read
 * into a module that the bundler compiles into the public browser bundle, so
 * the secret ships to every visitor.
 */

// ⚠️ SYNTHETIC — placeholder, not a real Stripe key.
const FALLBACK_STRIPE_API_KEY = 'sk_test_SYNTHETIC_FIXTURE_KEY_DO_NOT_USE_0000';

export function createCheckoutSession(cart) {
  // Read in client code: the bundler inlines this at build time, so the value
  // is visible in the shipped JavaScript.
  const stripeApiKey = process.env.STRIPE_API_KEY || FALLBACK_STRIPE_API_KEY;
  const webhookSigningKey = process.env.STRIPE_WEBHOOK_SIGNING_KEY;

  return fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${stripeApiKey}`,
      'Stripe-Signature': webhookSigningKey,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      mode: 'payment',
      'line_items[0][price]': cart.priceId,
      'line_items[0][quantity]': String(cart.quantity ?? 1),
    }),
  }).then((response) => response.json());
}
