function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const handleSubmit = (event) => {
  event.preventDefault();
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': event.target.getAttribute('name'),
      ...name,
    }),
  })
    .then(() => navigate('/thank-you'))
    .catch((error) => alert(error));
};

export const initiateBot = async (data) => {
  const res = await axios({
    method: 'POST',
    url: `https://cors-anywhere.herokuapp.com/${process.env.NEXT_PUBLIC_ENDPOINT}`,
    data: data,
    headers: {
      // Authorization: `appToken a237917c-a95a-4b83-acbc-71bd6bd14a7e`,
      appId: process.env.NEXT_PUBLIC_APPID,
      appToken: process.env.NEXT_PUBLIC_APPTOKEN,
    },
  });
  console.log(res);
};
