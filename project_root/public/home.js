//menu for mobile
document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.getElementById('toggle-menu');
    const menu = document.querySelector('.menu');

    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});

//search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value;
        // Here you can perform the search functionality using the searchTerm
        // For demonstration purposes, let's just log the search term
        console.log('Searched term:', searchTerm);
    });
});


/// Add this JavaScript to make the testimonial cards scroll smoothly by 200px every 3 seconds

const testimonialContainer = document.querySelector('.testimonial-cards-container');
const scrollAmount = 250; // Scroll amount in pixels
const scrollInterval = 3000; // Interval in milliseconds (3 seconds)

function scrollTestimonials() {
    const currentScroll = testimonialContainer.scrollLeft;
    const targetScroll = currentScroll + scrollAmount;

    // Scroll smoothly to the target position
    testimonialContainer.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });

    // Reset scroll position to start when reached the end
    if (targetScroll >= testimonialContainer.scrollWidth - testimonialContainer.clientWidth) {
        testimonialContainer.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    }
}


document.addEventListener('DOMContentLoaded', async () => {
    // Fetch pet data from your backend API
    fetch('/api/pets/home')
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
});


document.addEventListener("DOMContentLoaded", function() {
    // Get all adopt buttons initially present in the document
    var adoptButtons = document.querySelectorAll(".adopt-button");
    attachClickHandlers(adoptButtons);
  
    // Function to attach click event handlers to adopt buttons
    function attachClickHandlers(buttons) {
      buttons.forEach(function(button) {
        button.addEventListener("click", function() {
          window.location.href = "adopt-button-redirect.html";
        });
      });
    }
  
    // Observe for new adopt buttons being added to the document
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
          var newAdoptButtons = document.querySelectorAll(".adopt-button");
          attachClickHandlers(newAdoptButtons);
        }
      });
    });
  
    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
});

setInterval(scrollTestimonials, scrollInterval);
