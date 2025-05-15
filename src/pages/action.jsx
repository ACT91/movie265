import NavBar from "../componets/home/navbar";
import HerosSearchBar from "../componets/home/SearchBar";
import ActionPic from "../../public/action.jpg";

export default function Action() {
    return (
        <div
            className="relative min-h-screen bg-black bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${ActionPic})`, backgroundPosition: 'center 10%' }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
            <div className="relative z-10 flex flex-col min-h-screen">
                <NavBar />
                <div className="flex flex-1 flex-col items-center justify-center px-2 sm:px-6">
                    <HerosSearchBar />
                </div>
            </div>
        </div>
    );
}