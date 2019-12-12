import React, { useEffect, useContext, createContext } from 'react'
import * as firebase from 'firebase';
import 'firebase/firestore'
require("firebase/firestore");

var db = firebase.firestore();

const FireStoreContext = createContext()

export function ProvideFirestore({ children }) {
    const firestore = useProvideFireStore();
    return <FireStoreContext.Provider value={firestore}>  {children}  </FireStoreContext.Provider>
};

export const useFirestore = () => {
    return useContext(FireStoreContext);
};

function useProvideFireStore() {
    const [fireStoreError, setFireStoreError] = React.useState(null);

    useEffect(() => {
    }, []);

    const Test = (name, title, notes, relationships) => {
        db.collection("users").add({
            name: name,
            title: title,
            notes: notes,
            relationships: relationships
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                setFireStoreError(error);
            });
    };

    return {
        fireStoreError,
        Test
    };
}