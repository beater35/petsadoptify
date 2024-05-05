document.addEventListener('DOMContentLoaded', async () => {
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
          petDetails.appendChild(petName);

          // Append the pet image and details to the pet card container
          petCard.appendChild(petImage);
          petCard.appendChild(petDetails);

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

});
