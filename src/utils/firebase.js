import React, { createContext } from 'react'
import app from 'firebase/app'
import * as firebase from 'firebase';

const FirebaseContext = createContext(null)
export { FirebaseContext }

export default ({ children }) => {
    // TODO: Best practice is to do this not with a .env but with a small backend server
    // For now we are working on looks primarily

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

    return (
        <FirebaseContext.Provider value={app}>
            {children}
        </FirebaseContext.Provider>
    )
}