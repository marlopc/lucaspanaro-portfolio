import nodeMailer from 'nodemailer';

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: process.env.NODE_ENV === 'production',
  auth: {
    user: process.env.MAILME_EMAIL,
    pass: process.env.MAILME_PASS,
  },
  from: process.env.MAILME_EMAIL,
});

export default transporter;
