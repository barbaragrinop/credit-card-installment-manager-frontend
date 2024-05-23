import { useNotifier } from "@/hooks/useNotifier";
import { User } from "@/types/user";
import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserContextT = {
    user: User | null;
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
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [isReady, setIsReady] = useState<boolean>(false)
    let environment: string = import.meta.env.VITE_ENVIRONMENT;
    const { error } = useNotifier()

    useEffect(() => {
        const user = localStorage.getItem("user")
        const token = localStorage.getItem("token")

        if (user && token) {
            setUser(JSON.parse(user))
            setToken(token)
        }

        setIsReady(true)
    }, [])

    async function login(email: string, password: string) {

        const result = await axios.post(`${environment}/login`, {
            email,
            password
        })

        error("E-mail ou senha inválidos")
        

        if(result?.data){
            const { user, token } = result.data
            setUser(user)
            setToken(token)
            localStorage.setItem("user", JSON.stringify(user))
            localStorage
        }

    }

    function logout() {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        setToken(null)
    }

    const isLoggedIn = user && token ? true : false


    return (
        <UserContext.Provider
            value={{ login, user, token, logout, isLoggedIn }}
        >
            {isReady ? children : null}
        </UserContext.Provider>
    );

}

export const useAuth = () => useContext(UserContext);