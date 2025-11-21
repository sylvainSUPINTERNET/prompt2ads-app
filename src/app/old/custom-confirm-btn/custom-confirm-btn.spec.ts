import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomConfirmBtn } from './custom-confirm-btn';

describe('CustomConfirmBtn', () => {
  let component: CustomConfirmBtn;
  let fixture: ComponentFixture<CustomConfirmBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomConfirmBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomConfirmBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
