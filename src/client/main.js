// Application entry point
import { initPaymentClient } from './payment.js';
import { setupUI } from './ui.js';

async function main() {
  // Client initialized with secret key from process.env
  const client = initPaymentClient();
  await setupUI(client);
  console.log('Payment portal ready');
}

main().catch(console.error);
