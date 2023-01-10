import Home from './pages/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Complated from './pages/complated';
import Todo from './pages/todo';
import { createContext, useEffect, useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/complated",
    element: <Complated />,
  },
  {
    path: "/todo",
    element: <Todo />,
  }
]);

export const Context = createContext([])

function App() {
  const [todos, setTodos] = useState([])

  const onChecked = (e, todo) => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const UpdatedTodo = todos.find(tod => tod.index === todo.index)
    const UpdatedTodoIndex = todos.indexOf(UpdatedTodo)
    if (e.target.checked) {
      todos[UpdatedTodoIndex].status = 'complated'
    }
    else {
      todos[UpdatedTodoIndex].status = 'all'
    }
    localStorage.setItem('todos', JSON.stringify(todos))
    setTodos(JSON.parse(localStorage.getItem('todos')))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos) {
      setTodos(todos)
    }
  }, [])

  return (
    <Context.Provider value={{ todos, setTodos, onChecked }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
