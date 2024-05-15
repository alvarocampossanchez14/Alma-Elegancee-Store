import React from "react";
import { Link } from "react-router-dom";

const Enlace = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-5xl">Proximamente...</h1>
            <button className="bg-gray-200 p-3 border-2 border-black rounded-xl"><Link to="/home">Ir al inicio</Link></button>
        </div>
    );
}


export default Enlace;