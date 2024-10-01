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
