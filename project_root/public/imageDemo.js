document.addEventListener('DOMContentLoaded', function() {
    const imageForm = document.getElementById('image-form');
    const imageDisplay = document.getElementById('image-display');
    const fetchImageButton = document.getElementById('fetch-image-btn');

    let id = '';
    let image = ''; // Variable to store the base64 image data
    let fetchedImage = '';

    imageForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent form submission

        const imageInput = document.getElementById('image');
        const imageFile = imageInput.files[0];

        convertToBase64(imageFile)
            .then(image => {
                console.log('Base64 image:', image);
                // Proceed with using the base64 image data
            })
            .catch(error => {
                console.error('Error converting image to base64:', error);
            });

        try {
            // Add the base64 image to the database
            fetch('/api/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ image })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Image added successfully!!!:', data);
                id = data._id;
            })
            .catch(error => {
                console.error('Failed to add image:', error);
            });
        } catch (error) {
            console.error('Failed to add image:', error);
        }
    });

    fetchImageButton.addEventListener('click', function() {
        // Fetch the base64 image data from the database
        try {
            // Add the base64 image to the database
            fetch('/api/images/66142f5829cc35b6ddc69379', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json' 
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Image fetched successfully!!!:', data);
                const fetchedImage = data.image;
                if (fetchedImage) {
                    displayImage(fetchedImage);
                } else {
                    console.error('No base64 image data available.');
                }
            })
            .catch(error => {
                console.error('Failed to fetch image:', error);
            });
        } catch (error) {
            console.error('Failed to fetch image:', error);
        }
    });
    
    function displayImage(base64Image) {
        // Create a new Image element
        const image = new Image();

        // Set the src attribute to the base64 image data
        image.src = base64Image;

        // Append the image to the imageDisplay div
        imageDisplay.innerHTML = ''; // Clear previous image (if any)
        imageDisplay.appendChild(image);
    }


    function convertToBase64(imageFile) {
        return new Promise((resolve, reject) => {
            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const base64Image = event.target.result;
                    console.log('Base64 image:', base64Image);
                    resolve(base64Image); // Resolve the Promise with the base64 image data
                };
                reader.onerror = function(error) {
                    reject(error); // Reject the Promise if an error occurs
                };
                reader.readAsDataURL(imageFile); // Start reading the file
            } else {
                reject('No image file selected.');
            }
        });
    }
});
