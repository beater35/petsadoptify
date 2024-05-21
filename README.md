# Pet Adoption Site

## Overview

The Pet Adoption Site is a web application designed to help users find pets available for adoption. Users can browse a list of pets, filter the results by breed, age, and gender, and view detailed information about each pet. The site aims to facilitate the adoption process by providing all necessary information in one place.

## Features

- **Pet Listings**: Display a list of available pets with images and basic details.
- **Search and Filter**: Search for pets based on breed, age, and gender.
- **Detailed View**: Click on a pet to see detailed information including name, breed, gender, age, and additional info.
- **Adopt Me Button**: Users can express interest in a pet by clicking the "Adopt Me" button, which stores pet details and redirects to an adoption form.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **JavaScript Libraries**: Fetch API for data fetching

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Setup

1. **Clone the repository**:
    ```bash
    https://github.com/beater35/petsadoptify.git
    cd project_root
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
    Create a `.env` file in the root directory and add your MongoDB URI and other necessary configurations:
    ```env
    MONGODB_URI=your_mongodb_uri
    PORT=3000
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    EMAIL_ADDRESS=your_email@example.com
    EMAIL_PASSWORD=your_app_password
    ```

4. **Start the server**:
    ```bash
    npm start
    ```

5. **Open the application**:
    Visit `http://localhost:3000` in your browser.

## Usage

- **Browse Pets**: On the homepage, users can see a list of pets available for adoption.
- **Search and Filter**: Use the dropdowns to select breed, age, and gender, then click "Search" to filter the results.
- **View Details**: Click on any pet card to view more details about the pet.
- **Adopt Me**: Click the "Adopt Me" button to store the pet's details and proceed to the adoption form.

## Code Structure

- **Frontend**: Located in the `public` folder.
  - `home.html`: Main HTML file.
  - `home.css`: Custom CSS styles.
  -  Note: There are multiple HTML and CSS files for different pages and components.
- **Backend**: Located in the `project_root` folder.
  - `app.js`: Main server file.
  - `routes/pet.routes.js`: API routes for fetching pet data.
  - `models/pet.js`: Mongoose model for the Pet schema.

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes** and commit them:
    ```bash
    git commit -m "Add some feature"
    ```
4. **Push to the branch**:
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Create a pull request**.
   
## Contact

For any questions or suggestions, please contact [beater3035@gmail.com].
