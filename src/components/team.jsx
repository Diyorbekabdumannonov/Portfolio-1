import React, { useContext } from "react";
import { projects } from './../services/data'
import { AppContext } from './../App'

export default function Team() {
    const { isDarkMode } = useContext(AppContext)
    return (
        <div className={"lg:px-24 px-5 -mt-5 " + (isDarkMode ? 'bg-black text-white' : 'bg-white text-black')}>
            <h1 className="title">Our Team</h1>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5 pt-5">
                {projects.slice(0, 3).map((project, index) => {
                    return <div className={"overflow-hidden rounded-2xl flex cursor-pointer hover:scale-110 " + (isDarkMode ? 'shadow-shadowWhite' : 'shadow-2xl')} key={index}>
                        <div className={"h-full mr-3 w-[600px] " + (isDarkMode ? 'bg-white' : 'bg-black')}></div>
                        <div className="p-3">
                            <p className="text-sm font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil assumenda natus eveniet.
                            </p>
                            <div className="flex items-center mt-2">
                                <div className="bg-black w-10 h-10 rounded-full flex items-center text-white font-bold justify-center mr-5">UV</div>
                                <div>
                                    <p className="font-semibold text-18">Username</p>
                                    <p className="font-bold text-xs">CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}