import { TestBed } from '@angular/core/testing';

import { PaymentParentService } from './payment-parent.service';

describe('PaymentParentService', () => {
  let service: PaymentParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
