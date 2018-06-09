import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {firebaseConfig} from '../firebase-config';

@Injectable()
export class TranslateService {

  private readonly translateApiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.translateApiUrl = `https://www.googleapis.com/language/translate/v2?key=${firebaseConfig.apiKey}`;
  }

  translate(text: string, targetLanguages: Array<string>): Observable<Object> {
    const queryUrl = `&source=de&target=${targetLanguages[0]}&q=${text}`;
    const url = this.translateApiUrl + queryUrl;
    return this.httpClient.get(url);
  }
}

