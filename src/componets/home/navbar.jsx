import { UilBars } from "@iconscout/react-unicons"

export default function NavBar(){
    return(
        <>
            <div className="bg-black h-10 lg:h-10 lg:bg-black lg:bg-opacity-85">
                <UilBars className="text-white ml-auto scale-150 lg:hidden"/>
                <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:space-x-5 lg:text-lg lg:text-white lg:h-full lg:mr-10">
                        <span>Home</span>
                        <span>Latest</span>
                        <span>Popular</span>
                        <span>Categories</span>
                </div>
            </div>
        </>
    )
}

