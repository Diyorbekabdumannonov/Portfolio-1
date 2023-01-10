import React, { useContext, useEffect } from "react";
import Navbar from "../components/navbar";
import { Context } from './../App'

export default function Home() {
    const { todos, setTodos, onChecked } = useContext(Context)

    const onSubmit = (e) => {
        e.preventDefault()
        const date = new Date()
        const input = e.target.children[0]
        if (input.value.trim() !== '') {
            todos.push({ status: 'all', value: input.value, index: date })
            localStorage.setItem('todos', JSON.stringify(todos))
            input.value = ''
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Navbar />
            <form onSubmit={onSubmit} className='flex'>
                <input type="text" placeholder="search" className="border border-blue-600 rounded-l-full py-2 px-6 outline-none font-semibold" />
                <button type="submit" className="bg-blue-600 text-white rounded-r-full py-2.5 px-4">Submit</button>
            </form>
            {todos ? todos.map((todo, index) => {
                if (todo.status === 'complated') {
                    return <label key={index} htmlFor={index} className="flex cursor-pointer items-center line-through text-blue-500 border border-blue-600 py-2 px-6 w-80 rounded-lg mt-5">
                        <input type="checkbox" id={index} onChange={(e) => onChecked(e, todo)} checked />
                        <p className="ml-2 font-medium text-blue-500 w-full">{todo.value}</p>
                    </label>
                }
                else {
                    return <label key={index} htmlFor={index} className="flex items-center cursor-pointer border border-gray-600 py-2 px-6 w-80 rounded-lg mt-5">
                        <input type="checkbox" id={index} onChange={(e) => onChecked(e, todo)} />
                        <p className="ml-2 font-medium text-gray-900">{todo.value}</p>
                    </label>
                }
            }) : ''}
        </div>
    )
}