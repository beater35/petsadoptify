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

    });
});

// Fetch pet data from your backend API
fetch('/api/pets')
.then(response => response.json())
.then(data => {
    console.log(data);

    // Iterate over the fetched pet data
    data.forEach(pet => {
        // Create a new pet card container
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');

        // Create elements for pet image, name, breed, gender, and age
        const petImage = document.createElement('div');
        petImage.classList.add('pet-image');
        const image = document.createElement('img');
        image.src = pet.image; // Use the 'image' attribute directly
        image.alt = 'Pet Image';
        petImage.appendChild(image);

        const petDetails = document.createElement('div');
        petDetails.classList.add('pet-details');
        const petName = document.createElement('div');
        petName.classList.add('pet-name');
        petName.textContent = pet.name;

        const petBreed = document.createElement('div');
        petBreed.classList.add('pet-info');
        petBreed.textContent = 'Breed: ' + pet.breed; // Assuming pet.breed holds the breed information

        const petGender = document.createElement('div');
        petGender.classList.add('pet-info');
        petGender.textContent = 'Gender: ' + pet.gender; // Assuming pet.gender holds the gender information

        const petAge = document.createElement('div');
        petAge.classList.add('pet-info');
        petAge.textContent = 'Age: ' + pet.age + ' Years'; // Assuming pet.age holds the age information

        const petId = pet._id;
        console.log(petId);


        petDetails.appendChild(petName);
        petDetails.appendChild(petBreed);
        petDetails.appendChild(petGender);
        petDetails.appendChild(petAge);

        // Create the "delete" button
        const adoptButton = document.createElement('div');
        adoptButton.classList.add('delete-button');
        adoptButton.textContent = 'Delete Pet';

        adoptButton.addEventListener('click', () => {
            deleteDocument(petId); // Pass petId to deleteDocument function
        });

        // Append the "Adopt Me" button to the pet card container
        petCard.appendChild(petImage);
        petCard.appendChild(petDetails);
        petCard.appendChild(adoptButton);

        // Append the pet card to the listing container
        const listingContainer = document.getElementById('listing-container');
        if (listingContainer) {
            listingContainer.appendChild(petCard);
        } else {
            console.error('Listing container not found');
        }
    });
})
.catch(error => {
    console.error('Error fetching pet data:', error);
});


function deleteDocument(id) {
    fetch(`/api/pets/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
    })
      .then(response => {
        if (response.ok) {
          console.log('Document deleted successfully');
          window.location.reload();
          scrollToHash();
        } else {
          throw new Error('Failed to delete document');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error, e.g., display an error message to the user
      });
}

function scrollToHash() {
    const hash = window.location.hash;
    if (hash === '#listings') {
        // If the hash is '#listings', show the listings section
        $('#Dashboard').hide();
        $('#contact-info').hide();
        $('#applications').hide();
        $('#listings').show();
    }
}

document.addEventListener('DOMContentLoaded', scrollToHash);
