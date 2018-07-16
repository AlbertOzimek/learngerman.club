import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjectiveDeklinationComponent } from './adjective-deklination.component';

describe('AdjectiveDeklinationComponent', () => {
  let component: AdjectiveDeklinationComponent;
  let fixture: ComponentFixture<AdjectiveDeklinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjectiveDeklinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjectiveDeklinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
