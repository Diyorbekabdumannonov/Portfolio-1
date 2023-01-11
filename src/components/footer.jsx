import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Footer() {
    const contacts = [
        { img: 'git', name: 'Github' },
        { img: 'git', name: 'Github' },
        { img: 'git', name: 'Github' },
        { img: 'git', name: 'Github' },
    ]

    const { isDarkMode } = useContext(AppContext)

    return (
        <div className={"lg:px-24 px-5 " + (isDarkMode ? 'bg-black text-white' : 'bg-white text-black')} id="contact">
            <div className="flex sm:items-center sm:gap-0 gap-4 flex-col sm:flex-row justify-between pt-24">
                {contacts.map((contact, index) => {
                    return <div className="flex" key={index}>
                        <p>{contact.img}</p>
                        <p>{contact.name}</p>
                    </div>
                })}
            </div>
            <hr className="mt-4" />
            <footer className="flex items-center sm:justify-between justify-center text-sm font-normal py-4">
                <h1 className="font-extrabold text-xl hidden sm:block">Portfolio</h1>
                <p className="font-semibold">Copyright © Unique Group, Inc</p>
                <p className="hidden sm:block">Unique Group</p>
            </footer>
        </div>
    )
}