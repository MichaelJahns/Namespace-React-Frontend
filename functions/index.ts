import * as functions from 'firebase-functions';
import { database } from './util/admin';
import * as express from 'express'

const app = express();

const { signup } = require('./handlers/users');

app.post('/signup', signup);

app.get('/characters/', (request, response) => {
    database
        .collection("characters")
        .where("campaign", "==", "iqNOydMMd4hJY5uxmveW")
        .get()
        .then((querySnapshot: any) => {
            const characters: any[] = []
            querySnapshot.forEach((doc: any) => {
                characters.push({
                    characterID: doc.id,
                    data: doc.data()
                })
            })
            return response.json(characters);
        })
        .catch((err: any) => {
            console.error(err)
            response.status(500)
        })
})

app.get('/characters/:id', (request, response) => {
    database
        .collection("characters")
        .where("id", "==", request.body.characterID)
        .get()
        .then((data) => {
            console.log(data);
        })
        .catch((err: any) => {
            console.error(err)
            response.status(500)
        })
})

app.post('/characters', (request, response) => {
    const newCharacter = {
        name: request.body.name,
        title: request.body.title
    }
    database
        .collection("characters")
        .doc()
        .set({ newCharacter })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
})

exports.api = functions.https.onRequest(app);
