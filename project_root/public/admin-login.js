document.addEventListener('DOMContentLoaded', async () => {
  const loginButton = document.getElementById('loginButton');
  
  loginButton.addEventListener('click', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch(`/api/admin`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch admin data');
      }

      const adminData = await response.json();
      console.log('Admin data fetched successfully:', adminData);

      const foundAdmin = adminData.find(admin => admin.email === email && admin.password === password);
      if (foundAdmin) {
        // console.log('Admin found:', foundAdmin);
        // Admin authentication successful, proceed with further actions
        // For example, redirect to another page
        window.location.href = "admin-dashboard.html"; // Change "dashboard.html" to the actual URL you want to redirect to
      } else {
        console.log('Admin not found or invalid credentials');
        alert('Invalid email or password. Please try again.');
      }

    } catch (error) {
      console.log("Error fetching user data:", error.message);
    }

  })


})