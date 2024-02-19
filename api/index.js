import express from 'express'
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://1234:1234@mern-blog.d9h4ohy.mongodb.net/mern-blog?retryWrites=true&w=majority').then(
    ()=>{
        console.log("Database is connected");
    }
).catch((err)=>{
    console.log(err);
});

const app=express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});