import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LearngermanComponent} from './learngerman.component';
import {RouterModule, Routes} from '@angular/router';
import {TranslateComponent} from './translate/translate.component';
import {TranslateService} from './translate/translate.service';
import {TranslationsManagementComponent} from './translate/translations-management/translations-management.component';

const routes: Routes = [
  {
    path: '',
    component: LearngermanComponent
  },
  {
    path: 'translate',
    component: TranslateComponent
  },
  {
    path: 'translations-management',
    component: TranslationsManagementComponent
  }
];

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { TranslateToolbarComponent } from './translate/translate-toolbar/translate-toolbar.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDATNKWDLv3yMoYaDUTLh_qLeC_AOC0k5I',
  authDomain: 'leansoft-266b9.firebaseapp.com',
  databaseURL: 'https://leansoft-266b9.firebaseio.com',
  projectId: 'leansoft-266b9',
  storageBucket: 'leansoft-266b9.appspot.com',
  messagingSenderId: '651638382911'
};

@NgModule({
  providers: [TranslateService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  ],
  declarations: [
    LearngermanComponent,
    TranslateComponent,
    TranslationsManagementComponent,
    TranslateToolbarComponent
  ]
})
export class LearngermanModule {
}
