# Instalike-back

Instalike-back is a backend service for the Instalike application. It provides APIs for user authentication, photo uploads, likes, comments, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
     ```sh
     git clone https://github.com/yourusername/instalike-back.git
     ```
2. Navigate to the project directory:
     ```sh
     cd instalike-back
     ```
3. Install dependencies:
     ```sh
     npm install
     ```
4. Set up environment variables by creating a `.env` file in the root directory and adding the necessary configurations.

## Usage

Start the development server:
```sh
npm run dev
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Photos

- `POST /api/photos` - Upload a new photo
- `GET /api/photos` - Get all photos

### Likes

- `POST /api/photos/:id/like` - Like a photo
- `DELETE /api/photos/:id/like` - Unlike a photo

### Comments

- `POST /api/photos/:id/comments` - Add a comment to a photo
- `GET /api/photos/:id/comments` - Get all comments for a photo

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.