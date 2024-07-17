// packages - external modules
import express from "express";
import morgan from "morgan";
//native modules
import {createWriteStream} from "fs";
import {dirname} from "node:path";
import path from "node:path"
import { fileURLToPath } from "node:url";

// creating path using dirname and fileURLToPath modules
let __dirname = dirname(fileURLToPath(import.meta.url));

// server and PORT 
let server = express();
let PORT = 3001;

let accessLogStream = createWriteStream(path.join(__dirname, 'access.log')); // Creating a writable stream to log the data.

// Using morgan middleware to log the data into access.log file using a stream
server.use(morgan(":remote-addr -:remote-user [:date[clf]] :method :url HTTP/:http-version :status :res[content-length] :response-time ms", { stream: accessLogStream }))

// API endpoint to get request.
server.get("/",(req,res)=>{
    res.status(200).send("Data fetched successfully")
})

// API endpoint to get users data .
server.get("/get-users",(req,res)=>{
    res.status(200).send("Data fetched successfully")
})

// API endpoint to post users data .
server.post("/add-users",(req,res)=>{
    res.status(201).send("Data added successfully")
})

// API endpoint to replace user data .
server.put("/user/:id",(req,res)=>{
    res.status(200).send("Data added successfully")
})

// API endpoint to delete user .
server.delete("/user/:id",(req,res)=>{
    res.status(200).send("Data deleted successfully")
})

// server is listening at port 3001.
server.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`);
})