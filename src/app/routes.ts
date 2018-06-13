import {TechnologiesComponent} from './views/technologies/technologies.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {Routes} from '@angular/router';
import {MethodologyComponent} from './views/methodology/methodology.component';
import {ProductsComponent} from './views/products/products.component';
import {ContactComponent} from './views/contact/contact.component';
import {HomeComponent} from './views/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'learn-german',
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
