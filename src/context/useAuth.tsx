import { createContext, ReactNode, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    JWT: '', 
    setAuth: (newJWT: string) => {}
})

type Props = {
    children: ReactNode
}

function AuthProvider({ children }: Props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [JWT, setJWT] = useState('');

    function setAuth(newJWT: string) {
        console.log('newJWT', newJWT)
        if(newJWT) {
            setIsAuthenticated(true);
            setJWT(newJWT);
            return;
        }

        setIsAuthenticated(false);
        setJWT('');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, JWT, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}