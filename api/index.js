import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// HELLO 
mongoose.connect(process.env.MONGO).then(() =>{
    console.log("connected to Mongodb");
    
}).catch((err) => {
    
    console.log("Error: " + err );
});


const app = express();

app.listen(3000, () => {
    console.log("Sever is running on port 3000!!!")
});