export const getDate = (date) => {
  return new Date(date).toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour12: true,
  });
};

export const getDescription = (description) => {
  return description.split('<p>')[1].split('</p>')[0];
};
