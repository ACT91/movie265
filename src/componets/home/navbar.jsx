
export default function NavBar(){
    return(
        <>
            <div className="lg:h-24 lg:bg-black lg:bg-opacity-85">
                <div className="flex lg:flex-row lg:items-center lg:justify-end lg:space-x-5 lg:text-lg lg:text-white lg:h-full lg:mr-10">
                        <span>Home</span>
                        <span>Latest</span>
                        <span>Popular</span>
                        <span>Categories</span>
                </div>
            </div>
        </>
    )
}