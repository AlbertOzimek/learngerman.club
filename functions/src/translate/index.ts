import * as functions from 'firebase-functions';


// https://us-central1-leansoft-266b9.cloudfunctions.net/translateText
export const translateText = functions.https.onRequest((request, response) => {
  const apiKey = 'AIzaSyDATNKWDLv3yMoYaDUTLh_qLeC_AOC0k5I';
  const lang = 'de';
  const text = 'dog';
  // https://www.googleapis.com/language/translate/v2?key=AIzaSyDATNKWDLv3yMoYaDUTLh_qLeC_AOC0k5I&source=en&target=de&q=dog
  const translateUrl = `https://www.googleapis.com/language/translate/v2?key=${apiKey}&source=en&target=${lang}&q=${text}`;
  response.send("Result of the translation will go here");
});

