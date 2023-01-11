import { createContext, useState } from "react";
import Login from './login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./home";

export const AppContext = createContext()

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [user, setUser] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: JSON.parse(localStorage.getItem('PORT_USER')) ? <Home /> : <Login />
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode, user, setUser }}>
      <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={router} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
