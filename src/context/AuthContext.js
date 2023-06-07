import React, { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const navigate = useNavigate()

    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        userName: '',
        email: '',
        password: ''
    });
    console.log(isAuth)

    function login( name, email, password ) {
        setIsAuth({
            isAuth: true,
            userName: name,
            email: email,
            password: password
        })
        console.log(isAuth)
        navigate('/profile')
        console.log('Gebruiker is ingelogd!')
    }

    function logout() {
        setIsAuth(false)
        console.log('Gebruiker is uitgelogd!')
    }

    const data = {
        isAuth: isAuth,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={ data }>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;