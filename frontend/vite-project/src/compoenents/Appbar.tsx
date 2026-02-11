import { useNavigate } from "react-router-dom";
import { Button } from "../ShadcnCompoenent/ui/button";
import { useRecoilValue } from "recoil";
import { userState } from "../store";
import UserNav from "./uer-nav";
import { Input } from "@/ShadcnCompoenent/ui/input";
import { ModeToggle } from "../ShadcnCompoenent/mode-toggle";
import { useEffect, useState } from "react";

import axios from "axios";
import useDebouncing from "../hooks/debouncing";


interface stockdisplay{
    name:string,
    symbol:string,
    assetType:string,
    exchange:string
}
export default function Appbar() {
    const [stockName, setStockName] = useState<stockdisplay[]>([]);
    const [isListHidden, setIsListHidden] = useState(false); 
    const [search,setsearch] = useState("")
    const debouncedValue = useDebouncing(search,3000)

    const user = useRecoilValue(userState);
    const navigate = useNavigate();
        
    



    async function tickerSearch() {
        
        const Stocks = await axios.get(`http://localhost:3000/tickerSearch?keywords=${debouncedValue}`)
        const filteredStocks:{bestMatches:stockdisplay[]} =Stocks.data 
        console.log(filteredStocks)
        setStockName(filteredStocks.bestMatches);
        setIsListHidden(false); 
    }

    useEffect(()=>{
        tickerSearch()
    },[debouncedValue])

    if (user.username) {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vh' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="link" onClick={() => { navigate('/home') }}>1% traders</Button>
                        <Input
                            type="search"
                            placeholder="stock..."
                            className="md:w-[100px] lg:w-[300px]"
                            onChange={async(e: React.ChangeEvent<HTMLInputElement>) => {
                               
                                
                                if(e.target.value){
                                    setsearch(e.target.value)
                                    
                                }else{
                                    setStockName([])
                                }
                            }}
                        />
                         <Button variant='link' onClick={() => { navigate('/watchlist') }} style={{marginLeft:'4vh'}}>Watchlist</Button>
                         <Button variant='link' onClick={() => { navigate('/sentiment') }} style={{marginLeft:'4vh'}}>Global sentiment</Button>
                    </div>

                    <div>
                        <span style={{ marginRight: '3vh' }}>
                            <ModeToggle />
                        </span>
                        <UserNav />
                    </div>
                </div>

                <span>
                    <ul id="ul" style={{ display: isListHidden ? 'none' : 'block' }}>
                        {stockName.map((ele) => (
                            <li key={ele.name}>
                                <Button variant="link" onClick={() => {
                                    navigate(`/stockFundamentals/${ele.symbol}`);
                                    setIsListHidden(true); 
                                    setStockName([]); 
                                }}>
                                    {ele.name}
                                </Button> {ele.exchange} {ele.assetType}
                            </li>
                        ))}
                    </ul>
                </span>
            </>
        );
    } else {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2vh' }}>
                    <div>
                        <Button variant="link" onClick={() => { navigate('/') }}>1% traders</Button>
                    </div>
                    <div>
                        <ModeToggle />
                        <Button onClick={() => { navigate('/signin') }} style={{ marginRight: '2vh', marginLeft: '2vh' }}>signin </Button>
                        <Button onClick={() => { navigate('/signup') }}>signup </Button>
                    </div>
                </div>
            </>
        );
    }
}
