# Instalike-Back

## Project Overview
Instalike-Back is a backend service designed to support the Instalike application (project created during the course "Imersão Dev Back-end" provided by Alura in November 2024). This project provides APIs for photo uploads. Also, as a experiment, the course explained how the Google Gemini can be integrated inside back-end. For the database and deploy, it was used MongoDB Atlas and Google Cloud.
For more information, please read below:

## Tools and Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js to create APIs.
- **MongoDB**: NoSQL database for storing user data and photos.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Multer**: Middleware for handling `multipart/form-data` for photo uploads.
- **Cloudinary**: Cloud service for image storage and management.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Thunder**: Extension used in VS Code for testing API Endpoints.
- **Postman**: Software used for testing API Endpoints.

## API Endpoints
- **Post Creation**:
     - `POST /posts`: Create a post.

- **Photo Uploads**:
     - `POST /upload`: Upload a new photo.

- **Return all posts**
     - `GET /posts`: Obtain all posts in the database

- **Update an image**
     - `PUT /upload/:id`: Updates the image from the ID informed

## Learning points

- During this course, I was able to **practice my knowledge in Javascript and, more specific, in Node.js.**
- For this project, the practice of **integrating routes with database was a special way for me to learn about MongoDB**, one of the most use database services using NoSQL. 
- I was able to understand and **practice how an API works and how can I implement with the best practices in my future projects**.  

## Contributing
Feel free to submit issues and enhancement requests. Fork the repository and create a pull request to contribute.

## License
This project is licensed under the MIT License.
