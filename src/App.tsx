import LoginPage from "@/pages/login";
import HomePage from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";

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
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
