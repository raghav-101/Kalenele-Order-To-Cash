import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsFinalComponent } from './order-details-final.component';

describe('OrderDetailsFinalComponent', () => {
  let component: OrderDetailsFinalComponent;
  let fixture: ComponentFixture<OrderDetailsFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
