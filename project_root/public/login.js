// login.js

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Failed to authenticate user');
        }

        const user = await response.json();
        console.log('User authenticated successfully:', user);
        // Redirect or perform other actions after successful login
    } catch (error) {
        console.error('Error authenticating user:', error.message);
    }
});
