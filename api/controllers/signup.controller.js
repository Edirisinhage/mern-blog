import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js";
import bcrypt from 'bcryptjs'

export const signup=async(req,res,next)=>{
    console.log(req.body);
    const {username,email,password}=req.body;

    if(!username||!email||!password||username===""||email===""||password===""){
         // res.status(400).json({message:"Fields are required"}) 
         return next(errorHandler(400,'All fields are required'))

    }

    const hashPassword=bcrypt.hashSync(password,10);

    const newUser=new User({
        username,
        email,
        password:hashPassword,
    })
    
    try{
        await newUser.save();
        res.json('Sign up successfully');
    }catch(err){
        next(err);
    }
   
}