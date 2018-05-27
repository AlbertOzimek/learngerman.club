import * as functions from 'firebase-functions';
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// https://us-central1-leansoft-266b9.cloudfunctions.net/helloWorld
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export * from './translate';
