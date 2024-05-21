import LoginPage from "@/pages/Login";
import HomePage from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import CartoesPage from "./pages/Cards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "*",
    element: <ErrorPage />
  }, 
  {
    path: "/cartoes",
    element: <CartoesPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
