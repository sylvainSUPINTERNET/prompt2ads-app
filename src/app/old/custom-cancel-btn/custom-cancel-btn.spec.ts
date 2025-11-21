import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCancelBtn } from './custom-cancel-btn';

describe('CustomCancelBtn', () => {
  let component: CustomCancelBtn;
  let fixture: ComponentFixture<CustomCancelBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCancelBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCancelBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
