import { createContext, useEffect, useState } from "react";
import { AuthResponsePropType, AccessTokenResponsePropType } from "../types/types";
import PropTypes from 'prop-types';
import { API_URL } from "../auth/constants";
import { useCart } from "../hook/useCart";
import Cart from "../components/Cart";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const initialState = {
        __id: 0, 
        email: '', 
        username: '',
        cart: [] 
    };

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : initialState;
    });
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
    const {cart} = useCart()

    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(()=> {
        if(isAuthenticated) {
            updateUserCart(cart)
        }
    }, [cart])

    async function requestNewAccessToken(refreshToken) {
        try {
            const response = await fetch(`${API_URL}/refreshToken`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${refreshToken}`
                },
            });

            if (response.ok) {
                const json = await response.json();
                const errorAccessTokenResponsePropType = PropTypes.checkPropTypes(
                    { body: AccessTokenResponsePropType },
                    { body: json },
                    'prop',
                    'handleResponse'
                );

                if (!errorAccessTokenResponsePropType) {
                    setAccessToken(json.body.accessToken);
                    localStorage.setItem('accessToken', json.body.accessToken);
                    return json.body.accessToken;
                } else {
                    console.error("Invalid access token response format", errorAccessTokenResponsePropType);
                }
            }
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async function getUserInfo(accessToken) {
        try {
            const response = await fetch(`${API_URL}/user`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
            });

            if (response.ok) {
                const json = await response.json();
                if (json.error) {
                    throw new Error(json.error);
                }
                return json.body;
            } else {
                throw new Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async function checkAuth() {
        if (accessToken) {
            const userInfo = await getUserInfo(accessToken);
            if (userInfo) {
                saveSessionInfo(userInfo, accessToken, refreshToken);
            }
        } else {
            const token = getRefreshToken();
            if (token) {
                const newAccessToken = await requestNewAccessToken(token);
                if (newAccessToken) {
                    const userInfo = await getUserInfo(newAccessToken);
                    if (userInfo) {
                        saveSessionInfo(userInfo, newAccessToken, token);
                    }
                }
            }
        }
    }

    function updateUserCart(cart) {
        setUser(prevUser => {
            const updatedUser = {... prevUser, cart}
            localStorage.setItem('user', JSON.stringify(updatedUser));
            return updatedUser
        })
    }

    function saveSessionInfo(userInfo, accessToken, refreshToken) {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setUser({...userInfo, cart});
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('user', JSON.stringify({...userInfo, cart}));
        setIsAuthenticated(true);
    }

    function getAccessToken() {
        return accessToken;
    }

    function getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    function saveUser(userData) {
        saveSessionInfo(userData.body.user, userData.body.accessToken, userData.body.refreshToken);
    }

    function getUser() {
        return user;
    }

    function logout() {
        setAccessToken(null);
        setRefreshToken(null);
        setUser(initialState);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, getAccessToken, saveUser, getRefreshToken, getUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
