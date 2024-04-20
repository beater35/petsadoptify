document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const dobInput = document.getElementById("dob");

  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const dob = new Date(dobInput.value);
    const today = new Date();
    const minAgeDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    const maxAgeDate = new Date(
      today.getFullYear() - 100,
      today.getMonth(),
      today.getDate()
    );

    // Validation checks
    if (!validateUsername(username)) {
      alert(
        "Username should be alphanumeric, underscores, and periods only. It should be between 6 and 20 characters and should not contain spaces."
      );
      return; // Stop further execution
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return; // Stop further execution
    } else if (!validatePassword(password)) {
      alert(
        "Password must include at least one uppercase letter, one lowercase letter, one number, one special character, and should not contain spaces."
      );
      return; // Stop further execution
    } else if (password.includes(" ")) {
      alert("Password cannot contain spaces.");
      return; // Stop further execution
    } else if (password === username) {
      alert("Password cannot be the same as username.");
      return; // Stop further execution
    }

    if (dob >= minAgeDate || dob <= maxAgeDate) {
      alert(
        "Date of birth must be more than 18 years old and less than 100 years old."
      );
      return; // Stop further execution
    }

    // Proceed with user registration
    try {
      // Fetch existing users from the backend
      const response = await fetch("/api/users");
      if (!response.ok) {
        throw new Error("Failed to fetch existing users");
      }
      const existingUsers = await response.json();

      // Check if the entered username or email already exists
      const usernameExists = existingUsers.some(
        (user) => user.username === username
      );
      const emailExists = existingUsers.some((user) => user.email === email);

      // If username or email already exists, throw an error
      if (emailExists) {
        alert("Email already exists");
        return; // Stop further execution
      }

      if (usernameExists) {
        alert("Username already exists");
        return; // Stop further execution
      }

      // If all validation checks pass and username/email are unique, proceed with user registration
      const registrationResponse = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, dob, password }),
      });

      if (!registrationResponse.ok) {
        throw new Error("Failed to register user");
      }

      const userData = await registrationResponse.json();
      console.log("User registered successfully:", userData);

      if (registrationResponse.ok) {
        window.location.href = "afterlogin.html";
      }

      // Redirect or perform other actions after successful registration
    } catch (error) {
      console.error("Error registering user:", error.message);
      // Display error message to the user or handle it as needed
    }
  });

  function validateUsername(username) {
    const regex = /^[a-zA-Z0-9_.]{6,20}$/;
    return regex.test(username) && !/\s/.test(username);
  }

  function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const isValid = regex.test(password);
    console.log('Password:', password);
    console.log('Regex test result:', isValid);
    return isValid;
  }
});
