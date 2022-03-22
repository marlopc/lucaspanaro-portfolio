const sendMail = async (body) => {
  await fetch('/api/mailme', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export default sendMail;
