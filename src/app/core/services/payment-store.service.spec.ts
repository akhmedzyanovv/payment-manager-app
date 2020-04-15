import { async, TestBed } from '@angular/core/testing';
import { PaymentStoreService } from './payment-store.service';
import { Observable } from 'rxjs';
import { AddPayment, Payment } from '../../shared/models';
import { INITIAL_ADD_DATA, INITIAL_PAYMENTS } from '../../shared/const';

describe('PaymentStoreService', () => {
  let service: PaymentStoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({});
    service = new PaymentStoreService();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get correct payment id', () => {
    for (let i = INITIAL_PAYMENTS.length; i < 100; i++) {
      expect(service.getPaymentId()).toEqual(i);
    }
  });

  it('should get payment list', () => {
    const list = service.getPaymentList();

    expect(list).not.toBeUndefined();
    expect(list instanceof Observable).toBe(true);
  });

  it('should add payment', (done: DoneFn) => {
    const addPaymentData: AddPayment = { ...INITIAL_ADD_DATA[1]};
    const payment: Payment = { ...INITIAL_PAYMENTS[1]};

    service.addPayment(addPaymentData);
    service.getPaymentList().subscribe((payments: Payment[]) => {
      expect(payments[payments.length - 1].paymentName).toEqual(payment.paymentName);
      expect(payments[payments.length - 1].pricePerDay).toEqual(payment.pricePerDay);
      expect(payments[payments.length - 1].months).toEqual(payment.months);
      done();
    });
  });

  it('should remove payment', (done: DoneFn) => {
    service.addPayment({ ...INITIAL_ADD_DATA[0] });
    service.addPayment({ ...INITIAL_ADD_DATA[1] });
    service.addPayment({ ...INITIAL_ADD_DATA[2] });

    service.removePayment(2);
    service.getPaymentList().subscribe((payments: Payment[]) => {
      expect(payments.length).toEqual(INITIAL_PAYMENTS.length + 2);
      done();
    });
  });

  it('should update payment', (done: DoneFn) => {
    service.addPayment({ ...INITIAL_ADD_DATA[0] });
    service.addPayment({ ...INITIAL_ADD_DATA[1] });
    service.addPayment({ ...INITIAL_ADD_DATA[2] });

    const payment: Payment = { ...INITIAL_PAYMENTS[2] };
    payment.months.december = true;

    service.updatePayment(payment);
    service.getPaymentList().subscribe((payments: Payment[]) => {
      expect(payments[2].months.december).toEqual(true);
      done();
    });
  });

});
