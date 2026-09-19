// Application entry point
import { initPaymentClient } from './payment.js';
import { setupUI } from './ui.js';

async function main() {
  const client = initPaymentClient();
  await setupUI(client);
}

main().catch(console.error);
