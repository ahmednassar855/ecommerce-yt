import express from "express";
import { login, register , testController} from "./auth.controller.js";
import { isAdmin, requireSignIn } from './../../middleware/auth.middleware.js';

// router object
const authRouter = express.Router()

// routing
authRouter.post('/register' , register)
authRouter.post('/login' , login)
// protected routes
authRouter.get('/user-auth' , requireSignIn , (req , res) => {
    res.status(200).send({ ok : true })
}) 
// test route
authRouter.get('/test' ,  requireSignIn , isAdmin ,testController)


export default authRouter