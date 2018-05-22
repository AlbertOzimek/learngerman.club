import {AboutComponent} from './views/about/about.component';
import {TechnologiesComponent} from './views/technologies/technologies.component';
import {HomeComponent} from './views/home/home.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {Routes} from '@angular/router';
import {MethodologyComponent} from './views/methodology/methodology.component';
import {ProductsComponent} from './views/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
