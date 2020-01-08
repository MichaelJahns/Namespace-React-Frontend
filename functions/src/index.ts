import * as functions from 'firebase-functions';
import { database } from '../util/admin';


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("I want a miracle!");
});

export const getAllCharacters = functions.https.onRequest((request, response) => {
    database
        .collection("characters")
        .where("campaign", "==", "iqNOydMMd4hJY5uxmveW")
        .get()
        .then((querySnapshot: any) => {
            const characters: any[] = []
            querySnapshot.forEach((doc: any) => {
                characters.push(doc.data);
            })
            return response.json(characters);
        })
        .catch((err: any) => console.error(err))
})

