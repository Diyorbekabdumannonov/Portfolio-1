import React, { useContext } from "react";
import Navbar from "../components/navbar";
import { Context } from "./../App";

export default function Complated() {
    const { todos, onChecked } = useContext(Context)
    return (
        <div className="flex items-center flex-col">
            <Navbar />
            {todos ? todos.filter(todo => todo.status === 'complated').map((todo, index) => {
                return <label key={index} htmlFor={index} className="flex cursor-pointer items-center line-through text-blue-500 border border-blue-600 py-2 px-6 w-80 rounded-lg mt-5">
                    <input type="checkbox" id={index} onChange={(e) => onChecked(e, todo)} checked />
                    <p className="ml-2 font-medium text-blue-500 w-full">{todo.value}</p>
                </label>
            }) : ''}
        </div>
    )
}