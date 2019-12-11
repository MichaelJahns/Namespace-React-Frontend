import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from './firebase';

export const useAuth = auth => {
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(null);

    const firebase = useContext(FirebaseContext)

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUser(user);
            setAuthenticated(true);
        } else {
            setUser(null);
            setAuthenticated(false);
        }
    });

    useEffect(() => {

    });

    return [user, authenticated];
};

export default useAuth;