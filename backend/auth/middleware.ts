import exxpress, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { SECRET } from '../config'

export const middleware = (req:Request,res:Response,next:NextFunction)=>{
   
    const authheader = req.headers.authorization
   
    if(authheader){
        
        const token  = authheader.split(' ')[1]
        
        jwt.verify(token,SECRET,(err,payload)=>{
            if(err){
                res.status(403).send({"message":"error occured"})
            }
            if(!payload){
                return res.sendStatus(403);
            }
            if(typeof payload === 'string'){
                return res.sendStatus(403);
            }

            req.headers['userId'] = payload.userId
            
            next()
        })
        
    }
}

