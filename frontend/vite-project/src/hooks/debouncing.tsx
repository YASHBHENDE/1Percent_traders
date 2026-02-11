import { useEffect, useState } from "react"

export default function useDebouncing(value:string,time:number){

    const [debouncedValue,setDebounceValue] = useState("")

    useEffect(()=>{
        const timer  = setTimeout(() => {
            setDebounceValue(value)
        }, time);

        return ()=>{clearTimeout(timer)}
    },[value,time])

    return debouncedValue

}