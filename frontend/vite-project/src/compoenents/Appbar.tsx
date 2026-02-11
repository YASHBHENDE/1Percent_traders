import { useNavigate } from "react-router-dom";
import { Button } from "../ShadcnCompoenent/ui/button";
import { useRecoilValue } from "recoil";
import { userState } from "../store";
import UserNav from "./uer-nav";
import { Input } from "@/ShadcnCompoenent/ui/input";
import { ModeToggle } from "../ShadcnCompoenent/mode-toggle";
import { useState } from "react";
import stocks, { SearchStocks, stockType } from "./stocks"; 


export default function Appbar() {
    const [stockName, setStockName] = useState<SearchStocks>([]);
    const [isListHidden, setIsListHidden] = useState(false); 

    const user = useRecoilValue(userState);
    const navigate = useNavigate();



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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const stock = e.target.value
                                
                                if(e.target.value){
                                    const filteredStocks: SearchStocks = stocks.filter((ele: stockType) => {
                                        return ele.name.toLowerCase().includes(stock.toLowerCase());
                                    });
                                    setStockName(filteredStocks);
                                    setIsListHidden(false); // Show the list when typing in the input again
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
                                    setIsListHidden(true); // Hide the list after clicking a stock
                                    setStockName([]); // Clear the search results after clicking a stock
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
