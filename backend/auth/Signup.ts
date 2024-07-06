import  express  from "express";
import { User } from "../db";
import jwt from 'jsonwebtoken'
const router = express.Router()
import { PrismaClient } from '@prisma/client'
import { SECRET } from "./middleware";
import {z} from 'zod'

const prisma = new PrismaClient()


interface InputType{
    email:string,
    username:string,
    password:string
}

const userInput = z.object({
    email: z.string().min(5).max(80),
    username: z.string().min(3),
    password:z.string().min(5)
})

router.post('/',async(req,res)=>{
    const {email,username,password}:InputType = req.body;

    const validation = userInput.safeParse({email:email,username:username,password:password})

    if(!validation.success){
        res.send({"msg":"username should be minimum (3) characters and password should be minnimum of (5) characters"})
    }else{
    // const usernameExists = await User.findOne({username:username})
    const usernameExists = await prisma.user.findFirst({
        where:{
            username:username
        }
    })
    // const emailExits = await User.findOne({email:email})

    const emailExits = await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    
    
    if(emailExits){
        res.send({"UserExists":"user already exists , please signin"})
       
    }else if( usernameExists){
        res.send({"usernameExists":"User name already exists, pls choose another username"}) 
    }else{
        // const newUser = await User.create({'username':username,'password':password,'email':email})
        // newUser.save()

        const newUser = await prisma.user.create({
            data:{
                username:username,
                password:password,
                email:email
            }
        })
        


        const token = jwt.sign({'userId':newUser.id},SECRET)
        res.send({"message":"user created succcessfully","token":token})
    }}

})


export default router