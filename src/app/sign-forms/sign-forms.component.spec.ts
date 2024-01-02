import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignFormsComponent } from './sign-forms.component';

describe('SignFormsComponent', () => {
  let component: SignFormsComponent;
  let fixture: ComponentFixture<SignFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignFormsComponent]
    });
    fixture = TestBed.createComponent(SignFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
