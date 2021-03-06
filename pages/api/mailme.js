import transporter from "~/lib/config/nodeMailer";
import generateHTML from "~/lib/mailer/generateHTML";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const mail = {
        from: `"Personal portfolio" <${
          process.env.MAILME_EMAIL ?? "Service e-mail"
        }>`,
        to: process.env.EMAIL ?? "<My e-mail>",
        subject: `New message from ${name}`,
        text: `New message, e-mail: ${email} - name: ${name} - message: ${message}`,
        html: generateHTML({ name, email, message }),
      };

      process.env.NODE_ENV === "development"
        ? console.log(mail)
        : await transporter.sendMail(mail);

      res.status(200).send("SENT");
    } catch {
      res.status(500).send("ERROR");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
