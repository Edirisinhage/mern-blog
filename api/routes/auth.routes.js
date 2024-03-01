import express from "express";
import {signup} from '../controllers/signup.controller.js';

const authrouter=express.Router();

authrouter.post('/sign',signup);

export default authrouter;