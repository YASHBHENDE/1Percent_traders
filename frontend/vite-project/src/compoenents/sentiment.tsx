import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { socket } from "../socket";
import axios from "axios";

export default function Sentiment() {
    const [needle, setNeedle] = useState<number>(0);

    
    function updateNeedle(sentimentValue: number) {
        
        switch (sentimentValue) {
            case 1:
                setNeedle(45);
                break;
            case 2:
                setNeedle(275);
                break;
            case 3:
                setNeedle(650);
                break;
            case 4:
                setNeedle(1000);
                break;
            default:
                setNeedle(0);
                break;
        }
    }
    useEffect(() => {
        async function fetchSentiment() {
            try {
                const response = await axios.get("http://localhost:3000/sentiment",{
                    headers:{
                        Authorization:localStorage.getItem('token')
                    }
                }); 

                
                updateNeedle(response.data.sentiment_value);
            } catch (error) {
                console.error("Error fetching sentiment data:", error);
            }
        }
        
        fetchSentiment();


        socket.on('sentiment changed', (newSentimentValue: number) => {
            console.log("Received new sentiment value via socket:", newSentimentValue); 
            updateNeedle(newSentimentValue);
        });
        
        return () => {
            socket.off('sentiment changed');
        };
    }, []);

   

    return (
        <>
            <h1>Sentiment</h1>
            <center style={{ marginTop: '25vh' }}>
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
    );
}
