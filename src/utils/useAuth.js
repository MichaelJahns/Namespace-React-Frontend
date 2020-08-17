import React, { useState, useEffect, useContext, createContext } from 'react'

const AuthContext = createContext()

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>  {children}  </AuthContext.Provider>
};

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null)

    useEffect(() => {
    }, [user]);

    return {
        user,
        setUser
    };
}
