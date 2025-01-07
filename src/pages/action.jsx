import NavBar from "../componets/home/navbar";
import HerosSearchBar from "../componets/home/SearchBar";
import ActionPic from "../../public/action.jpg";

export default function Action(){
    return(
        <>
            <div className=" bg-black h-[100vh] bg-no-repeat bg-cover" style={{backgroundImage: `url(${ActionPic}`, backgroundPosition:'50% 0%'}}>
                <NavBar />
                <HerosSearchBar/>
            </div>
        </>
    )
}