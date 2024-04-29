function setDropdownOption(dropdownId, option) {
    document.getElementById(dropdownId + '-dropdown').previousElementSibling.textContent = option.textContent;
}

function showDropdownOption(dropdownId) {
    document.getElementById(dropdownId + '-dropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
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
document.getElementById("search-btn").addEventListener("click", function() {
    alert("Search button clicked");
    // Retrieve the search query from the input field
    var query = document.querySelector(".search-bar input[type='text']").value;

    // Do something with the search query, like performing a search
    console.log("Search query:", query);
    // Here you can add your logic to perform the search or submit the form
});
