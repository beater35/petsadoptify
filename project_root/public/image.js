const fileFormDOM = document.querySelector('.file-form')

const imageInputDOM = document.querySelector('#image')

const containerDOM = document.querySelector('.container')
let imageValue;

imageInputDOM.addEventListener('change', (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);
    
    fetch('/api/uploads', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const src = data.image.src;
        imageValue = src;
        console.log('Image value:', imageValue);
    })
    .catch(error => {
        imageValue = null;
        console.error('There was a problem with the fetch operation:', error);
    });
});
