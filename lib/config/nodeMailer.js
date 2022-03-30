import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
  service: process.env.MAILME_SERVICE,
  secure: process.env.NODE_ENV === "production",
  auth: {
    user: process.env.MAILME_EMAIL,
    pass: process.env.MAILME_PASS,
  },
  from: process.env.MAILME_EMAIL,
});

export default transporter;
