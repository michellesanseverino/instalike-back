import express from "express";
import { listAllPosts } from "../controllers/postsController.js";

//Code to create a route that returns all posts
const routes = (app) => {
    //The app.use method is used to add middleware to the application
    app.use(express.json());

    //Code to create a route that returns all posts
    app.get("/posts", listAllPosts);
}

export default routes;