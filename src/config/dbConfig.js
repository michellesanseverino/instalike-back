/* Code to connect to the database using the MongoClient class from the mongodb package
The connectDB function receives a string with the connection URL and returns a MongoClient object
The function is an async function that connects to the database and returns the MongoClient object
If an error occurs, the function logs the error and returns undefined
The function is exported as the default export
The function is called with the connection URL in the index.js file
The MongoClient class is imported from the mongodb package*/

import { MongoClient } from "mongodb";

export default async function connectDB(stringConnection) {
    let mongoClient;
    try {
        mongoClient = new MongoClient(stringConnection);
        console.log('Connecting to database');
        await mongoClient.connect();
        console.log('Connected to MongoDB Atlas');

        return mongoClient;
    } catch (error) {
        console.error('Error connecting to database', error);
    }
}

