"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
exports.helloWorld2 = functions.https.onRequest((request, response) => {
    response.send('Hello World 2');
});
//# sourceMappingURL=index.js.map