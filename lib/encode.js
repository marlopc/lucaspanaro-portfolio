const encodeLower = (string) => {
  const lower = string.toLowerCase();
  const diacriticsReplaced = lower.normalize('NFKD').replace(/[^\w\s.-_/]/g, '');
  return encodeURI(diacriticsReplaced);
};

export {
  encodeLower,
}
