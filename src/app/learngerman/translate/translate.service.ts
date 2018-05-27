import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFirestoreCollection} from 'angularfire2/firestore/collection/collection';


@Injectable()
export class TranslateService {

  constructor(private afs: AngularFirestore) { }


  createTranslation(text: string): AngularFirestoreCollection<any> {
    // create new translation, then return it as an object observable
    const data = { 'english': text }

    const key = this.afs.collection('/translations').add(data);

    return this.afs.collection(`translations/${key}`);
  }
}

