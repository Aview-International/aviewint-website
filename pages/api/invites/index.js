import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_SMTP_HOST,
    port: process.env.NODEMAILER_SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const { subject, to, html } = req.body;

  const response = await transporter.sendMail({
    from: 'Julia From Aview <julia@aviewint.com>',
    to,
    subject,
    html,
  });

  return res.status(200).json({ message: response });
}
