import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center p-3 w-full relative bottom-0 left-0 ">
            <div className="flex flex-row justify-center items-center gap-[20vh]">

                <div>
                    <p className="text-white">Botiga creada a Espanya</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-500">Powered by Álvaro Campos</p>  
                    <p className="text-gray-500">© 2024 Tots els drets reservats</p>   
                </div>
            </div>
        </footer>
    );
};

export default Footer;