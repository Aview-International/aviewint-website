export function convertDate(date) {
  const dateArray = date.split('/');
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];

  const monthText = new Date(year, month - 1, day).toLocaleString('default', {
    month: 'short',
  });

  return `${monthText} ${day}, ${year}`;
}
