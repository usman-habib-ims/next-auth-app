import { verifyWebhook } from '@clerk/nextjs/webhooks'

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    console.log('Webhook payload:', evt.data)

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }


const { id } = evt.data;
const eventType = evt.type;
console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
console.log(`Webhook body:`, body);

if (eventType === "User created ") {
    console.log('User Created');
}

if (eventType === "User updated ") {
    console.log('User Updated');
}

return new Response("" , {status:200});
}