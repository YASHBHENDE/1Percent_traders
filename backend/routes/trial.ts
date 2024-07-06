import express from 'express'

const router = express.Router()


router.get('/',(req,res)=>{
    const userId = req.headers.userId
    
    res.send({"msg":userId})
})


export default router