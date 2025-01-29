import NavBar from "../componets/home/navbar";
import HerosSearchBar from "../componets/home/SearchBar";
import HorrorPic from "../../public/conjuring.png"
// import { useEffect, useState } from "react";
// import urlHorror from "../config/urlhorror";

export default function Horror(){
    // const [results, setResults] = useState([])
    // const fetch = async () => {
    //     try{
    //         const res = await urlHorror("/popular")
    //         console.log(res.page.results)

    //         setResults(res.page.results)
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }


    // useEffect(()=>{
    //     fetch()
    // }, [])
    return(
        <div>
            <>
                <div className=" bg-black h-[100vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${HorrorPic}`, backgroundPosition:'50% 0%'}}>
                    <NavBar />
                    <HerosSearchBar/>
                </div>
            </>

            {/* <div>
                {
                    results.map((movie) => (
                        <div key={movie.id}>
                            <h2>{movie.title}</h2>
                            <img src={movie.poster_path}/>
                        </div>
                    ) )
                }
             </div> */}

        </div>
    );
}
