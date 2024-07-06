import axios from "axios";
import express from "express";
import { API_KEY } from "../config";


const router = express.Router()

async function getData(stockname:string) {
  
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockname}&apikey=${API_KEY}`;
  
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'axios'
        }
      });
      return (response.data);
    } catch (error:any) {
      if (error.response) {
        // Axios error
        console.log('Status:', error.response.status);
        console.log('Error message:', error.message);
      } else {
        // Generic error
        console.log('Error:', error.message);
      }
    }
  }

router.post('/',async(req,res)=>{
    const {stockname} = req.body
    const fundamentals = await getData(stockname)
    res.send(fundamentals)
})



export default router