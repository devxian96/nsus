export const copyToClipboard = (str: string): Promise<void> => {
  return navigator.clipboard.writeText(str);
};
