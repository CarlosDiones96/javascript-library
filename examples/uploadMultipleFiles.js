// Uploading multiple files

const formData = new FormData()
const photos = document.querySelector('input[type="file"][multiple]')

formData.append('title', 'My vacation')
for (let i = 0; i < photos.files.length; i++) {
  formData.append(`photos_${i}`, photos.files[i])
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
  .then((response) => response.json())
  .then((result) => console.log('Result', result))
  .catch((err) => console.error('Error: ', err))
