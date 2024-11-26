import fs from "fs";

import {getAllPosts, createPost, updatePost } from "../models/postsModel.js";
import generateDescriptionWithGemini from "../services/geminiService.js";

//The listAllPosts function is used to return all posts from the database
export async function listAllPosts (req, res) {
    //The await keyword is used to call the getAllPosts function, which returns all posts from the database. Is always used with async functions
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

//The req parameter is used to get the request object, and the res parameter is used to send the response object
export async function newPostCreated (req, res) {
    //The req.body property is used to access the request body
    const newPost = req.body;

    //The createPost function is used to create a new post
    try {
        //The await keyword is used to call the createPost function, which creates a new post in the database. Is always used with async functions
        const createdPost = await createPost(newPost);
        res.status(200).json(createdPost);
    } catch (error) {
        //The res.status method is used to set the status code of the response
        res.status(500).json({ message: error.message });
    }
}

export async function uploadImage(req, res) {
    //The req.body property is used to access the request body
    const newPost = {
        description: "",
        imgURL: req.file.originalname,
        alt: ""
    };

    //The createPost function is used to create a new post
    try {
        //The await keyword is used to call the createPost function, which creates a new post in the database. Is always used with async functions
        const createdPost = await createPost(newPost);

        //The fs.renameSync method is used to rename the file
        const imageUpdated = `uploads/${createdPost.insertedId}.png` ;
        fs.renameSync(req.file.path, imageUpdated);

        
        res.status(200).json(createdPost);
    } catch (error) {
        //The res.status method is used to set the status code of the response
        res.status(500).json({ message: error.message });
    }
}

export async function updateNewImage(req, res) {
    const id = req.params.id;
    const urlImage = `http://localhost:3000/${id}.png`;

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const desc = await generateDescriptionWithGemini(imgBuffer);
        
        const newPost = {
            imgURL: urlImage,
            description: desc,
            alt: req.body.alt
        };

        const updatedPost = await updatePost(id, newPost);
        res.status(200).json(updatedPost);
    } catch (error) {
        //The res.status method is used to set the status code of the response
        res.status(500).json({ message: error.message });
    }

};

