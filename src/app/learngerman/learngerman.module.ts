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
import { TranslateToolbarComponent } from './translate/translate-toolbar/translate-toolbar.component';
import {HttpClientModule} from '@angular/common/http';
import {firebaseConfig} from './firebase-config';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AdjectiveDeklinationComponent } from './grammar/deklination/adjective/adjective-deklination/adjective-deklination.component';
import { GrammarComponent } from './grammar/grammar.component';
import { ArticleComponent } from './grammar/article/article.component';

const routes: Routes = [
  {
    path: '',
    component: GrammarComponent
  },
  {
    path: 'translate',
    component: TranslateComponent
  },
  {
    path: 'translations-management',
    component: TranslationsManagementComponent
  },
  {
    path: 'grammar',
    component: GrammarComponent
  }
];

@NgModule({
  providers: [TranslateService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    LearngermanComponent,
    TranslateComponent,
    TranslationsManagementComponent,
    TranslateToolbarComponent,
    AdjectiveDeklinationComponent,
    GrammarComponent,
    ArticleComponent
  ]
})
export class LearngermanModule {
}
