import React from "react";
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="flex text-gray-700 items-center gap-10 px-10 py-5 justify-center text-xl font-bold">
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'border-b-2 border-b-blue-600' : undefined
                }
                to='/'>All</NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'border-b-2 border-b-blue-600' : undefined
                }
                to='/complated'>Complated</NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'border-b-2 border-b-blue-600' : undefined
                }
                to='/todo'>Todo</NavLink>
        </div>
    )
}