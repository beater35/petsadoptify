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

document.addEventListener("DOMContentLoaded", function() {
    // Get all adopt buttons
    var adoptButtons = document.querySelectorAll(".adopt-button");
    
    // Attach click event to each adopt button
    adoptButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Redirect to adopt-button-redirect.html page
            window.location.href = "adopt-button-redirect.html";
        });
    });
});

/// Add this JavaScript to make the testimonial cards scroll smoothly by 200px every 3 seconds

const testimonialContainer = document.querySelector('.testimonial-cards-container');
const scrollAmount = 300; // Scroll amount in pixels
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



// async function getPets() {
//   try {
//     const response = await fetch('/api/pets');
//     const pets = await response.json();
//     displayPets(pets);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// function displayPets(pets) {
//   const petList = document.getElementById('petList');
//   pets.forEach(pet => {
//     const petElement = document.createElement('div');
//     petElement.innerHTML = `
//       <h2>${pet.name}</h2>
//       <p>Age: ${pet.age}</p>
//       <p>Breed: ${pet.breed}</p>
//       <p>Gender: ${pet.gender}</p>
//       <img src="${pet.image}" alt="${pet.name}">
//       <p>${pet.additionalInfo}</p>
//     `;
//     petList.appendChild(petElement);
//   });
// }

// // Fetch pets when the page loads
// window.onload = getPets;

// Scroll testimonials automatically every 3 seconds

setInterval(scrollTestimonials, scrollInterval);
