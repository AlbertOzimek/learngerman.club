import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {firebaseConfig} from '../firebase-config';
import {map} from 'rxjs/operators';

interface TranslationObject {
  data: {
    translations;
  };
}

@Injectable()
export class TranslateService {

  private readonly translateApiUrl = `https://www.googleapis.com/language/translate/v2?key=${firebaseConfig.apiKey}`;

  constructor(private httpClient: HttpClient) {
  }

  translate(text: string, targetLanguage: string): Observable<Object> {
    return this.httpClient.get(`${this.translateApiUrl}&source=de&target=${targetLanguage}&q=${text}`) .pipe(
      map((translationObject: TranslationObject) => translationObject.data.translations[0].translatedText)
    );
  }
}

