import { v4 as uuidv4 } from 'uuid';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { email, charge, quantity, _id } = req.body;

  let paymentId = uuidv4();

  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        customer_email: email,
        client_reference_id: _id,
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '',
            quantity,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/dashboard/billing?payment=success&id=${paymentId}`,
        cancel_url: `${req.headers.origin}/dashboard/billing?payment=canceled`,
        custom_text: {
          submit: {
            message: 'Welcome to the billing dashboars',
          },
        },
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
