// Uploading JSON data

const data = { username: 'example' }

fetch('https://example.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log('Sucess: ', data))
  .catch((err) => console.error('Error: ', err))
