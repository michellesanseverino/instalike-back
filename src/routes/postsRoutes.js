import express from "express";
import multer from "multer";

import { listAllPosts, newPostCreated, uploadImage} from "../controllers/postsController.js";

//Code to create a storage engine
// This code isn't need if you are using Linux or MacOS
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

//Code to create an instance of the multer middleware
const upload = multer({ dest: 'uploads/', storage });

//Code to create a route that returns all posts
const routes = (app) => {
    //The app.use method is used to add middleware to the application
    app.use(express.json());

    //Code to create a route that returns all posts
    app.get("/posts", listAllPosts);

    //Code to create a route that creates a new post
    app.post("/posts", newPostCreated);

    app.post("/upload", upload.single('file'), uploadImage);

}

//The routes function is exported as the default export
export default routes;