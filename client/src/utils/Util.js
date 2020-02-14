export const truncate = (str, fixToTruncate) => {
  return str.length > fixToTruncate
    ? str.substring(0, fixToTruncate) + "..."
    : str;
};
