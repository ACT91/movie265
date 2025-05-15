import NavBar from "../componets/home/navbar";
import HerosSearchBar from "../componets/home/SearchBar";
import after from "../../public/after.jpg";

export default function Romance() {
    return (
        <div
            className="relative min-h-screen bg-black bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${after})`, backgroundPosition: '50% 0%' }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
            <div className="relative z-10">
                <NavBar />
                <div className="flex flex-col items-center justify-center min-h-[80vh] px-2 sm:px-6">
                    <HerosSearchBar />
                </div>
            </div>
        </div>
    );
}
