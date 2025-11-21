import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomError } from './custom-error';

describe('CustomError', () => {
  let component: CustomError;
  let fixture: ComponentFixture<CustomError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
