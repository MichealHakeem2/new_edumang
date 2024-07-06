import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPaymentComponent } from './parent-payment.component';

describe('ParentPaymentComponent', () => {
  let component: ParentPaymentComponent;
  let fixture: ComponentFixture<ParentPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentPaymentComponent]
    });
    fixture = TestBed.createComponent(ParentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
