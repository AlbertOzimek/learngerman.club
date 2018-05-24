import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private db: AngularFireDatabase) { }


  createTranslation(text: string): AngularFireList<any> {
    // create new translation, then return it as an object observable
    const data = { 'english': text }

    const key = this.db.list('/translations').push(data).key;

    // return this.db.object(`translations/${key}`);
    return this.db.list<any>(`translations/${key}`);
  }
}
