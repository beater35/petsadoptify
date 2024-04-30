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