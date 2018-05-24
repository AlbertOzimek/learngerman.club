import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LearngermanComponent} from './learngerman.component';
import {RouterModule, Routes} from '@angular/router';
import { TranslateComponent } from './translate/translate.component';


const routes: Routes = [
  {path: '', component: LearngermanComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    LearngermanComponent,
    TranslateComponent
  ]
})
export class LearngermanModule { }
