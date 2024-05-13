document.addEventListener('DOMContentLoaded', function () {
    const resetPasswordForm = document.getElementById('reset-password');

    resetPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(resetPasswordForm);
        const email = formData.get('email'); // Get the email entered by the user

        // Send a POST request to the '/forgot-password' API endpoint
        fetch('/api/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => {
            if (response.ok) {
                // Handle success
                console.log('Password reset email sent successfully.');
                alert('Password reset email sent successfully.');
                window.location.href = "login.html";
            } else {
                // Handle error
                console.error('Failed to send password reset email.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
