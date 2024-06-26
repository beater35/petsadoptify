const form = document.getElementById('contactForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create the request body
  const requestBody = {
    name,
    address,
    email,
    message,
  };

  try {
    // Send the POST request to the server
    const response = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      // Handle the successful response
      console.log('Contact information submitted successfully');
      // You can reset the form or perform any other actions here
    } else {
      // Handle the error response
      console.error('Error submitting contact information');
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('An error occurred:', error);
  }
});
document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('contactForm');
  const feedbackMessage = document.getElementById('feedbackMessage');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Display feedback message
      feedbackMessage.textContent = 'Your message has been sent successfully!';
      feedbackMessage.style.display = 'block';

      // Reset the form
      form.reset();

      // Optionally hide the feedback message after a few seconds
      setTimeout(() => {
          feedbackMessage.style.display = 'none';
      }, 5000); // 5000 milliseconds = 5 seconds
  });
});
