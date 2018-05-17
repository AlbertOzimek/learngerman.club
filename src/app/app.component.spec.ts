import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NavBarMenuComponent} from './nav-bar/nav-bar-menu/nav-bar-menu.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AboutComponent} from './views/about/about.component';
import {TechnologiesComponent} from './views/technologies/technologies.component';
import {MethodologyComponent} from './views/methodology/methodology.component';
import {ProductsComponent} from './views/products/products.component';
import {HomeComponent} from './views/home/home.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {LearngermanComponent} from './views/products/learngerman/learngerman.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ],
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
    }).compileComponents();
  }));
/*  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'leansoft'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('leansoft');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to leansoft!');
  }));*/
});
