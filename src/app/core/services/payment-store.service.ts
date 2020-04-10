import { Injectable } from '@angular/core';
import { AddPayment, Payment } from '../../shared/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { INITIAL_PAYMENTS } from '../../shared/const';
import { getPaymentObject } from '../utils/utils';

@Injectable()
export class PaymentStoreService {

  private paymentList$: BehaviorSubject<Payment[]> = new BehaviorSubject<Payment[]>([]);
  private paymentId = INITIAL_PAYMENTS.length;

  constructor() {
    this.initPaymentData();
  }

  private initPaymentData() {
    this.paymentList$.next(INITIAL_PAYMENTS);
  }

  public getPaymentId(): number {
    return this.paymentId++;
  }

  public getPaymentList(): Observable<Payment[]> {
    return this.paymentList$.asObservable();
  }

  public addPayment(addPaymentData: AddPayment): void {
    this.paymentList$.next(
      this.paymentList$.getValue().concat(getPaymentObject(addPaymentData, this.getPaymentId()))
    );
  }

  public removePayment(id: number): void {
    this.paymentList$.next(
      this.paymentList$.getValue().filter((payment: Payment) => payment.id !== id)
    );
  }

  public updatePayment(updatedPayment: Payment): void {
    this.paymentList$.next(
      this.paymentList$.getValue().map((payment: Payment) => payment.id !== updatedPayment.id ? payment : updatedPayment)
    );
  }
}
