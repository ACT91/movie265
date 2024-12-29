export default function HerosSearchBar(){
    return(
        <>
            <div className="flex lg:flex-col lg:justify-center lg:items-center lg:text-white lg:w-[40%] lg:h-[40vh] lg:bg-black lg:bg-opacity-70 lg:backdrop-blur-sm lg:mt-[10%] lg:rounded-3xl lg:mx-[30%] lg:py-24 lg:space-y-5">
                <h1 className="lg:text-center font-bold lg:text-2xl">Movie265</h1>
                <div className="flex lg:flex-row lg:justify-center lg:h-[5vh] lg:w-full lg:px-[5%]">
                    <input className="lg:h-[6vh] lg:w-[60%] placeholder:text-base lg:pl-2 lg:rounded-tl-lg lg:rounded-bl-lg" placeholder="search your favourite"/>
                    <button className="bg-red-800 lg:h-[6vh] lg:px-3 lg:rounded-tr-lg lg:rounded-br-lg">SEARCH</button>
                </div>
            </div>
        </>
    )
}