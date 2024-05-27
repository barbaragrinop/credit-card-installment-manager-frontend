import { User } from "@/types/user";
import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

type UserJWT = Omit<User, "password" | "confirmPassword" > | null;

type UserContextT = {
    user: UserJWT
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoggedIn: boolean;
}

const UserContext = createContext<UserContextT>({} as UserContextT)

type Props = {
    children: ReactNode
}

export function UserProvider({ children }: Props) {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<UserJWT | null>(null)
    const [isReady, setIsReady] = useState<boolean>(false)
    let environment: string = import.meta.env.VITE_ENVIRONMENT;

    useEffect(() => {
        const token = localStorage.getItem("token")

        setIsReady(true)

        if (token) {
            setToken(token)
            const decoded: any = jwtDecode(token);
            setUser({
                email: decoded.email,
                id: decoded.id,
                name: decoded.name,
                birth_date: new Date(decoded.birth_date)
            })
        }

    }, [])

    async function login(email: string, password: string) {

        const result = await axios.post(`${environment}/login`, {
            email,
            password
        })

        if (result?.data?.token) {
            const { token } = result.data
            const decoded: any = jwtDecode(token);

            localStorage.setItem("token", token)
            
            const userData: UserJWT = {
                id: decoded.id,
                name: decoded.name,
                email: decoded.sub,
                birth_date: new Date(decoded.birth_date)
            }

            setToken(token)
            setUser(userData)
        }
    }

    function logout() {
        localStorage.removeItem("token")
        setToken(null)
    }

    const isLoggedIn = token ? true : false


    return (
        <UserContext.Provider
            value={{ login, token, logout, isLoggedIn, user }}
        >
            {isReady ? children : null}
        </UserContext.Provider>
    );

}

export const useAuth = () => useContext(UserContext);