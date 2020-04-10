import { Component, OnInit } from '@angular/core';
import { PaymentStoreService } from './core/services/payment-store.service';
import { AddPayment, Payment } from './shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public paymentList$: Observable<Payment[]>;

  constructor(private paymentStoreService: PaymentStoreService) { }

  ngOnInit(): void {
    this.paymentList$ = this.paymentStoreService.getPaymentList();
  }

  public addPayment(addPaymentData: AddPayment): void {
    this.paymentStoreService.addPayment(addPaymentData);
  }

  public removePayment(id: number): void {
    this.paymentStoreService.removePayment(id);
  }

  public updatePayment(updatedPayment: Payment): void {
    updatedPayment.lastChangesDate = new Date();
    this.paymentStoreService.updatePayment(updatedPayment);
  }
}
