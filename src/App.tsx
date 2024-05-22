import LoginPage from "@/pages/Login";
import HomePage from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error";
import CreateUserPage from "./pages/create-user";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute";
import CardsPage from "./pages/Cards";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <ProtectedRoute>
          <Route path="/home" element={<HomePage />} />
        </ProtectedRoute>
        <ProtectedRoute>
          <Route path="/cards" element={<CardsPage />} />
        </ProtectedRoute>
      </Routes>
    </BrowserRouter >
  )
}

export default App;
