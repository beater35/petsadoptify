document.addEventListener('DOMContentLoaded', async () => {
    const petList = document.getElementById('pet-form');
    console.log(petList)

    petList.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('pet-name').value;
        const breed = document.getElementById('pet-breed').value;
        const gender = document.getElementById('pet-gender').value;
        const age = document.getElementById('pet-age').value;
        const additionalInfo = document.getElementById('additional-info').value;

        // Add the pet to the database
        try {
            const response = await fetch('/api/pets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, age, breed, gender, additionalInfo })
            });

            if (!response.ok) {
                throw new Error('Failed to add pet');
            }

            const petData = await response.json();
            console.log('Pet added successfully:', petData);

        } catch (error) {
            console.error('Error adding pet:', error.message);
        }

    })
})