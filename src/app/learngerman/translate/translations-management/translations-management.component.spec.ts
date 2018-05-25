import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationsManagementComponent } from './translations-management.component';

describe('TranslationsManagementComponent', () => {
  let component: TranslationsManagementComponent;
  let fixture: ComponentFixture<TranslationsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
