import React, { useState, useEffect, useContext, createContext } from 'react'
import * as firebase from 'firebase';
import app from 'firebase/app'

if (!app.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    })
}

const FirebaseContext = createContext()

export function ProvideFirebaseAuth({ children }) {
    const auth = useProvideAuth();
    return <FirebaseContext.Provider value={auth}>  {children}  </FirebaseContext.Provider>
};

export const useAuth = () => {
    return useContext(FirebaseContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const signin = (email, password) => {
        console.log("no justice no peace")
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                return response.user;
            })
            .catch((error) => {
                return error
            });
    };

    const signup = (email, password) => {
        console.log("let me in")
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                return response.user;
            })
            .catch((error) =>
                console.log(error));
    };

    const signout = () => {
        console.log("bazinga")
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
            })
            .catch((error) =>
                console.log(error));
    };

    return {
        user,
        signin,
        signup,
        signout
    };
}