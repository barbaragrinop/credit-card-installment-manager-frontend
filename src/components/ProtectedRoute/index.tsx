import { useAuth } from '@/context/useAuth';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children: ReactNode;
}

//TODO add validation to login and register user(if token, redirect)
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoggedIn } = useAuth();
    console.log('isLoggedIn', isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    } else {
        return <>{children}</>;
    }
};

export default ProtectedRoute;
