document.addEventListener('DOMContentLoaded', () => {
    // Retrieve pet details from Local Storage
    const petDetails = JSON.parse(localStorage.getItem('selectedPet'));

    // Get the container where pet details will be displayed
    const petDetailsContainer = document.querySelector('.pet-details');

    // Create and set pet image element
    const petImageDiv = document.createElement('div');
    petImageDiv.classList.add('pet-image');
    const image = document.createElement('img');
    image.src = petDetails.image;
    image.alt = 'Pet Image';
    petImageDiv.appendChild(image);

    // Create and set pet info element
    const petInfoDiv = document.createElement('div');
    petInfoDiv.classList.add('pet-info');
    const petName = document.createElement('h2');
    petName.textContent = petDetails.name;
    const breed = document.createElement('p');
    breed.innerHTML = `<strong>Breed:</strong> ${petDetails.breed}`;
    const gender = document.createElement('p');
    gender.innerHTML = `<strong>Gender:</strong> ${petDetails.gender}`;
    const age = document.createElement('p');
    age.innerHTML = `<strong>Age:</strong> ${petDetails.age} Years`;
    const description = document.createElement('div');
    description.classList.add('pet-description');
    description.innerHTML = `<p><strong>Description:</strong><br>${petDetails.additionalInfo}</p>`;

    // Create and set adopt button
    const adoptButton = document.createElement('button');
    adoptButton.classList.add('adopt-button');
    adoptButton.textContent = 'Adopt Me';

    // Append all elements to pet details container
    petInfoDiv.appendChild(petName);
    petInfoDiv.appendChild(breed);
    petInfoDiv.appendChild(gender);
    petInfoDiv.appendChild(age);
    petInfoDiv.appendChild(description);
    petInfoDiv.appendChild(adoptButton);

    petDetailsContainer.appendChild(petImageDiv);
    petDetailsContainer.appendChild(petInfoDiv);
});
