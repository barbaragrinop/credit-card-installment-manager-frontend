import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "@/hooks/useAuth";

type ProtectedRouteProps = {
    children: ReactNode;
}

//TODO add validation to login and register user(if token, redirect)
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    } else {
        return <>{children}</>;
    }
};

export default ProtectedRoute;
