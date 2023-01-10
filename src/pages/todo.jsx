import React, { useContext } from "react";
import { Context } from "../App";
import Navbar from "../components/navbar";

export default function Todo() {
    const { todos, onChecked } = useContext(Context)
    return (
        <div className="flex items-center flex-col">
            <Navbar />
            {todos ? todos.filter(todo => todo.status === 'all').map((todo) => {
                return <label key={todo.index} htmlFor={todo.index} className="flex items-center cursor-pointer border border-gray-600 py-2 px-6 w-80 rounded-lg mt-5">
                    <input type="checkbox" id={todo.index} onChange={(e) => onChecked(e, todo)} />
                    <p className="ml-2 font-medium text-gray-900">{todo.value}</p>
                </label>
            }) : ''}
        </div>
    )
}