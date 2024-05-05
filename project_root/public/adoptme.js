 // Get the popup form element
 var popupForm = document.getElementById("popup-form");

 // Get the button that opens the popup
 var adoptButton = document.querySelector(".adopt-button");

 // Get the element that closes the popup
 var closeButton = document.querySelector(".close-popup");

 // When the user clicks on the button, open the popup
 adoptButton.onclick = function() {
     popupForm.style.display = "block";
 }

 // When the user clicks on <span> (x), close the popup
 closeButton.onclick = function() {
     popupForm.style.display = "none";
 }

 // When the user clicks anywhere outside of the popup, close it
 window.onclick = function(event) {
     if (event.target == popupForm) {
         popupForm.style.display = "none";
     }
 }
 document.addEventListener("DOMContentLoaded", function() {
    // Get all adopt buttons
    var adoptButtons = document.querySelectorAll(".adopt-button-card");
    
    // Attach click event to each adopt button
    adoptButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Redirect to adopt-button-redirect.html page
            window.location.href = "adopt-button-redirect.html";
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve pet details from Local Storage
    const petDetails = JSON.parse(localStorage.getItem('selectedPet'));

    // Get the container where pet details will be displayed
    const petDetailsContainer = document.querySelector('.pet-details-container');

    // Create a new div to hold each pet details
    const petDetailsDiv = document.createElement('div');
    petDetailsDiv.classList.add('pet-details');

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
    description.innerHTML = `<p><strong>Description:</strong><br>${petDetails.description}</p>`;

    // Create and set adopt button
    const adoptButton = document.createElement('button');
    adoptButton.classList.add('adopt-button');
    adoptButton.textContent = 'Adopt Me';

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
