import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveBarComponent } from './nave-bar.component';

describe('NaveBarComponent', () => {
  let component: NaveBarComponent;
  let fixture: ComponentFixture<NaveBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaveBarComponent]
    });
    fixture = TestBed.createComponent(NaveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
