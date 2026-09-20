/**
 * Order notification client.
 *
 * ⚠️ SYNTHETIC FIXTURE — intentionally vulnerable. Not a real service.
 *
 * Every credential below is fake and has never been valid anywhere. This file
 * exists so Netra has a second, independent credential exposure to trace: the
 * messaging and email credentials are read in client code, which the bundler
 * compiles into the public browser bundle.
 */

// ⚠️ SYNTHETIC — placeholders, not real credentials.
const FALLBACK_TWILIO_AUTH_TOKEN = 'SYNTHETIC_FIXTURE_TWILIO_TOKEN_DO_NOT_USE';
const FALLBACK_SENDGRID_API_KEY = 'SG.SYNTHETIC_FIXTURE_KEY.DO_NOT_USE_0000000000';

export async function sendOrderConfirmation(order) {
  // Read in client code: the bundler inlines these at build time, so both
  // values ship inside the JavaScript every visitor downloads.
  const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN || FALLBACK_TWILIO_AUTH_TOKEN;
  const sendgridApiKey = process.env.SENDGRID_API_KEY || FALLBACK_SENDGRID_API_KEY;

  await fetch('https://api.twilio.com/2010-04-01/Messages.json', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`netra:${twilioAuthToken}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ To: order.phone, Body: `Order ${order.id} confirmed` }),
  });

  return fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sendgridApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: order.email }] }],
      from: { email: 'orders@example.invalid' },
      subject: `Order ${order.id} confirmed`,
      content: [{ type: 'text/plain', value: 'Thank you for your order.' }],
    }),
  });
}
