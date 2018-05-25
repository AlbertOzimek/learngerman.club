import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'leansoft-translations-management',
  templateUrl: './translations-management.component.html',
  styleUrls: ['./translations-management.component.scss']
})
export class TranslationsManagementComponent implements OnInit {

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }

}
