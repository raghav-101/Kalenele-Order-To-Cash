import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizedOrderComponent } from './finalized-order.component';

describe('FinalizedOrderComponent', () => {
  let component: FinalizedOrderComponent;
  let fixture: ComponentFixture<FinalizedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizedOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
