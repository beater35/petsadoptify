document.addEventListener('DOMContentLoaded', function() {
    const imageForm = document.getElementById('image-form');
    const imageDisplay = document.getElementById('image-display');
    const fetchImageButton = document.getElementById('fetch-image-btn');

    let id = '';
    let image = ''; // Variable to store the base64 image data
    let fetchedImage = '';

    imageForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Create a FormData object to store the form data
        const formData = new FormData();
        formData.append('image', image); // Append the image data
        
        try {
            // Send a POST request to the backend to upload the image
            image = formData;
            const response = await fetch('/api/images', {
                method: 'POST',
                body: image
            })
            .then(response => response.json())
            .then(data => {
                console.log('Image uploaded successfully!!!:', data);
                id = data._id;
            })
            .catch(error => {
                console.error('Failed to upload image:', error);
            });
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    });

    fetchImageButton.addEventListener('click', async function() {
        try {
            // Send a GET request to the backend to fetch the image
            fetch(`api/images/66142f5829cc35b6ddc69379`, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                console.log('Image fetched successfully!!!:', data);
                const fetchedImage = data.image;
                displayImage(fetchedImage);
            })
            .catch(error => {
                console.error('Failed to fetch image:', error);
            });
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    });

});
