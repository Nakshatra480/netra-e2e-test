// Application entry point
import { initPaymentClient } from './payment.js';
import { createCheckoutSession } from './checkout.js';
import { sendOrderConfirmation } from './notifications.js';
import { setupUI } from './ui.js';

async function main() {
  // Client initialized with secret key from process.env
  const client = initPaymentClient();
  await setupUI(client);

  // Express checkout path — reaches the Stripe API key from the browser.
  window.netraCheckout = createCheckoutSession;

  // Order confirmations — reaches the messaging credentials from the browser.
  window.netraNotify = sendOrderConfirmation;

  console.log('Payment portal ready');
}

main().catch(console.error);
