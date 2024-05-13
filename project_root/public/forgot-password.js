document.addEventListener('DOMContentLoaded', async () => {
 
// Function to handle form submission
const handleFormSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission
  
  // Get the password and confirm password fields
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirm-password');

  // Get the values entered by the user
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return; // Stop further execution
  }

  // Get the email from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');

  // Call API to reset password
  try {
    const response = await fetch(`/api/users/${email}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    });
    
    // Check if request was successful
    if (response.ok) {
      alert("Password reset successful!");
  
      // Redirect user to login page after a delay (e.g., 2 seconds)
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000); // 2000 milliseconds (2 seconds) delay
    } else {
      // Display error message to user
      const data = await response.json();
      alert(data.message); // Display error message from API
    }
  } catch (error) {
    console.error('Error resetting password:', error);
    alert('An error occurred while resetting your password. Please try again later.');
  }
};

// Add event listener to the form
const resetPasswordForm = document.getElementById('reset-password');
resetPasswordForm.addEventListener('submit', handleFormSubmit);

})
