import React, {createContext, useEffect, useState} from 'react'
import {getAuthToken, removeAuthToken, setAuthToken} from "../services/LocalStorageService";

export const AuthContext = createContext(false)

function AuthProvider ({children}) {

    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState('');

    const getToken = () => {
        const tk = getAuthToken();
        if (tk) {
            setAuth(true);
            setToken(tk);
        }
    }

    const setTokenInGlobal = (token) => {
        setAuthToken(token);
        setToken(token);
        setAuth(true);
    }

    const logout = () => {
        setAuth(false);
        setToken('');
        removeAuthToken();
    }

    useEffect(() => {
        getToken();
    }, [auth]);

    return (
        <AuthContext.Provider value={{auth, token, setTokenInGlobal, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;