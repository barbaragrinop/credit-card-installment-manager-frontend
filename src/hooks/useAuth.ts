import axios from 'axios';

export function useAuth(){

    function login(email: string, password: string){
        let environment: string = import.meta.env.BASE_URL;
        console.log('environment', environment)

        const result = axios.post(`${environment}/login`, {
            email,
            password
        })
    }
}