import React, {createContext, useEffect, useState} from 'react'
import {getAuthToken} from "../services/axios";

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

    useEffect(() => {
        getToken();
    }, [auth]);

    return (
        <AuthContext.Provider value={{auth, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;