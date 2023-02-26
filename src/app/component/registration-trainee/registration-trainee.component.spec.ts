import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTraineeComponent } from './registration-trainee.component';

describe('RegistrationTraineeComponent', () => {
  let component: RegistrationTraineeComponent;
  let fixture: ComponentFixture<RegistrationTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationTraineeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
