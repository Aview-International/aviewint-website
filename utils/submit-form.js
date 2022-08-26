function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export const submitForm = (name, data) => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': name,
      ...data,
    }),
  });
};

export const submitFile = (name, data) => {
  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };
  fetch('/', {
    body: encode({
      'form-name': name,
      ...data,
    }),
    method: 'POST',
  });
};

export const initiateBot = async (data) => {
  const res = await axios({
    method: 'POST',
    url: `https://cors-anywhere.herokuapp.com/${process.env.NEXT_PUBLIC_ENDPOINT}`,
    data: data,
    headers: {
      // Authorization: `appToken process.env.APP_TOKEN`,
      appId: process.env.NEXT_PUBLIC_APPID,
      appToken: process.env.NEXT_PUBLIC_APPTOKEN,
    },
  });
  console.log(res);
};
