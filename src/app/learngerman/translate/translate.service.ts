import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {firebaseConfig} from '../firebase-config';
import {map, mergeMap} from 'rxjs/operators';

interface TranslationObject {
  data: {
    translations;
  };
}

interface Translate {
  en: string;
  pl: string;
}

@Injectable()
export class TranslateService {

  private readonly translateApiUrl = `https://www.googleapis.com/language/translate/v2?key=${firebaseConfig.apiKey}`;

  constructor(private httpClient: HttpClient) {
  }

  translate(userInput: string): Observable<Translate> {
    return this.callTranslateApi(userInput, 'en').pipe(
      mergeMap((en) => {
        return this.callTranslateApi(userInput, 'pl')
          .pipe(map((pl) => {
            return {en, pl};
          }));
      })
    );
  }

  callTranslateApi(text: string, targetLanguage: string): Observable<string> {
    return this.httpClient.get(`${this.translateApiUrl}&source=de&target=${targetLanguage}&q=${text}`) .pipe(
      map((translationObject: TranslationObject) => translationObject.data.translations[0].translatedText)
    );
  }
}

