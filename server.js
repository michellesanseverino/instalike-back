// Code to create a server using the Express framework and connect to the database using the MongoClient class from the mongodb package
import express, { Router } from "express"
import routes from "./src/routes/postsRoutes.js";

//Code to create an Express application
const app = express();
app.use(express.static("uploads"));
routes(app);

//Code to create a server that listens on port 3000
app.listen(3000, () => {
    console.log("Server listening...");
});