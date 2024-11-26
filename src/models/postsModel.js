import 'dotenv/config';
import { ObjectId } from "mongodb";
import connectDB from "../config/dbConfig.js";

//Code to connect to the database using the MongoClient class from the mongodb package
const connection = await connectDB(process.env.STRING_CONNECTION);

//Code to create an array of posts from the database
export async function getAllPosts(){
    //The connection variable is used to connect to the database
    const db = connection.db("imersao-instalike");

    //The collection variable is used to access the posts collection
    const collection = db.collection("posts");

    //The find method is used to return all posts from the database
    return collection.find().toArray();
}

export async function createPost(newPost){
    //The connection variable is used to connect to the database
    const db = connection.db("imersao-instalike");

    //The collection variable is used to access the posts collection
    const collection = db.collection("posts");

    //The insertOne method is used to create a new post in the database
    return collection.insertOne(newPost);
}

export async function updatePost(id, newPost){
    //The connection variable is used to connect to the database
    const db = connection.db("imersao-instalike");

    //The collection variable is used to access the posts collection
    const collection = db.collection("posts");

    //The ObjectId class is used to create an object ID from a string
    const objectId = ObjectId.createFromHexString(id);

    //The updateOne method is used to update a post in the database
    return collection.updateOne({_id: new ObjectId(objectId)}, { $set: newPost });
}