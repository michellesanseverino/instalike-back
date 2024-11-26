import express from "express";
import multer from "multer";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

import { listAllPosts, newPostCreated, uploadImage, updateNewImage} from "../controllers/postsController.js";

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
const upload = multer({ storage: storage });

//Code to create a route that returns all posts
const routes = (app) => {
    //The app.use method is used to add middleware to the application
    app.use(express.json());
    app.use(cors(corsOptions))

    //Code to create a route that returns all posts
    app.get("/posts", listAllPosts);

    //Code to create a route that creates a new post
    app.post("/posts", newPostCreated);

    //Code to create a route that uploads an image
    app.post("/upload", upload.single('file'), uploadImage);

    //Code to create a route that updates an image
    app.put("/upload/:id", updateNewImage);

}

//The routes function is exported as the default export
export default routes;