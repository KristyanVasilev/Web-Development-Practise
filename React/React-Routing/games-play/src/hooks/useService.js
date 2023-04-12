import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContexts"

export const useService = (serviceFactory) => {
    const { accessToken } = useContext(AuthContext);

    const service = serviceFactory(accessToken);
    
    return service;
}