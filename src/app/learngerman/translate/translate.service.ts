import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFirestoreCollection} from 'angularfire2/firestore/collection/collection';

/*@Injectable()
export class TranslateService {

  constructor(private db: AngularFirestore) {
  }

  createTranslation(text: string): AngularFirestoreCollection<any> {
    return this.db.collection(`translations`);
  }
}*/


@Injectable()
export class TranslateService {

  constructor() {
  }


  createTranslation(text: string): string {
    return 'message from translate service';
  }
}

/*

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
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
*/
