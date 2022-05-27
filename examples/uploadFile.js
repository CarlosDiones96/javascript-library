// Uploading a file

const formData = new FormData()
const fileField = document.querySelector('input[type="file"]')

formData.append('username', 'someuser')
formData.append('avatar', fileField.files[0])

fetch('https://example.com', {
  method: 'Put',
  body: formData,
})
  .then((response) => response.json())
  .then((result) => console.log('Result: ', result))
  .catch((err) => console.error('Error: ', err))
