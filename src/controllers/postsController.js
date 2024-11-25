import getAllPosts from "../models/postsModel.js";

export async function listAllPosts (req, res) {
    //The await keyword is used to call the getAllPosts function, which returns all posts from the database. Is always used with async functions
    const posts = await getAllPosts();
    res.status(200).json(posts);
}