export default function HerosSearchBar() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col justify-center items-center text-white w-full max-w-2xl mx-auto bg-black bg-opacity-80 backdrop-blur-sm mt-8 rounded-3xl py-8 space-y-4
                sm:py-10 sm:space-y-5
                md:py-12 md:space-y-6
                lg:py-16 lg:space-y-7">
                <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl">Movie265</h1>
                <div className="flex w-full px-1 sm:px-4">
                    <input
                        className="bg-black text-white text-base sm:text-lg lg:text-xl h-12 sm:h-14 lg:h-16 w-3/4 sm:w-4/5 placeholder:text-base pl-3 rounded-tl-lg rounded-bl-lg focus:outline-none"
                        placeholder="Search your favourite"
                    />
                    <button className="bg-red-800 h-12 sm:h-14 lg:h-16 px-4 sm:px-6 rounded-tr-lg rounded-br-lg text-base sm:text-lg font-semibold hover:bg-red-700 transition-colors">
                        SEARCH
                    </button>
                </div>
            </div>
        </div>
    );
}