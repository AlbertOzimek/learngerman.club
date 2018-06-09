import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LearngermanComponent} from './learngerman.component';
import {RouterModule, Routes} from '@angular/router';
import {TranslateComponent} from './translate/translate.component';
import {TranslateService} from './translate/translate.service';
import {TranslationsManagementComponent} from './translate/translations-management/translations-management.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { TranslateToolbarComponent } from './translate/translate-toolbar/translate-toolbar.component';
import {HttpClientModule} from '@angular/common/http';
import {firebaseConfig} from './firebase-config';

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
    HttpClientModule,
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
