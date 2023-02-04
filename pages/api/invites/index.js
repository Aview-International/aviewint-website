import Mailgun from 'mailgun-js';

export default async function handler(req, res) {
  const { subject, to, html } = req.body;
  const DOMAIN = 'mg.aviewint.com';
  const mg = Mailgun({
    apiKey: process.env.NEXT_PUBLIC_MAILGUN_KEY,
    domain: DOMAIN,
  });

  const data = {
    from: 'Julia from Aview <julia@aviewint.com>',
    to,
    subject,
    // subject: body?.firstName + ' ' + body?.lastName + 'sent you an invite',
    text: '',
    html,
  };
  await mg.messages().send(data, function (error, body) {
    if (error) {
      return res.status(500).json({ message: error });
    }
    return res.status(200).json({ message: body });
  });
}
