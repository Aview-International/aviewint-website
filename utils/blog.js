import axios from 'axios';

export const getStories = async () => {
  const res = await axios({
    method: 'get',
    url: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aviewint`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

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
