import { useNavigate } from 'react-router-dom';
import { Button } from '../../src/ShadcnCompoenent/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ShadcnCompoenent/ui/card';
import img from '../assets/icons8-news-96.png'
import img2 from '../assets/icons8-meter-96.png'
import img3 from '../assets/icons8-stock-96.png'

export default function LandingPage() {
    const navigate = useNavigate();
    return <>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px' }}>
            <div style={{ flex: 1, marginRight: '20px',padding:'3vh' }}>
                <center>
                    <h2 style={{marginBottom:'5vh'}}>
                        Welcome to 1% Trader - Your Gateway to Informed Trading!
                    </h2>  
                </center>
                  
                Are you ready to elevate your trading business and join the ranks of the top 1% of traders who consistently outperform the market? At 1% Trader, we're dedicated to providing you with the latest news, real-time market sentiments, and in-depth fundamentals of stocks to empower your trading decisions.
                
            </div>
            <div>
                <img src="https://i.ibb.co/jkXM7NH/pic12.jpg" alt="foto" style={{ width: '350px', borderRadius: '8px' }} />
            </div>
        </div>
        <hr />

        
       
        <div style={{display:'flex',}}>

                    
            <Card className="w-[33%] h-[200px]">
                <CardHeader>
                    <CardTitle><center>Latest News</center></CardTitle>
                </CardHeader>
                <CardContent>
                    <center>
                        <img src={img} alt="" />
                    </center>
                </CardContent>
            </Card>
                        
            <Card className="w-[33%] h-[200px]">
                <CardHeader>
                        <CardTitle><center>Market Sentiments</center> </CardTitle>
                </CardHeader>
                <CardContent>
                    <center>
                        <img src={img2} alt="" />
                    </center>
                </CardContent>
            </Card>
                    
            
            <Card className="w-[33%] h-[200px]">
                <CardHeader>
                    <CardTitle><center>Stock fundamentals</center></CardTitle>
                </CardHeader>
                <CardContent>
                    <center>
                        <img src={img3} alt="" />
                    </center>
                </CardContent>
            </Card>
                    
                
        </div>

        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between',padding:'4vh' }}>
            <div>
                <img src="https://i.ibb.co/7Q2MVHm/pic21.jpg" alt="foto" style={{ width: '350px', margin: '10px', borderRadius: '8px' }} />
            </div>
           
            <div style={{marginRight:'21vh',marginTop:'18vh'}}>
                <h3>
                    Begin your journey for free!
                    <br /><br />
                    <Button  onClick={() => navigate("/signup")}>Sign up</Button>
                </h3>
            </div>
            
        </div>
    </>
    
}
