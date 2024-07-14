import express from "express"
import { io } from "../server"
const router = express.Router()

function MARKET_STATUS(){
    const american_market = (1)
    const china_market = (1)
    const rusian_market = (2)
    const indian_market = (3)

    const avg_chg = (american_market + china_market + rusian_market+ indian_market)/4

    let sentiment:String;
    let sentiment_value:number;
    // sentiment value |    sentiment
    //
    //       4              verybulish
    //       3              mildbullish                 
    //       2              mild bearish
    //       1              verybearish
    
    if (avg_chg>0 && avg_chg<1){
        sentiment = "mild bullish"
        sentiment_value = 3

    }else if(avg_chg>1 && avg_chg<100){

        sentiment = "very bullish"
        sentiment_value = 4

    }else if(avg_chg<0 && avg_chg>(-0.5)){
        sentiment = "mild bearish"
        sentiment_value = 2
    }else{
        sentiment = "very bearish"
        sentiment_value = 1
    }

    return {sentiment,sentiment_value,american_market,china_market,rusian_market,indian_market}
}

router.get("/", (req, res) => {
    const avgChange = MARKET_STATUS();
    console.log(avgChange)
    // for testing 
    // setInterval(()=>{
    //     let random = Math.floor(Math.random()*4)
    //     io.emit('sentiment changed', random)
    // },3000)

    io.emit('sentiment changed', avgChange.sentiment_value);
    res.status(200).json(avgChange);
});
  

export default router