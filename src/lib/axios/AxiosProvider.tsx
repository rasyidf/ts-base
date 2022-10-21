import { createContext, useContext, useMemo } from "react";
import Axios, { AxiosInstance } from "axios";
export const AxiosContext = createContext<AxiosInstance>(Axios.create());

export default function AxiosProvider({
    children,
}: React.PropsWithChildren<unknown>) {
    const axios = useMemo(() => {
        const axios = Axios.create({
            headers: {
                "Content-Type": "application/json",
            },
        });

        axios.interceptors.request.use((config: any) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        });

        return axios;
    }, []);

    return (
        <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
    );
}

export function useAxios() {
    return useContext(AxiosContext);
}