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
    // Adopt Me button click event
    document.querySelector(".adopt-button").addEventListener("click", function() {
        // You can add your logic here for when the Adopt Me button is clicked
        alert("You clicked Adopt Me!");
        // Example: Redirect to a new page
        // window.location.href = "adopt.html";
    });

    // View More button click event
    document.querySelector(".view-more-button").addEventListener("click", function() {
        // You can add your logic here for when the View More button is clicked
        alert("You clicked View More!");
        // Example: Show more pet listings
        // window.location.href = "more_pets.html";
    });
});

