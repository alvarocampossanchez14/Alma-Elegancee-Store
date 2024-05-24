import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()


export function AuthProvider({children}) {


    const [isAutenticated, setIsAutenticated] = useState(false)


    return (
        <AuthContext.Provider value={{isAutenticated}}>
            {children}
        </AuthContext.Provider>
    )   
}