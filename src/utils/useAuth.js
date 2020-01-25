import React, { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios';
import * as firebase from 'firebase';
import app from 'firebase/app'
import 'firebase/firestore'
require("firebase/firestore");

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
    const [serverError, setServerError] = useState(null);

    const setAuthorizationHeader = (token) => {
        console.log(token);
        const FBIdToken = `Bearer ${token}`;
        axios.defaults.headers.common['Authorization'] = FBIdToken;
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setServerError(null);
            if (user) {
                console.log(user);
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const login = (email, password) => {
        const data = {
            "email": email,
            "password": password
        }
        axios
            .post('/login', data)
            .then(response => {
                console.log("three")
                setAuthorizationHeader(response.data);
                setUser(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const signup = (data) => {
        console.log("two")
        axios
            .post('/signup', data)
            .then(response => {
                setAuthorizationHeader(response.data);
                setUser(response.data);
            })
            .catch(error => {
                console.log(error)
                setServerError(error.code)
            });
    }
    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
            })
            .catch((error) => {
                setServerError(error);
                return error;
            })
    };

    return {
        user,
        firebaseError: serverError,
        login,
        signup,
        signout
    };
}
