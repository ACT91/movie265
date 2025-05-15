import NavBar from "./navbar";
import Chernobyl from "../../../public/Chenobylite.webp";
import HerosSearchBar from "./SearchBar";

export function Hero() {
    return (
        <div
            className="relative min-h-screen bg-black bg-no-repeat bg-cover bg-center flex flex-col"
            style={{ backgroundImage: `url(${Chernobyl})` }}
        >
            {/* Optional: Overlay for better contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
            <div className="relative z-10">
                <NavBar />
                <div className="flex flex-col items-center justify-center h-[80vh] px-2 sm:px-6">
                    <HerosSearchBar />
                </div>
            </div>
        </div>
    );
}