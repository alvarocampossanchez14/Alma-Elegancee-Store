import React, { useState } from "react";
import PropTypes from "prop-types";
import { AuthResponseErrorPropType } from "../types/types";
import { useAuth } from "../hook/useAuth";
import { Navigate, useNavigate } from "react-router-dom";


const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorResponse, setErrorResponse] = useState(null);

  const API_URL = process.env.API_URL;

  const auth = useAuth();
  const goTo = useNavigate()

  if (auth.isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://alma-elegancee-api.vercel.app/api/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password,
          cart: JSON.stringify([]),
        }),
      });

      if (response.ok) {
        console.log("User Created Successfully");
        setErrorResponse(null);
        goTo("/");
        const userData = await response.json();
        auth.saveUser(userData);
      } else {
        console.log("Error");
        const json = await response.json();

        
        const errorPropTypeError = PropTypes.checkPropTypes(
          { body: AuthResponseErrorPropType }, 
          { body: json },
          'prop',
          'handleResponse'
        );

        if (!errorPropTypeError) {
          setErrorResponse(json.body.error);
        } else {
          console.error("Invalid error response format", errorPropTypeError);
        }
        return;
      }
    } catch (error) {
      console.error(error);
      setErrorResponse('An unexpected error occurred');
    }
  };

  return (
    <form className="flex flex-col justify-center items-center gap-10 h-screen" onSubmit={handleSubmit}>
      <h1 className="text-3xl mt-5">Registrate</h1>
      {errorResponse && <div className="text-red-500">{errorResponse}</div>}
      <div className="flex flex-col">
        <label htmlFor="user" className="font-bold">Usuario</label>
        <input id="user" type="text" value={userName} onChange={handleUserName} className="p-3 border-2 border-black" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="font-bold">Contraseña</label>
        <input id="password" type="password" value={password} onChange={handlePassword} className="p-3 border-2 border-black" />
      </div>
      <button className="py-4 px-12 rounded-md bg-black text-white font-bold hover:scale-[1.1]">Registrarse</button>
    </form>
  );
};

export default SignUp;
