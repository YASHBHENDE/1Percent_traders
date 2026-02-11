import express from "express";
import axios from 'axios'
const router = express.Router()
import { API_KEY } from "../config";
async function getData() {
   
    const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${API_KEY}`;
  
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'axios'
        }
      });
      return (response.data);
    } catch (error:any) {
      if (error.response) {
        console.log('Status:', error.response.status);
      } else {
        console.log('Error:', error.message);
      }
    }
  }

router.get('/',async(req,res)=>{
  const news =  await getData()
  
  res.send({news})

})


export default router