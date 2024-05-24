import { useContext } from "react";
import { AuthContext } from "../context/authProvider";

export const useAuth = () => {
    const authProvider = useContext(AuthContext)

    if(authProvider === undefined) {
        throw new Error('useAuthProvider must be used within a AuthProvider')
    }     
    
    return authProvider
}