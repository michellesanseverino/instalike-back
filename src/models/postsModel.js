import connectDB from "./src/config/dbConfig.js";

//Code to connect to the database using the MongoClient class from the mongodb package
const connection = await connectDB(process.env.STRING_CONNECTION);

//Code to create an array of posts from the database
export default async function getAllPosts(){
    //The connection variable is used to connect to the database
    const db = connection.db("imersao-instalike");
    //The collection variable is used to access the posts collection
    const collection = db.collection("posts");
    //The find method is used to return all posts from the database
    return collection.find().toArray();
}