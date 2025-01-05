import NavBar from "../componets/home/navbar";
import HerosSearchBar from "../componets/home/SearchBar";
import after from "../../public/after.jpg"

export default function Romance(){
    return(
        <>
             <div className=" bg-black h-[100vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${after}`, backgroundPosition:'50% 0%'}}>
                <NavBar />
                <HerosSearchBar/>
             </div>
        </>
    )
}
