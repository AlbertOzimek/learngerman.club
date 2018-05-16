import {AboutComponent} from './about/about.component';
import {TechnologiesComponent} from './technologies/technologies.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {Routes} from '@angular/router';
import {MethodologyComponent} from './methodology/methodology.component';
import {ProductsComponent} from './products/products.component';
import {LearngermanComponent} from './products/learngerman/learngerman.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'products/learngerman',
    component: LearngermanComponent
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
