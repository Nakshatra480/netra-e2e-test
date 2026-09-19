// Server configuration
// All secrets loaded from environment variables (secure pattern)
export const config = {
  stripeKey: process.env.STRIPE_SECRET_KEY,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.PAYMENT_SERVICE_API_KEY,
};
