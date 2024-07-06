import axios from "axios";
import { useEffect, useState } from "react"
import { Button } from "@/ShadcnCompoenent/ui/button"
import { Skeleton } from "@/ShadcnCompoenent/ui/skeleton"
interface News {
    title: string;
    url: string;
    time_published: string;
    authors: string[];
    summary: string;
    banner_image: string | null;
    source: string;
    category_within_source: string;
    source_domain: string;
    topics: Topic[];
    overall_sentiment_score: number;
    overall_sentiment_label: string;
    ticker_sentiment: TickerSentiment[];
}

interface Topic {
    topic: string;
    relevance_score: string;
}

interface TickerSentiment {
    ticker: string;
    relevance_score: string;
    ticker_sentiment_score: string;
    ticker_sentiment_label: string;
}


export default function HomePage(){
    const [news,setNews] = useState<News[]>([])
    
    const [RequestExceed,setRequestExceed] = useState<string>('')
    
    const [loading,setLoading] = useState<boolean>(true)

    async function GetNews(){
        const response = await axios.get('http://localhost:3000/news',{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        }).finally(()=>{
            setLoading(false)
        })
        if(response.data.news.Information || response.data == undefined || response.data == null){
            setLoading(true)
        }else{
            setNews(response.data.news.feed)
        }
    }
    useEffect(()=>{
        GetNews()
    },[])

    
    
    if(loading){
       return <><SkeletonCard/></>
    }else if(news.length > 0){
        return<>
            
            
            <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
                {news.map((SingleNew, index) => (
                    <div 
                    key={index} 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        marginBottom: '20px', 
                        padding: '10px', 
                        border: '1px solid #ddd', 
                        borderRadius: '5px', 
                        backgroundColor: '#f9f9f9',
                        overflow: 'hidden'
                    }}
                    >
                    <div style={{ flex: 1, paddingRight: '10px', maxWidth: '80%' }}>
                        <p style={{ color: '#555' }}>{SingleNew.authors.join(', ')}</p>
                        <h3 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <Button 
                            variant="link" 
                            onClick={() => window.open(SingleNew.url, '_blank')} 
                            style={{ 
                            padding: 0, 
                            textDecoration: 'none', 
                            fontSize: '20px', 
                            color: '#007bff' 
                            }}
                        >
                            {SingleNew.title}
                        </Button>
                        </h3>
                        <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {SingleNew.summary}
                        </p>
                    </div>
                    {SingleNew.banner_image && (
                        <div>
                        <img 
                            src={SingleNew.banner_image} 
                            alt="banner_img" 
                            style={{ 
                            height: '100px', 
                            width: '100px', 
                            borderRadius: '5px', 
                            marginLeft: '10px' 
                            }} 
                        />
                        </div>
                    )}
                    </div>
                ))}
            </div>

        </>
    }else{
        return <>
            <SkeletonCard/>
        </>
    }
}

function SkeletonCard() {
    
    return<>
        <Skeleton className="h-4 w-[100%] h-28" /> <br />
        <Skeleton className="h-4 w-[100%] h-28" /> <br />
        <Skeleton className="h-4 w-[100%] h-28" /> <br />
        <Skeleton className="h-4 w-[100%] h-28" /> <br />
    </>
        
    
}