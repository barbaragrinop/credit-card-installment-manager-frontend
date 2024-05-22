import { useNotifier } from "@/hooks/useNotifier";
import { CreateUser } from "@/types/create-user";
import { User } from "@/types/user";
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserContextT = {
    user: User | null;
    token: string | null;
    registerUser: (user: User) => void;
    loginUser: (user: User) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
}

const UserContext  = createContext<UserContextT>({} as UserContextT)

type Props = {
    children: ReactNode
}

export function UserProvider({ children }: Props) {
    const navigate = useNavigate()
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [isReady, setIsReady] = useState<boolean>(false)
    const { success, error } = useNotifier();
    let environment: string = import.meta.env.VITE_ENVIRONMENT;

    useEffect(() => {
        const user = localStorage.getItem("user")
        const token = localStorage.getItem("token")

        if(user && token){
            setUser(JSON.parse(user))
            setToken(token)
        }

        setIsReady(true)
    }, [])

    async function registerUser(form: Omit<CreateUser, "confirmPassword">) {
        try {
            let result = await axios.post(`${environment}/user`, form)

            if (result.status === 201) {
                success('Usuário criado com sucesso!')
            }

        } catch (err: any) {
            console.log('[error]', err?.response?.data)
            error(err?.response?.data || '');
        }
    }

    async function login(email: string, password: string) {

        const result = await axios.post(`${environment}/login`, {
            email,
            password
        })

        console.log("result", result)

        // if(!result.data){
        //     return result
        // }

        // setUser(result.data.user)
        // setToken(result.data.token)

        // localStorage.setItem("user", JSON.stringify(result.data.user))
        // localStorage.setItem("token", result.data.token)

        navigate('/home')
    }



}