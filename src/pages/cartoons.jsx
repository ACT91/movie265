import NavBar from "../componets/home/navbar";
import HerosSearchBar from "../componets/home/SearchBar";
import KungfuPanda from "../../public/kungfu_panda.jpg"

export default function Cartoons(){
    return(
        <>
             <div className=" bg-black h-[100vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${KungfuPanda}`, backgroundPosition:'50% 0%'}}>
                <NavBar />
                <HerosSearchBar/>
             </div>
        </>
    )
}
