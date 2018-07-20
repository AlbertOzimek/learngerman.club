import {NotFoundComponent} from './views/not-found/not-found.component';
import {Routes} from '@angular/router';
import {ContactComponent} from './views/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './learngerman/learngerman.module#LearngermanModule'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
