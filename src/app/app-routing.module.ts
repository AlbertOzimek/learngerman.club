import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {TechnologiesComponent} from './views/technologies/technologies.component';
import {AboutComponent} from './views/about/about.component';
import {NotFoundComponent} from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'technologies',
    component: TechnologiesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
