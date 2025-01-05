import { NavLink } from "react-router-dom";
import { UilBars } from "@iconscout/react-unicons";
import {UilTimes} from "@iconscout/react-unicons";
import { useState } from "react";


export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick(){
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <>
            <div className=" h-10 lg:h-10 bg-black bg-opacity-85 flex items-center">
                <button onClick={handleClick} className="ml-auto lg:hidden mr-5">
                    {isMenuOpen ? <UilTimes className="border-solid border-white text-white p-[0.5x] border-[1px] scale-120"/> :
                    <UilBars className="border-solid border-white text-white p-[0.5x] border-[1px] scale-120"/>}
                </button>

                {/* This is for mobile app */}
                <div className={`lg:hidden flex flex-col divide-y absolute top-0 left-0 bg-black w-4/6 h-full space-y-5 text-white divide-slate-500 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} duration-500 ease-in-out`}>
                        <NavLink to="/" className={({isActive}) => isActive ? "hover:text-red-700 text-red-700 font-medium p-1" : "hover:text-red-400 font-medium p-1"}>Home</NavLink>
                        <span>Action</span>
                        <NavLink to="/romance" className={({isActive}) => isActive ? "hover:text-red-400 text-red-700 font-medium p-1" : "hover:text-red-400 font-medium p-1 "}>Romance</NavLink>
                        <NavLink to="/cartoons" className={({isActive}) => isActive ? "hover:text-red-400 text-red-700 font-medium p-1" : "hover:text-red-400 font-medium p-1 "}>Cartoons</NavLink>
                        <span>Horror</span>
                    </div>

                {/* This is for desktops from 1024px  */}
                <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:space-x-5 lg:text-lg lg:text-white lg:h-full lg:mr-10 lg:ml-auto">
                        <NavLink to="/" className={({isActive}) => isActive ? "hover:bg-red-400 bg-red-700 font-medium h-full p-1 hover:rounded-lg" : "hover:bg-red-400 font-medium p-1 rounded-lg"}>Home</NavLink>
                        <span>Action</span>
                        <NavLink to="/romance" className={({isActive}) => isActive ? "hover:bg-red-400 bg-red-700 font-medium h-full p-1 hover:rounded-lg" : "hover:bg-red-400 font-medium p-1 rounded-lg"}>Romance</NavLink>
                        <NavLink to="/cartoons" className={({isActive}) => isActive ? "hover:bg-red-400 bg-red-700 font-medium h-full p-1 hover:rounded-lg" : "hover:bg-red-400 font-medium p-1 rounded-lg"}>Cartoons</NavLink>
                        <span>Horror</span>
                </div>
            </div>
        </>
    )
}