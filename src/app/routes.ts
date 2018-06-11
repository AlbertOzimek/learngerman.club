import {TechnologiesComponent} from './views/technologies/technologies.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {Routes} from '@angular/router';
import {MethodologyComponent} from './views/methodology/methodology.component';
import {ProductsComponent} from './views/products/products.component';
import {ContactComponent} from './views/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './learngerman/learngerman.module#LearngermanModule' // HomeComponent
  },
  {
    path: 'learngerman',
    loadChildren: './learngerman/learngerman.module#LearngermanModule'
  },
  {
    path: 'methodology',
    component: MethodologyComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'technologies',
    component: TechnologiesComponent
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
