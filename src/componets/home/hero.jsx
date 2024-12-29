import NavBar from "./navbar";
import Chernobyl from "../../../public/Chenobylite.webp"
import HerosSearchBar from "./SearchBar";

export function Hero(){
    return(
        <>
            <div className=" bg-black h-[100vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${Chernobyl}`}}>
                <NavBar/>
                <HerosSearchBar/>
            </div>
        </>
    )
}