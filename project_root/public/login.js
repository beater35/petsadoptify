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
              window.location.href = "afterlogin.html"; // Change "dashboard.html" to the actual URL you want to redirect to
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
