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

document.addEventListener('DOMContentLoaded', () => {
    // Fetch the email value from the local storage
    const email = localStorage.getItem('loggedInEmail');
    
    // Update the content of the mail class with the fetched email
    const mailElement = document.querySelector('.mail');
    mailElement.textContent = email;
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

