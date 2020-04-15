import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentViewComponent } from './payment-view.component';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { PAYMENTS } from '../../../shared/mocks/test-payments';
import { By } from '@angular/platform-browser';
import { MockRowPipe } from '../../../shared/mocks/MockPipe';

describe('PaymentViewComponent', () => {
  let component: PaymentViewComponent;
  let fixture: ComponentFixture<PaymentViewComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentViewComponent, MockRowPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentViewComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.paymentList$ = of(JSON.parse(JSON.stringify(PAYMENTS)));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit remove event', () => {
    const removePaymentEventSpy = spyOn(component['removePaymentEvent'], 'emit');
    const removeButton = de.query(By.css('.btn.btn-remove')).nativeElement;

    removeButton.click();
    fixture.detectChanges();

    expect(removePaymentEventSpy).toHaveBeenCalled();
  });

  it('should emit update event', () => {
    const updatePaymentEventSpy = spyOn(component['updatePaymentEvent'], 'emit');
    const checkbox = de.query(By.css('input[type=checkbox]')).nativeElement;

    checkbox.click();
    fixture.detectChanges();

    expect(updatePaymentEventSpy).toHaveBeenCalled();
  });
});
