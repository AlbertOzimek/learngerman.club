import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearngermanComponent } from './learngerman.component';

describe('LearngermanComponent', () => {
  let component: LearngermanComponent;
  let fixture: ComponentFixture<LearngermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearngermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearngermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
