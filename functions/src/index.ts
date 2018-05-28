import * as functions from 'firebase-functions';
export * from './translate';

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// https://us-central1-leansoft-266b9.cloudfunctions.net/helloWorld
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});


// https://us-central1-leansoft-266b9.cloudfunctions.net/insertIntoDB?text=dog
exports.insertIntoDB = functions.https.onRequest((request, response) => {
  console.log('BBBBBBBBBBB - called insertIntoDB');
  const text = request.query.text;
  admin.database().ref('translations').push({'en': text}).then(snapshot => {
    response.redirect(303, snapshot.ref);
  });
});

exports.convertToUppercase = functions.database.ref('/test/{pushId}/text').onWrite(event => {
  console.log('BBBBBBBBBBB - called convertToUppercase');
  const text = event.before.val();
  const uppercaseText = text.toUpperCase();
  return event.after.ref.parent.child('uppercaseText').set(uppercaseText);
});




