import React, { useContext } from "react";
import icon from '../assets/favicon.ico'
import { projects } from './../services/data'
import { AppContext } from './../App'

export default function Services() {
    const { isDarkMode } = useContext(AppContext)

    const Project = (project, index) => {
        return <div key={index} className={"overflow-hidden rounded-3xl cursor-pointer hover:scale-105 " + (isDarkMode ? 'shadow-shadowWhite' : 'shadow-2xl')}>
            <div className={"w-full h-48 " + (isDarkMode ? 'bg-white' : 'bg-black')}></div>
            <div className="flex items-center py-2 px-3">
                <img src={icon} alt="icon" className="pr-4" />
                <div>
                    <h2 className="text-2xl font-bold">{project.projectName}</h2>
                    <h2 className="text-18 font-semibold">{project.description}</h2>
                </div>
            </div>
            <div className="flex items-center justify-between pl-3 pb-4">
                <p>{project.date}</p>
                <div
                    className="mr-5 bg-black rounded-full border-none w-8 h-8 text-xl justify-center items-center flex text-white"
                >{'>'}</div>
            </div>
        </div>
    }

    return <div className={"lg:px-24 px-5 md:pt-40 " + (isDarkMode ? 'bg-black text-white' : 'bg-white text-black')} id="service">
        <p className="title">Our Services</p>
        <div className="flex items-center">
            <p>{'<'}</p>
            <div className="w-full gap-5 my-5 grid-cols-3 hidden lg:grid">
                {projects.slice(0, 3).map((project, index) => {
                    return <Project project={project} index={index} key={index} />
                })}
            </div>
            <div className="w-full gap-5 my-5 grid-cols-2 md:grid hidden lg:hidden">
                {projects.slice(0, 2).map((project, index) => {
                    return <Project project={project} index={index} key={index} />
                })}
            </div>
            <div className="w-full gap-5 my-5 grid-cols-1 grid md:hidden">
                {projects.slice(0, 1).map((project, index) => {
                    return <Project project={project} index={index} key={index} />
                })}
            </div>
            <p>{'>'}</p>
        </div>
    </div>
}