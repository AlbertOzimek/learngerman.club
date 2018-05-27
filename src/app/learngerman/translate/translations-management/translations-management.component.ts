import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

interface Post {
  en: string;
  de: string;
  pl: string;
}

@Component({
  selector: 'leansoft-translations-management',
  templateUrl: './translations-management.component.html',
  styleUrls: ['./translations-management.component.scss']
})
export class TranslationsManagementComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  english: string;
  german: string;
  polish: string;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.postsCol = this.afs.collection('translations');
    this.posts = this.postsCol.valueChanges();
  }

  addPost() {
    this.afs.collection('translations').add({'en': this.english, 'de': this.german, 'pl': this.polish});
    // this.afs.collection('translations').doc('leansoft').set({'en': this.english, 'de': this.german});
  }

}
