import { NavLink } from "react-router-dom";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <>
            <nav className="h-14 bg-black bg-opacity-85 flex items-center px-4 relative z-20">
                {/* Website Name */}
                <div className="flex items-center">
                    <span className="font-serif text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-widest drop-shadow-lg select-none">
                        MOVIE
                        <span className="text-red-600 font-extrabold ml-1">265</span>
                    </span>
                </div>
                {/* Spacer */}
                <div className="flex-1" />
                {/* Mobile Hamburger */}
                <button
                    onClick={handleClick}
                    className="lg:hidden mr-2 focus:outline-none"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        <UilTimes className="text-white w-7 h-7" />
                    ) : (
                        <UilBars className="text-white w-7 h-7" />
                    )}
                </button>

                {/* Desktop Nav */}
                <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:space-x-6 lg:text-lg lg:text-white lg:h-full lg:mr-10">
                    <NavLink to="/" className={({ isActive }) => isActive ? "hover:bg-red-400 bg-red-700 font-medium px-3 py-1 rounded-lg" : "hover:bg-red-400 font-medium px-3 py-1 rounded-lg"}>Home</NavLink>
                    <NavLink to="/action" className={({ isActive }) => isActive ? "hover:bg-red-400 bg-red-700 font-medium px-3 py-1 rounded-lg" : "hover:bg-red-400 font-medium px-3 py-1 rounded-lg"}>Action</NavLink>
                    <NavLink to="/romance" className={({ isActive }) => isActive ? "hover:bg-red-400 bg-red-700 font-medium px-3 py-1 rounded-lg" : "hover:bg-red-400 font-medium px-3 py-1 rounded-lg"}>Romance</NavLink>
                    <NavLink to="/cartoons" className={({ isActive }) => isActive ? "hover:bg-red-400 bg-red-700 font-medium px-3 py-1 rounded-lg" : "hover:bg-red-400 font-medium px-3 py-1 rounded-lg"}>Cartoons</NavLink>
                    <NavLink to="/horror" className={({ isActive }) => isActive ? "hover:bg-red-400 bg-red-800 font-medium px-3 py-1 rounded-lg" : "hover:bg-red-400 font-medium px-3 py-1 rounded-lg"}>Horror</NavLink>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={closeMenu}
                aria-hidden={!isMenuOpen}
            />

            {/* Mobile Slide Menu */}
            <div className={`fixed top-0 left-0 h-full w-4/6 max-w-xs bg-black text-white z-30 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out flex flex-col pt-16 space-y-6 items-center justify-center`}>
                <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "text-red-700 font-medium px-4 py-2" : "hover:text-red-400 font-medium px-4 py-2"}>Home</NavLink>
                <NavLink to="/action" onClick={closeMenu} className={({ isActive }) => isActive ? "text-red-700 font-medium px-4 py-2" : "hover:text-red-400 font-medium px-4 py-2"}>Action</NavLink>
                <NavLink to="/romance" onClick={closeMenu} className={({ isActive }) => isActive ? "text-red-700 font-medium px-4 py-2" : "hover:text-red-400 font-medium px-4 py-2"}>Romance</NavLink>
                <NavLink to="/cartoons" onClick={closeMenu} className={({ isActive }) => isActive ? "text-red-700 font-medium px-4 py-2" : "hover:text-red-400 font-medium px-4 py-2"}>Cartoons</NavLink>
                <NavLink to="/horror" onClick={closeMenu} className={({ isActive }) => isActive ? "text-red-700 font-medium px-4 py-2" : "hover:text-red-400 font-medium px-4 py-2"}>Horror</NavLink>
            </div>
        </>
    );
}