import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export function useHttpConfig() {

    const client = axios.create();

    client.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    function api(config: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        return client(config);
    }

    async function fetcher(url: string): Promise<any> {
        const response = await client.get(url);
        return response.data;
    }

    return {
        api,
        fetcher
    };
}

