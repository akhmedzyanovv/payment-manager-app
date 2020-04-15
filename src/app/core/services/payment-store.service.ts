import { Injectable } from '@angular/core';
import { AddPayment, Payment } from '../../shared/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { INITIAL_PAYMENTS } from '../../shared/const';
import { getPaymentObject } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class PaymentStoreService {

  private _paymentList$: BehaviorSubject<Payment[]> = new BehaviorSubject<Payment[]>([]);
  private paymentId = INITIAL_PAYMENTS.length;

  public paymentList$: Observable<Payment[]>;

  constructor() {
    this.initPaymentData();
    this.paymentList$ = this._paymentList$.asObservable();
  }

  private initPaymentData() {
    this._paymentList$.next(INITIAL_PAYMENTS);
  }

  public getPaymentId(): number {
    return this.paymentId++;
  }

  public getPaymentList(): Observable<Payment[]> {
    return this.paymentList$;
  }

  public addPayment(addPaymentData: AddPayment): void {
    this._paymentList$.next(
      this._paymentList$.getValue().concat(getPaymentObject(addPaymentData, this.getPaymentId()))
    );
  }

  public removePayment(id: number): void {
    this._paymentList$.next(
      this._paymentList$.getValue().filter((payment: Payment) => payment.id !== id)
    );
  }

  public updatePayment(updatedPayment: Payment): void {
    this._paymentList$.next(
      this._paymentList$.getValue().map((payment: Payment) => payment.id !== updatedPayment.id ? payment : updatedPayment)
    );
  }
}
