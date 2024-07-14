import express from 'express'
import axios from 'axios';
import { API_KEY } from '../config';

const router = express.Router()

async function getData() {
    
    const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`;
  
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'axios'
        }
      });
      console.log(response.data);
    } catch (error:any) {
      if (error.response) {
        
        console.log('Status:', error.response.status);
        console.log('Error message:', error.message);
      } else {
        
        console.log('Error:', error.message);
      }
    }
}
  


router.get('/',async(req,res)=>{
    const TOP_GAINERS_LOSERS = await getData()
    
    res.send(TOP_GAINERS_LOSERS)
    
})


export default router