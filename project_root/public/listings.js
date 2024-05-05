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

            const petBreed = document.createElement('div');
            petBreed.classList.add('pet-info');
            petBreed.textContent = 'Breed: ' + pet.breed; // Assuming pet.breed holds the breed information

            const petGender = document.createElement('div');
            petGender.classList.add('pet-info');
            petGender.textContent = 'Gender: ' + pet.gender; // Assuming pet.gender holds the gender information

            const petAge = document.createElement('div');
            petAge.classList.add('pet-info');
            petAge.textContent = 'Age: ' + pet.age + ' Years'; // Assuming pet.age holds the age information

            petDetails.appendChild(petName);
            petDetails.appendChild(petBreed);
            petDetails.appendChild(petGender);
            petDetails.appendChild(petAge);

            // Create the "Adopt Me" button
            const adoptButton = document.createElement('div');
            adoptButton.classList.add('adopt-button');
            adoptButton.textContent = 'Adopt Me';

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

    document.getElementById("search-btn").addEventListener("click", () => {
      event.preventDefault();
      // Retrieve the search query from the input field
      const query = document.querySelector(
        '.search-bar input[type="text"]'
      ).value;
  
      // Retrieve the selected values for breed, age, and gender
      let breed = document.getElementById("breed-dropdown").textContent.trim();
      let age = document.getElementById("age-dropdown").textContent.trim();
      let gender = document.getElementById("gender-dropdown").textContent.trim();
  
      // Remove default values if they haven't been changed
      if (breed === "Breed") {
        breed = "";
      }
      if (age === "Age") {
        age = "";
      }
      if (gender === "Gender") {
        gender = "";
      }
  
      // Log the search query and additional parameters
      console.log("Search query:", query);
      console.log("Breed:", breed);
      console.log("Age:", age);
      console.log("Gender:", gender);
  
      fetch(`/api/pets?name=${query}&breed=${breed}&age=${age}&gender=${gender}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
  
          // Iterate over the fetched pet data
          data.forEach((pet) => {
            // Create a new pet card container
            const petCard = document.createElement("div");
            petCard.classList.add("pet-card");
  
            // Create elements for pet image, name, breed, gender, and age
            const petImage = document.createElement("div");
            petImage.classList.add("pet-image");
            const image = document.createElement("img");
            image.src = pet.image; // Use the 'image' attribute directly
            image.alt = "Pet Image";
            petImage.appendChild(image);
  
            const petDetails = document.createElement("div");
            petDetails.classList.add("pet-details");
            const petName = document.createElement("div");
            petName.classList.add("pet-name");
            petName.textContent = pet.name;
  
            const petBreed = document.createElement("div");
            petBreed.classList.add("pet-info");
            petBreed.textContent = "Breed: " + pet.breed; // Assuming pet.breed holds the breed information
  
            const petGender = document.createElement("div");
            petGender.classList.add("pet-info");
            petGender.textContent = "Gender: " + pet.gender; // Assuming pet.gender holds the gender information
  
            const petAge = document.createElement("div");
            petAge.classList.add("pet-info");
            petAge.textContent = "Age: " + pet.age + " Years"; // Assuming pet.age holds the age information
  
            petDetails.appendChild(petName);
            petDetails.appendChild(petBreed);
            petDetails.appendChild(petGender);
            petDetails.appendChild(petAge);
  
            // Append the pet image and details to the pet card container
            petCard.appendChild(petImage);
            petCard.appendChild(petDetails);
  
            // Append the pet card to the listing container
            const listingContainer = document.getElementById("listing-container");
            if (listingContainer) {
              listingContainer.appendChild(petCard);
            } else {
              console.error("Listing container not found");
            }
          });
        })
        .catch((error) => {
          console.error("Error fetching pet data:", error);
        });
    });
});
