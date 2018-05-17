import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavBarMenuComponent} from './nav-bar-menu.component';
import {MatListModule} from '@angular/material';

describe('NavBarMenuComponent', () => {
  let component: NavBarMenuComponent;
  let fixture: ComponentFixture<NavBarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [NavBarMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
