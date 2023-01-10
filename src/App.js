import Home from './pages/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/complated",
    element: <h1>Complated</h1>,
  },
  {
    path: "/todo",
    element: <h1>Todo</h1>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
