document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const username = document.getElementById('username').value;
      const dob = document.getElementById('dob').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/api/users', {
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
window.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('signup-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const dobInput = document.getElementById('dob');

  form.addEventListener('submit', function(event) {
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      const dob = new Date(dobInput.value);
      const today = new Date();
      const minAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
      const maxAgeDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());

      if (!validateUsername(username)) {
          event.preventDefault(); // Prevent form submission
          alert('Username should be alphanumeric, underscores, and periods only. It should be between 6 and 20 characters and should not contain spaces.');
      }

      if (password.length < 8) {
          event.preventDefault(); // Prevent form submission
          alert('Password must be at least 8 characters long.');
      } else if (!validatePassword(password)) {
          event.preventDefault(); // Prevent form submission
          alert('Password must include at least one uppercase letter, one lowercase letter, one number, one special character, and should not contain spaces.');
      } else if (password.includes(' ')) {
          event.preventDefault(); // Prevent form submission
          alert('Password cannot contain spaces.');
      } else if (password === username) {
          event.preventDefault(); // Prevent form submission
          alert('Password cannot be the same as username.');
      }

      if (dob >= minAgeDate || dob <= maxAgeDate) {
          event.preventDefault(); // Prevent form submission
          alert('Date of birth must be more than 18 years old and less than 100 years old.');
      }
  });

  function validateUsername(username) {
      const regex = /^[a-zA-Z0-9_.]{6,20}$/;
      return regex.test(username) && !/\s/.test(username);
  }

  function validatePassword(password) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      return regex.test(password);
  }
});