import LoginPage from "@/pages/Login";
import HomePage from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import CreateUserPage from "./pages/create-user";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute";
import CardsPage from "./pages/Cards";
import { UserProvider } from "./context/useAuth";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    )
  },
  {
    path: "/create-user",
    element: <CreateUserPage />
  },
  {
    path: "/cards",
    element: (
      <ProtectedRoute>
        <CardsPage />
      </ProtectedRoute>
    )
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserProvider>
  )
}

export default App;
