import React from "react";
import {useAuth} from "../hook/useAuth";

const LoginRedirect = () => {

    const auth = useAuth(); 
    
    return (
        <div className="">
            <h1 className="text-4xl">Logueado correctamente</h1>
            <h2>Tu nombre es: {auth.getUser().username}</h2>
        </div>
    )
}

export default LoginRedirect;