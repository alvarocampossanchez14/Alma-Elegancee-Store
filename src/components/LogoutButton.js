import React from 'react';
import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/login'); // Redirige al usuario a la página de login después de cerrar sesión
    };

    return (
        <button onClick={handleLogout} className="py-2 px-4 bg-red-500 text-white rounded">
            Cerrar sesión
        </button>
    );
};

export default LogoutButton;
