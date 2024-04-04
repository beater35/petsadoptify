document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const username = document.getElementById('username').value;
      const dob = document.getElementById('dob').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/api/signups', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, username, dob, password })
        });
  
        if (!response.ok) {
          throw new Error('Failed to register user');
        }
  
        const userData = await response.json();
        console.log('User registered successfully:', userData);
        // Redirect or perform other actions after successful registration
      } catch (error) {
        console.error('Error registering user:', error.message);
      }
    });
});
