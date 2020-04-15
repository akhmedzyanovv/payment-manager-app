import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentComponent } from './add-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('AddPaymentComponent', () => {
  let component: AddPaymentComponent;
  let fixture: ComponentFixture<AddPaymentComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ AddPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form group', () => {
    expect(component.addPaymentForm).not.toBeUndefined();
  });

  it('should emit event', () => {

    expect(component.addPaymentForm.valid).toBeFalsy();

    component.addPaymentForm.controls['paymentName'].setValue('test');
    component.addPaymentForm.controls['pricePerDay'].setValue('2000');

    expect(component.addPaymentForm.valid).toBeTruthy();

    const addPaymentEventSpy = spyOn(component['addPaymentEvent'], 'emit');

    component.addPayment();

    expect(addPaymentEventSpy).toHaveBeenCalled();
    expect(addPaymentEventSpy.calls.first().args[0].paymentName).toEqual('test');
    expect(addPaymentEventSpy.calls.first().args[0].pricePerDay).toEqual('2000');
  });
});
