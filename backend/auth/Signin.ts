import  express  from "express";

import jwt from 'jsonwebtoken'
const router = express.Router()
import { DATABASE_URL, SECRET } from '../config';
import { PrismaClient } from '@prisma/client'
import { z } from "zod";
const prisma = new PrismaClient()


interface input{
    email:string,
    password:string
}

const userInput = z.object({
    email: z.string().min(5).max(80),
    password:z.string().min(5)
})
router.post('/',async (req,res)=>{
    const {email,password}:input = req.body;
    

    const validation = userInput.safeParse({email:email,password:password})

    if(validation.success){
        
        
            
        const UserExists = await prisma.user.findUnique({
            where:{
                email:email,
                password:password
            }
        })

        if(UserExists){
            const token = jwt.sign({'userId':UserExists.id},SECRET)
            res.send({"message":"logged in success fully","token":token})
        }else{
            res.status(403).send({"message":"invalid credentials"})
        }
        
    }else{
        res.send({"msg":"password should be minium (5) characters"})
    }
})

export default router