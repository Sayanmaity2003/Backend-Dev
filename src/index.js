// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
const PORT = process.env.PORT || 8000

//Connect MongoDB from writing DB connection code on db folder
connectDB() //it returns a promise
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server is listenin on PORT: ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("DB Connection FAILED: !!!", e);
  });






























  //Connect MongoDB directly from index.js
/*
import express from "express";
const app =express();

;( async()=> { //IIFE
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port: ${process.env.PORT}`)
        })
    }catch(error){
        console.error("Error", error)
        throw error
    }
} )()
*/
