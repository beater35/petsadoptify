document.addEventListener('DOMContentLoaded', () => {
    // Retrieve pet details from Local Storage
    const petDetails = JSON.parse(localStorage.getItem('selectedPet'));

    // Get the container where pet details will be displayed
    const petDetailsContainer = document.querySelector('.pet-details-container');

    // Create a new div to hold each pet details
    const petDetailsDiv = document.createElement('div');
    petDetailsDiv.classList.add('pet-details1');

    // Create and set pet image element
    const petImageDiv = document.createElement('div');
    petImageDiv.classList.add('pet-image1');
    const image = document.createElement('img');
    image.src = petDetails.image;
    image.alt = 'Pet Image';
    petImageDiv.appendChild(image);

    // Create and set pet info element
    const petInfoDiv = document.createElement('div');
    petInfoDiv.classList.add('pet-info1'); 
    const petName = document.createElement('h2');
    petName.textContent = petDetails.name;
    const breed = document.createElement('p');
    breed.innerHTML = `<strong>Breed:</strong> ${petDetails.breed}`;
    const gender = document.createElement('p');
    gender.innerHTML = `<strong>Gender:</strong> ${petDetails.gender}`;
    const age = document.createElement('p');
    age.innerHTML = `<strong>Age:</strong> ${petDetails.age} Years`;
    const description = document.createElement('div');
    description.classList.add('pet-description1');
    description.innerHTML = `<p><strong>Description:</strong><br>${petDetails.description}</p>`;

    // Create and set adopt button
    const adoptButton = document.createElement('button');
    adoptButton.classList.add('adopt-button1');
    adoptButton.textContent = 'Adopt Me';

    // Add event listener to the adopt button to open the popup form
    adoptButton.addEventListener('click', () => {
        const popupForm = document.getElementById("popup-form");
        // Set default values for pet name and breed input fields
        document.getElementById('pet_name').value = petDetails.name;
        document.getElementById('pet_breed').value = petDetails.breed;
        // Make pet name and breed fields non-editable
        document.getElementById('pet_name').readOnly = true;
        document.getElementById('pet_breed').readOnly = true;
        popupForm.style.display = "block";
    });

    // Get the element that closes the popup
    const closeButton = document.querySelector(".close-popup");
     // Handle the form submission
     const adoptionForm = document.getElementById('adoption-form');
     adoptionForm.addEventListener('submit', (event) => {
         const successMessage = document.getElementById('success-message');
         successMessage.style.display = 'block';
    // Hide the success message after 5 seconds
     setTimeout(() => {
        successMessage.style.display = 'none';
     }, 5000);
         // Optionally, reset the form fields
         adoptionForm.reset();
     });

    // When the user clicks on <span> (x), close the popup
    closeButton.onclick = function() {
        const popupForm = document.getElementById("popup-form");
        popupForm.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        const popupForm = document.getElementById("popup-form");
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    }

    // Append all elements to pet details div
    petInfoDiv.appendChild(petName);
    petInfoDiv.appendChild(breed);
    petInfoDiv.appendChild(gender);
    petInfoDiv.appendChild(age);
    petInfoDiv.appendChild(description);
    petInfoDiv.appendChild(adoptButton);

    petDetailsDiv.appendChild(petImageDiv);
    petDetailsDiv.appendChild(petInfoDiv);

    // Append the pet details div to the pet details container
    petDetailsContainer.appendChild(petDetailsDiv);
});