document.addEventListener('DOMContentLoaded', async () => {
    const petList = document.getElementById('pet-form');
    console.log(petList)

    let image;

    petList.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('pet-name').value;
        const breed = document.getElementById('pet-breed').value;
        const gender = document.getElementById('pet-gender').value;
        const age = document.getElementById('pet-age').value;
        const additionalInfo = document.getElementById('additional-info').value;

        const fileInput = document.getElementById('pet-image');
        const imageFile = fileInput.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);


        
        // Add the pet to the database
        try {
            const uploadResponse = await fetch('/api/uploads', {
                method: 'POST',
                body: formData,
            });

            if (!uploadResponse.ok) {
                throw new Error('Image upload failed');
            }

            const imageData = await uploadResponse.json();
            image = imageData.image.src;
            console.log('Image value:', image);

            // add all the details of the pet to mongodb

            const response = await fetch('/api/pets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, age, breed, gender, image, additionalInfo })
            });

            if (!response.ok) {
                throw new Error('Failed to add pet');
            }

            const petData = await response.json();
            console.log('Pet added successfully:', petData);

            setTimeout(() => {
                window.location.reload();
            }, 200);

        } catch (error) {
            console.error('Error adding pet:', error.message);
        }

    })
})