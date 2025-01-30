import NavBar from "../componets/home/navbar";
import HerosSearchBar from "../componets/home/SearchBar";
import HorrorPic from "../../public/horror-movie-villians.jpg"
import { useEffect, useState} from "react";
import urlHorror from "../config/urlhorror";

export default function Horror(){
    const [results, setResults] = useState([])
    const fetch = async () => {
        try{
            const res = await urlHorror("/popular?api_key=53325cf66b5d31cabd40720d50b34900")
            console.log(res)

            setResults(res.data.results)
        }
        catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        fetch()
    }, [])
    return(
        <div className="bg-black">
            <>
                <div className="ml-5 mr-5 mb-10 bg-black h-[100vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${HorrorPic}`, backgroundPosition:'50% 0%'}}>
                    <NavBar />
                    <HerosSearchBar/>
                </div>
            </>

            <div className="ml-5 mr-5 grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {
                    results.map((movie) => (
                        <div className="overflow-hidden bg-black items-center flex flex-col hover:scale-105" key={movie.id}>
                            <img className="object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <h2 className="text-white">{movie.title}</h2>
                        </div>
                    ) )
                }
             </div>

        </div>
    );
}
