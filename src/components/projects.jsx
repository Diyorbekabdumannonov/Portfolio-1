import React, { useContext } from "react";
import icon from './../assets/favicon.ico'
import { projects } from './../services/data'
import { AppContext } from './../App'

export default function Projects() {
    const { isDarkMode } = useContext(AppContext)
    const Project = (project, index) => {
        return <div className={"overflow-hidden rounded-3xl cursor-pointer hover:scale-105 " + (isDarkMode ? 'shadow-shadowWhite' : 'shadow-2xl')} key={index}>
            <div className={"w-full h-48 " + (isDarkMode ? 'bg-white' : 'bg-black')}></div>
            <div className="flex items-center py-2 px-3">
                <img src={icon} alt="icon" className="pr-4" />
                <div>
                    <h2 className="text-2xl font-bold">Project Name</h2>
                    <h2 className="text-18 font-semibold">Project Description</h2>
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
    return <div className={"xl:px-24 px-5 " + (isDarkMode ? 'bg-black text-white' : 'bg-white text-black')} id="project">
        <form>
            <h1 className="title mb-10">Our Projects</h1>
            <div className="flex items-center flex-col lg:flex-row justify-between">
                <div className="text-center gap-4 grid md:grid-cols-3 w-full">
                    <input type="text" className="input w-11/12 mx-auto md:mx-0 md:w-auto mr-!0 md:mr-5" placeholder="Project Name" />
                    <input type="text" className="input w-11/12 mx-auto md:mx-0 md:w-auto mr-!0 md:mr-5" placeholder="Project Language" />
                    <input type="text" className="input w-11/12 mx-auto md:mx-0 md:w-auto mr-!0 md:mr-5" placeholder="Created At" />
                </div>
                <div className="mt-5 lg:mt-0 flex items-center">
                    <button className="rounded-full text-white border-none py-2 px-10 mr-3 bg-blue-500 font-bold">Apply</button>
                    <button className="rounded-full bg-red-500 text-white border-none py-2 px-10 font-bold">Reset</button>
                </div>
            </div>
        </form>
        <div className="sm:grid hidden lg:grid-cols-3 sm:grid-cols-2 gap-5 my-5">
            {projects.map((project, index) => {
                return <Project project={project} index={index} key={index} />
            })}
        </div>
        <div className="grid sm:hidden gap-5 my-5">
            {projects.slice(0, 4).map((project, index) => {
                return <Project project={project} index={index} key={index} />
            })}
        </div>
    </div>
}