// UserDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const UserDropdown = ({ isVisible }) => {
  const auth = useAuth();

  return (
    <div className={`flex flex-col items-center absolute right-0 mt-4 w-80 bg-white shadow-lg z-20 transition-transform duration-500 ${isVisible ? 'block' : 'hidden'}`}>
      {auth.isAuthenticated ? (
        <>
          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi Perfil</Link>
          <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mis Pedidos</Link>
          <Link to="/notifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mis Notificaciones</Link>
          <Link to="/coupons" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mis Cupones</Link>
          <Link to="/points" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mis Puntos</Link>
          <Link to="/recent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visto Recientemente</Link>
          <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Más Servicios</Link>
          <button onClick={auth.logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar Sesión</button>
        </>
      ) : (
        <div className='flex flex-col items-center gap-6 shadow-lg'>
          <div className='px-10 flex flex-col items-center gap-4'>
            <span className='text-xs font-bold uppercase'>¿Ya tienes una cuenta?</span>
            <p className='text-xs font-light text-center'>Conéctese para disfrutar de una experiencia personalizada y beneficiarse de todas sus ventajas y ofertas.</p>
            <Link to="/login" className="block px-10 py-2 text-sm bg-black text-white rounded-xs hover:bg-white hover:text-black">Iniciar Sesión</Link>
          </div>
          <div className='bg-gray-200 w-full flex flex-col items-center m-0 p-3 px-10 text-center gap-3'>
            <span className='uppercase text-xs font-bold'>¿Aún no te has registrado?</span>
            <p className='text-xs font-light'>Únete al mundo Alma y aprovechate de las ventajas</p>
            <Link to="/signup" className="block px-10 py-2 text-sm bg-black text-white rounded-xs hover:bg-white hover:text-black">Registrarse</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
