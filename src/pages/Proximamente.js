import React from "react";
import { Link } from "react-router-dom";

const Proximamente = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-3xl sm:text-lg xl:text-5xl">Proximamente...</h1>
            <button><Link to="/home">Ir al inicio de la web (BETA)</Link></button>
        </div>
    );
}


export default Proximamente;