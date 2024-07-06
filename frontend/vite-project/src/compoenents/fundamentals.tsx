import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "../ShadcnCompoenent/ui/skeleton";
import { fundamentalType } from "./stocks";
import { Button } from "../ShadcnCompoenent/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/ShadcnCompoenent/ui/table";


export default function Fundamentals() {
    const [fundamentals, setFundamentals] = useState<fundamentalType>();

    const [loading,setLoading] = useState<boolean>(true)
    const { symbol } = useParams();

    async function getFundamentals(tickername: string | undefined) {
        const response = await axios.post('http://localhost:3000/fundamentals', {
            "stockname": tickername
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).finally(()=>{
            setLoading(false)
        })
        console.log(response.data)
        if(response.data.Information || response.data == undefined || response.data == null){
            setLoading(true)
        }else{
            setFundamentals(response.data);
        }
    }

    useEffect(() => {
        getFundamentals(symbol);
    }, []);

    const addstock = async(name: string) => {
        console.log(name)
        const response = await axios.post('http://localhost:3000/watchlist/post', {
            "stockName": name
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })

        console.log(response.data)
    }

    if(loading){
        return <>
            <Skeleton  className="h-4 w-[100%] h-40"/> <br />
            <Skeleton  className="h-4 w-[100%] h-80"/>  <br />
            <Skeleton  className="h-4 w-[100%] h-20"/>
        </>
    }
    if(fundamentals) {
        return (
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h1>{fundamentals?.Name}</h1>
                    <Button variant='secondary' onClick={() => { addstock(fundamentals.Symbol) }}>Add to watchlist</Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Attribute</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Market Capitalization</TableCell>
                            <TableCell>{fundamentals?.MarketCapitalization}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>52 Week High</TableCell>
                            <TableCell>{fundamentals?.["52WeekHigh"]}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>52 Week Low</TableCell>
                            <TableCell>{fundamentals?.["52WeekLow"]}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>PE Ratio</TableCell>
                            <TableCell>{fundamentals?.PERatio}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>EPS</TableCell>
                            <TableCell>{fundamentals?.EPS}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>ROE</TableCell>
                            <TableCell>{fundamentals?.ReturnOnEquityTTM}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Profit Margin</TableCell>
                            <TableCell>{fundamentals?.ProfitMargin}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Operating Margin</TableCell>
                            <TableCell>{fundamentals?.OperatingMarginTTM}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <h2 style={{ marginTop: '20px' }}>About the company:</h2>
                <p>{fundamentals?.Description}</p>
            </div>
        )
    }

    
}
