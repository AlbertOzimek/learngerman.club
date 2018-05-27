import * as functions from 'firebase-functions';

// https://us-central1-leansoft-266b9.cloudfunctions.net/translateText
export const translateText = functions.https.onRequest((request, response) => {
  response.send("Hello from TranslateText cloud function!");
});

