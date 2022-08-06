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
