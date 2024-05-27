import axios, { AxiosRequestConfig } from "axios";

export function useHttpConfig() {

    const client = axios.create();

    client.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    function api(config: AxiosRequestConfig) {
        return client(config);
    }

    const fetcher = async (url: string) => {
        const response = await client.get(url);
        return response.data;
    };

    return {
        api,
        fetcher
    };
}

