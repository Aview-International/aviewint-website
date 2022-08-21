export const urlValidator = (value) => {
  if (value.includes(' ')) return false;
  return (
    (value.includes('https://') ||
      value.includes('www.') ||
      value.includes('.com')) &&
    (value.includes('youtube') ||
      value.includes('tiktok') ||
      value.includes('instagram'))
  );
};

export const emailValidator = (mail) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    mail
  );
};
