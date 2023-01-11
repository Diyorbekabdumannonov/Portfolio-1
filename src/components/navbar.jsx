import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import sun from './../assets/sun.png'
import moon from './../assets/moon.png'

export default function Navbar() {
    const onSubmit = (e) => {
        e.preventDefault()
    }
    const links = [
        { name: 'Services', href: '#service' },
        { name: 'Projects', href: '#project' },
        { name: 'Contact', href: '#contact' },
    ]
    const { isDarkMode, setIsDarkMode } = useContext(AppContext)
    const [isDropdownOpened, setIsDropdownOpened] = useState(false)
    return (
        <div className={"flex justify-between lg:px-24 px-5 fixed w-full top-0 z-50 " + (isDarkMode ? 'bg-black text-white shadow-shadowWhite' : 'bg-white text-black shadow-lg')}>
            <div className="flex items-center justify-between md:justify-start py-4 md:py-0 w-full md:w-auto">
                <h1 className="font-extrabold text-xl cursor-pointer">Portfolio</h1>
                <hr className={"w-px m-5 h-7 hidden md:block " + (isDarkMode ? 'bg-white' : 'bg-black')} />
                {links.map(link => {
                    return <a
                        className={"mr-5 text-xl font-700 hidden md:block"}
                        href={link.href}
                        key={link.href}>{link.name}</a>
                })}
                <button className="md:hidden">Menu</button>
            </div>
            <form className="hidden md:flex items-center" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="xl:w-96 px-4 input hidden lg:block"
                    placeholder="search" />
                <h1>ENG</h1>
                <button
                    className={"bg-transparent py-1 px-3 flex items-center rounded-full border border-blue-600 mx-5 " + (isDarkMode ? 'hidden' : '')}
                    onClick={() => setIsDarkMode(true)}
                >
                    <span className="-rotate-45 -mt-1">
                        <img src={moon} alt="sun" className="w-4 mr-1 rotate-180" />
                    </span>
                    <p>Dark</p>
                </button>
                <button
                    className={"bg-transparent py-1 px-3 rounded-full flex items-center border border-blue-600 mx-5 " + (isDarkMode ? '' : 'hidden')}
                    onClick={() => setIsDarkMode(false)}
                >
                    <img src={sun} alt="moon" className="w-4 mr-1" />
                    Light
                </button>
                <div
                    className={"w-8 h-8 rounded-full cursor-pointer " + (isDarkMode ? 'bg-white' : 'bg-black')}
                    onClick={() => setIsDropdownOpened(!isDropdownOpened)}
                ></div>
                <div className={isDropdownOpened ? ('flex fixed flex-col py-2 px-5 rounded-xl right-20 top-16 ' + (isDarkMode ? 'bg-white text-black' : 'bg-black text-white')) : 'hidden'}>
                    <h3 className="font-bold text-xl">Your Name</h3>
                    <p className="underline cursor-pointer text-sm font-medium">yourorganization@gmail.com</p>
                    <button
                        onClick={() => {
                            localStorage.setItem('PORT_USER', JSON.stringify(false))
                            window.location.href = '/login'
                        }} className={"mt-4 text-18 font-medium py-1 rounded-full " + (isDarkMode ? 'bg-gray-300' : 'bg-gray-900')}
                    >Log Out</button>
                </div>
            </form>
        </div >
    )
}