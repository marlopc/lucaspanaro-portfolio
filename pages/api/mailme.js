import transporter from "../../lib/config/nodeMailer";
import generateHTML from '../../lib/mailer/generateHTML';

const handler = async (req, res) => {
  if(req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await transporter.sendMail({
        from: `"Personal portfolio" <${process.env.EMAILME_EMAIL}>`,
        to: process.env.EMAIL,
        subject: `New message from ${name}`,
        text: `New message, email: ${email} - name: ${name} - message: ${message}`,
        html: generateHTML({ name, email, message }),
      });
      
      res.status(200).send('SENT');
    } catch (error) {
      res.status(500).send('ERROR');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
