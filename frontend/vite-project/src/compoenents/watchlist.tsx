/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../ShadcnCompoenent/ui/button";
import { useNavigate } from "react-router-dom";
import { stockType } from "./stocks";

interface Datatype {
    id: string;
    stocks: string;
    userId: string;
}

export default function Watchlist() {
    const [stocks, setStocks] = useState<Datatype[]>([]);
   
    
    const navigate = useNavigate();

    async function getData() {
        try {
            const response = await axios.get("http://localhost:3000/watchlist/get", {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            setStocks(response.data);
        } catch (err: any) {
           console.log(err)
        } 
    }

    useEffect(() => {
        getData();
    }, []);

    async function handleDelete(id: string) {
        
        try {
            await axios.delete('http://localhost:3000/watchlist/delete', {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
                data: {
                    stock_id: id
                }
            });
            setStocks((prevStocks) => prevStocks.filter((ele: Datatype) => ele.id !== id));
        } catch (err: any) {
            console.log("Failed to delete stock");
        }
    }

    return (
        <center style={{marginTop:'27vh'}}>
            <h2 style={{marginBottom:'3vh'}}>Your Watchlist</h2>
        <div>
            {stocks.length > 0 ? (
                <div>
                    {stocks.map((stock:Datatype)=>{
                        return<>
                            <Button variant='link' onClick={()=>{navigate(`/stockFundamentals/${stock.stocks}`)}}>{stock.stocks}</Button>
                            <Button onClick={()=>{handleDelete(stock.id)}} variant='destructive' style={{marginLeft:'4vh',marginBottom:'3vh'}}>delete</Button> <br />
                        </>
                    })}
                </div>
            ) : (
                <p>No stocks in the watchlist</p>
            )}
        </div>
        </center>
    );
}
