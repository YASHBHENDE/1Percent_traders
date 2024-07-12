import express, { Request, Response } from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

import signup from './auth/Signup'
import signin from './auth/Signin'
import {middleware} from './auth/middleware'
import news from './routes/news'
import TopGainerLoser from './routes/GainerLoser'
import fundementals from './routes/fundamentals'
import trail from './routes/trial'
import watchlists from './routes/watchlist'
import { PrismaClient } from '@prisma/client'
import sentiment from './routes/Sentiments'
import { createServer } from 'node:http';
import { Server } from 'socket.io';
const PORT = 3000

const app = express()
const server = createServer(app);
export const io = new Server(server,{
    cors: {
      origin: "http://localhost:5173"
    }
  });

io.on('connection', (socket) => {
    console.log('a user connected');


    socket.on("disconnect", (reason) => {
        console.log("disconnnected bro")
    });
});

  
const prisma = new PrismaClient()
app.use(cors());
app.use(bodyparser.json())

app.use('/auth/signup',signup)
app.use('/auth/signin',signin)

app.use('/news',middleware,news)
app.use('/GainerLoser',middleware,TopGainerLoser)
app.use('/fundamentals',middleware,fundementals)

app.use('/watchlist',middleware,watchlists)

app.use('/trial',middleware,trail)
app.use('/sentiment',middleware,sentiment)
app.get('/me',middleware,async(req:Request,res:Response)=>{
    const userId = req.headers.userId

   
    if(typeof userId === 'string'){
        
        const user =  await prisma.user.findUnique({
            where:{
                'id':userId
        }})

        if(user){
            const username:string = user?.username
            const email:string = user.email
            res.send({username:username,email:email})
        }
        
        
    }
    
})

io.listen(4000)
server.listen(PORT,()=>{
    console.log(`listeing on port ${PORT}`)
})