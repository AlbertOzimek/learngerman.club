import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {NavBarMenuComponent} from './nav-bar/nav-bar-menu/nav-bar-menu.component';
import {HomeComponent} from './views/home/home.component';
import {TechnologiesComponent} from './views/technologies/technologies.component';
import {AboutComponent} from './views/about/about.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {MethodologyComponent} from './views/methodology/methodology.component';
import {ProductsComponent} from './views/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarMenuComponent,
    HomeComponent,
    TechnologiesComponent,
    AboutComponent,
    NotFoundComponent,
    MethodologyComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
