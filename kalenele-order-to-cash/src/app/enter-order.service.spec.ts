import { TestBed } from '@angular/core/testing';

import { EnterOrderService } from './enter-order.service';

describe('EnterOrderService', () => {
  let service: EnterOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
