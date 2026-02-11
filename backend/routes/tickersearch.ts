import express from "express";
import axios from 'axios'
import { API_KEY } from "../config";


const router = express.Router()

// https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo

interface tickerstock{
    "1. symbol":string,
    "2. name":string,
    "3. type":string,
    "4. region":string,
    "5. marketOpen":string,
    "6. marketClose":string,
    "7. timezone":string,
    "8. currency":string,
    "9. matchScore":string
}
type tickerstocks = tickerstock[]


router.get("/",async(req,res)=>{
    const {keywords} = req.query

    const data = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`)
    
    const tickerstocks:tickerstocks = data.data.bestMatches
    
   

    // const names= tickerstocks.map((stock:tickerstock)=>{
    //     return {name:stock["2. name"],symbol:stock["1. symbol"],assetType:stock["3. type"],exchange:stock["4. region"]}
    // })  

    const names=
     [
        {
            "name": "Boeing Company",
            "symbol": "BA",
            "assetType": "Equity",
            "exchange": "United States"
        },
        {
            "name": "BAE Systems plc",
            "symbol": "BA.LON",
            "assetType": "Equity",
            "exchange": "United Kingdom"
        },
        {
            "name": "BA05",
            "symbol": "BA05.LON",
            "assetType": "Equity",
            "exchange": "United Kingdom"
        },
        {
            "name": "BA29",
            "symbol": "BA29.LON",
            "assetType": "Equity",
            "exchange": "United Kingdom"
        },
        {
            "name": "BA69",
            "symbol": "BA69.LON",
            "assetType": "Equity",
            "exchange": "United Kingdom"
        },
        {
            "name": "Brooks Automation Inc",
            "symbol": "BA3.FRK",
            "assetType": "Equity",
            "exchange": "Frankfurt"
        },
        {
            "name": "null",
            "symbol": "BAAPL",
            "assetType": "Equity",
            "exchange": "United States"
        },
        {
            "name": "Building America Strategy Port CDA USD Ser 21/1Q MNT CASH",
            "symbol": "BAAAAX",
            "assetType": "Mutual Fund",
            "exchange": "United States"
        },
        {
            "name": "Building America Strgy Portf CDA USD Ser 2022/2Q MNT CASH",
            "symbol": "BAAAFX",
            "assetType": "Mutual Fund",
            "exchange": "United States"
        },
        {
            "name": "Brompton Wellington Square AAA CLO ETF",
            "symbol": "BAAA.TRT",
            "assetType": "ETF",
            "exchange": "Toronto"
        }
    ]

    res.json({
        "bestMatches":names
    })
})




export default router