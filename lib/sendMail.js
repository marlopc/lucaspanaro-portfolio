const sendMail = async (body, emailAddress) => {
  await fetch(`https://formsubmit.co/${emailAddress}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export default sendMail;
