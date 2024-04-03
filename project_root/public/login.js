document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
  
        if (!response.ok) {
          throw new Error('Failed to authenticate user');
        }
  
        const userData = await response.json();
        console.log('User authenticated successfully:', userData);
        // Redirect or perform other actions after successful login
      } catch (error) {
        console.error('Error authenticating user:', error.message);
      }
    });
});
