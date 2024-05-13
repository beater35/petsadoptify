document.addEventListener('DOMContentLoaded', async () => {
  const loginForm = document.getElementById('login-form');
  const loginButton = document.querySelector('.loginbtn'); // Select the login button

  loginButton.addEventListener('click', async (event) => { // Add event listener to the login button
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      console.log(email, password);

      try {
          const response = await fetch(`/api/users`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          });

          if (!response.ok) {
              throw new Error('Failed to fetch user data');
          }

          const userData = await response.json();
          console.log('User data fetched successfully:', userData);

          // Check if the entered email and password match any user in the database
          const foundUser = userData.find(user => user.email === email && user.password === password);
          if (foundUser) {
              // console.log('User found:', foundUser);
              // User authentication successful, proceed with further actions
              // For example, redirect to another page
              window.location.href = "home.html"; // Change "dashboard.html" to the actual URL you want to redirect to
          } else {
              console.log('User not found or invalid credentials');
              // Display an error message or take appropriate action
              alert('Invalid email or password. Please try again.');
          }
      } catch (error) {
          console.error('Error fetching user data:', error.message);
      }

  });
});



// JavaScript code in your frontend
function sendForgotPasswordEmail() {
    const email = document.getElementById('email').value;
    fetchForgotPasswordEmail(email);
  }
  
  async function fetchForgotPasswordEmail(email) {
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        // Handle non-successful responses
        const errorMessage = await response.text();
        throw new Error(`Failed to send forgot password email: ${errorMessage}`);
      }
  
      const data = await response.json();
      if (data.success) {
        alert('Forgot password email sent successfully');
      } else {
        alert('Failed to send forgot password email');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred. Please try again later.');
    }
  }
  