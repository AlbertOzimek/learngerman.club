import {fakeAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavBarComponent} from './nav-bar.component';
import {NavBarMenuComponent} from './nav-bar-menu/nav-bar-menu.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routes} from '../views/routes';
import {TechnologiesComponent} from '../views/technologies/technologies.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from '../views/home/home.component';
import {LearngermanComponent} from '../views/products/learngerman/learngerman.component';
import {AppComponent} from '../app.component';
import {AboutComponent} from '../views/about/about.component';
import {MethodologyComponent} from '../views/methodology/methodology.component';
import {ProductsComponent} from '../views/products/products.component';
import {LayoutModule} from '@angular/cdk/layout';
import {NotFoundComponent} from '../views/not-found/not-found.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent,
        NavBarMenuComponent,
        HomeComponent,
        TechnologiesComponent,
        AboutComponent,
        NotFoundComponent,
        MethodologyComponent,
        ProductsComponent,
        LearngermanComponent
      ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
