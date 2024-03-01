import express from 'express'
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js';
import {  mongoURL } from '../config.js';

mongoose.connect(mongoURL).then(
    ()=>{
        console.log("Database is connected");
    }
).catch((err)=>{
    console.log(err);
});

const app=express();

app.use(express.json());




app.use('/api/user',userRoutes);

app.use('/api/auth',authRouter);


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

//create middleware and function for handle errors

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500;
    const message=err.message || 'Internal server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })

})