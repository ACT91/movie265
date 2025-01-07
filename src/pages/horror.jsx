import NavBar from "../componets/home/navbar";
import HerosSearchBar from "../componets/home/SearchBar";
import HorrorPic from "../../public/horror_pic.jpeg"

export default function Horror(){
    return(
        <>
             <div className=" bg-black h-[100vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${HorrorPic}`, backgroundPosition:'50% 0%'}}>
                <NavBar />
                <HerosSearchBar/>
             </div>
        </>
    )
}
