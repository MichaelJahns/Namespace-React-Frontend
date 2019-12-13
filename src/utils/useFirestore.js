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
    const [characters, setCharacters] = React.useState([]);

    const setUpListeners = () => {
        db.collection("characters").where("campaign", "==", "iqNOydMMd4hJY5uxmveW")
            .onSnapshot(function (querySnapshot) {
                var characters = [];
                querySnapshot.forEach(function (character) {
                    characters.push(character.data());
                });
                setCharacters(characters);
            });
    }


    useEffect(() => {
        setUpListeners();
        getAllCharacters();
    }, []);

    const Test = (name, title, notes, relationships) => {
        db.collection("characters").add({
            name: name,
            title: title,
            notes: notes,
            relationships: relationships,
            campaign: "iqNOydMMd4hJY5uxmveW"
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                setFireStoreError(error);
            });
    };

    const getAllCharacters = () => {
        let allCharacters = [];
        db
            .collection("characters").where("campaign", "==", "iqNOydMMd4hJY5uxmveW")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    allCharacters.push(doc.data())
                })
                setCharacters(allCharacters);
                console.log(allCharacters);
            })

    }

    return {
        characters,
        fireStoreError,
        Test,
        getAllCharacters
    };
}