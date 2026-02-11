import express from "express";
import axios from 'axios'
import { API_KEY } from "../config";


const router = express.Router()

// https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo
router.get("/",async(req,res)=>{
    const {keywords} = req.query

    const data = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`)
    
    res.json({
        "bestMatches":data.data.bestMatches
    })
})




export default router