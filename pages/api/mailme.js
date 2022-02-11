import transporter from "../../lib/config/nodeMailer";

const handler = async (req, res) => {
  if(req.method === 'POST') {
    const { name, email, message } = req.body;
  
    const mailData = {
      from: `"Portfolio visitor" <${process.env.EMAILME_EMAIL}>`,
      to: process.env.EMAIL,
      subject: `Personal portofolio - new message from ${name}`,
      text: `New message, email: ${email} - name: ${name} - message: ${message}`,
      html: `
        <h2>New message by ${name}</h2>
        <p>Email: <address>${email}</address></p>
        <p>Message:</p>
        <p>${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailData);
      
      return res.status(200).send('SENT');
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else {
    res.status(405).setHeader('Allow', 'POST').end();
  }
};

export default handler;
