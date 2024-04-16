document.addEventListener('DOMContentLoaded', function() {
    const imageForm = document.getElementById('image-form');
    const imageDisplay = document.getElementById('image-display');
    const fetchImageButton = document.getElementById('fetch-image-btn');

    let id = '';

    imageForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent default form submission

        try {
            // Get the uploaded image file
            const fileInput = document.getElementById('image');
            const file = fileInput.files[0];

            // Read the contents of the file as binary data
            const pic = await readFileAsBinary(file);

            console.log('Binary image data:', pic);

            const blob = new Blob([pic], { type: 'application/octet-stream' });

            // Assume 'image' contains the binary image data
            const image = new FormData();
            image.append('image', blob, 'image.jpg');

            fetch('/api/images', {
            method: 'POST',
            body: image
            })
            .then(response => {
            if (response.ok) {
                console.log('Image uploaded successfully');
            } else {
                console.error('Failed to upload image:', response.statusText);
            }
            })
            .catch(error => {
            console.error('Error uploading image:', error);
            });


        } catch (error) {
            console.error('Error reading image file:', error);
        }
    });

    fetchImageButton.addEventListener('click', function() {
        // Fetch the base64 image data from the database
        try {
            // Add the base64 image to the database
            fetch('/api/images/' + id, {
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => {
                console.log('Image fetched successfully!!!:', data);
                const fetchedImage = data.image;
                if (fetchedImage) {
                    displayImage(fetchedImage);
                } else {
                    console.error('No image data available.');
                }
            })
            .catch(error => {
                console.error('Failed to fetch image:', error);
            });
        } catch (error) {
            console.error('Failed to fetch image:', error);
        }
    });
    

    function readFileAsBinary(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                // Read the contents of the file as binary data
                const binaryData = event.target.result;
                resolve(binaryData);
            };
            
            reader.onerror = function(error) {
                reject(error);
            };
            
            reader.readAsArrayBuffer(file);
        });
    }    
});
