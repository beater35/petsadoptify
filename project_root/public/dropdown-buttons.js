document.addEventListener('DOMContentLoaded', () => {
    console.log("the dropdown js script is working!")
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