// signup.js

document.getElementById('signup-form').addEventListener('submit', async (event) => {
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
            throw new Error('Failed to create user');
        }

        const newUser = await response.json();
        console.log('User created successfully:', newUser);
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
});

function register() {
    // Here you can add the registration logic, such as sending a request to the server
    // to register the user with the provided information.
    // For demonstration purposes, you can log the inputs to the console.
    alert("You clicked register!");

    const email = document.querySelector('.email-input').value;
    const username = document.querySelector('.username-input').value;
    const dob = document.querySelector('.dob-input').value;
    const password = document.querySelector('.password-input').value;

    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Date of Birth:', dob);
    console.log('Password:', password);
}
