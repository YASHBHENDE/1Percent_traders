import axios from "axios"
import { useEffect, useState } from "react"
import ReactSpeedometer from "react-d3-speedometer"





export default function Sentiment(){
  
    const [needle,setNeedle] = useState<number>(0)

    async function getSentiments(){
        const response = await axios.get('http://localhost:3000/sentiment',{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })

        
        switch (response.data.sentiment_value) {
            case 1:
                setNeedle(45)
                break;
            case 2 :
                setNeedle(275)
                break
            case 3 :
                setNeedle(650)
                break
            case 4:
                setNeedle(1000)
                break
            default:
                setNeedle(0)
                break;
        }
        
    }
    useEffect(()=>{
        setInterval(()=>{
            getSentiments()
        },2000)
    },[])

    
    return<>
        <h1>Sentiment </h1>
        
        <center style={{marginTop:'25vh'}}>
            <ReactSpeedometer
                value={needle}
                currentValueText="Market sentiment"
                customSegmentLabels={[
                    {
                        text: "verybearish",
                        position: "OUTSIDE",
                        color: "#555",
                    },
                    {
                        text: "bearish",
                        position: "OUTSIDE",
                        color: "#555",
                    },
                    {
                        text: "neutral",
                        position: "OUTSIDE",
                        color: "#555",
                        fontSize: "19px",
                    },
                    {
                        text: "mildbullish",
                        position: "OUTSIDE",
                        color: "#555",
                    },
                    {
                        text: "bullish",
                        position: "OUTSIDE",
                        color: "#555",
                    },
            ]}
            />
        </center>
    </>
}