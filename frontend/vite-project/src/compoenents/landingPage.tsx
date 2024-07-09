import { useNavigate } from 'react-router-dom';
import { Button } from '../../src/ShadcnCompoenent/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ShadcnCompoenent/ui/card';


export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px', alignItems: 'center' }}>
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <h5 style={{ margin: 0 }}>
                        Welcome to 1% Trader - Your Gateway to Informed Trading!
                        <br /><br />
                        Are you ready to elevate your trading business and join the ranks of the top 1% of traders who consistently outperform the market? At 1% Trader, we're dedicated to providing you with the latest news, real-time market sentiments, and in-depth fundamentals of stocks to empower your trading decisions.
                    </h5>
                </div>
                <div>
                    <img src="https://i.ibb.co/jkXM7NH/pic12.jpg" alt="foto" style={{ width: '350px', borderRadius: '8px' }} />
                </div>
            </div>
            <hr />
           <center><h4>features</h4></center>
            <div style={{display:'flex'}}>

                    
                    <Card className="w-[33%] h-[200px]">
                        <CardHeader>
                            <CardTitle>Latest news</CardTitle>
                        </CardHeader>
                        <CardContent>
                            
                        </CardContent>
                    </Card>
                    
                

              
                    <Card className="w-[33%] h-[200px]">
                        <CardHeader>
                            <CardTitle>Market Sentiment</CardTitle>
                        </CardHeader>
                        <CardContent>
                        news ICon
                        </CardContent>
                    </Card>
                

               
                    <Card className="w-[33%] h-[200px]">
                        <CardHeader>
                            <CardTitle>Stock Fundamentals</CardTitle>
                        </CardHeader>
                        <CardContent>
                         news ICon
                        </CardContent>
                    </Card>
                    
                
            </div>

            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px', alignItems: 'center' }}>
                <div>
                    <img src="https://i.ibb.co/7Q2MVHm/pic21.jpg" alt="foto" style={{ width: '350px', margin: '10px', borderRadius: '8px' }} />
                </div>
                <div style={{ flex: 1, marginLeft: '20px' }}>
                    <h3>
                        Begin your journey for free!
                        <br /><br />
                        <Button variant='link' onClick={() => navigate("/signup")}>Sign up</Button>
                    </h3>
                </div>
            </div>
        </>
    );
}
