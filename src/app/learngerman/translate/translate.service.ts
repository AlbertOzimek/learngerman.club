import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class TranslateService {

  constructor(private afs: AngularFirestore) { }


  createTranslation(text: string) {
    const data = { 'english': text };
    // this.afs.collection('/translations').add(data);
  }
}

