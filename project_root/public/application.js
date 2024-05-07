document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#popup-form form');
  
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
  
        // Get form data
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const phoneInput = document.getElementById('phone').value;
        const addressInput = document.getElementById('address').value;
        const occupationInput = document.getElementById('occupation').value;
        const adoptReasonInput = document.getElementById('adopt_reason').value;
        const petNameInput = document.getElementById('pet_name').value;
        const petBreedInput = document.getElementById('pet_breed').value;
  
        const formData = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            address: addressInput,
            occupation: occupationInput,
            adopt_reason: adoptReasonInput,
            pet_name : petNameInput,
            pet_breed : petBreedInput

        };
  
        try {
            // Send form data to backend API
            const response = await fetch('/api/application-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
  
            if (response.ok) {
                // Form submitted successfully
                console.log('Form submitted successfully');
                // Optionally, you can reset the form
                form.reset();
            } else {
                // Form submission failed
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });
  });