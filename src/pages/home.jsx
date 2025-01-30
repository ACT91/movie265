import axios from "axios";
import { Hero } from "../componets/home/hero";
import { useEffect } from "react";
import urlFetcher from "../config/urlfetcher";

export default function Home(){

    const fetcher = async () => {
        try{
            const res = await urlFetcher("/popular?api_key=ce409c66e36935042e91958e34df5d11")
            console.log(res)
        }
        catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        fetcher()
    }, [])
    return(
        <>
            <Hero/>
        </>
    )
}