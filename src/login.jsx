import React, { useContext } from "react";
import { AppContext } from "./App";

export default function Login() {
    const { setUser, user } = useContext(AppContext)
    const onSubmit = (e) => {
        e.preventDefault()
        setUser(true)
        localStorage.setItem('PORT_USER', JSON.stringify(true))
        window.location.href = '/'
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="shadow-xl rounded-xl px-4 py-8">
                <h1 className="text-3xl font-semibold text-center">Login</h1>
                <form className="mt-4" onSubmit={onSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-medium text-18">Email</label>
                        <input type="email" className="input sm:w-96" />
                    </div>
                    <div className="flex flex-col mt-6">
                        <label htmlFor="email" className="mb-2 font-medium text-18">Password</label>
                        <input type="password" className="input sm:w-96" />
                    </div>
                    <div className="flex justify-center gap-4 items-center my-10">
                        <p>git</p>
                        <p>google</p>
                        <p>twitter</p>
                        <p>facebook</p>
                    </div>
                    <p className="text-center -mt-2 text-sm font-semibold max-w-xs mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, exercitationem?</p>
                    <button className="w-full bg-blue-500 text-white mt-4 rounded-full py-2 text-18 font-semibold">Login</button>
                </form>
            </div>
        </div>
    )
}