import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Month, Payment } from '../../../shared/models';
import { MONTHS } from '../../../shared/const';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentViewComponent {

  @Input()
  public paymentList$: Observable<Payment[]>;

  @Output()
  private removePaymentEvent: EventEmitter<number> = new EventEmitter();

  @Output()
  private updatePaymentEvent: EventEmitter<Payment> = new EventEmitter();

  public months: Month[] = MONTHS;

  public removeEvent(id: number): void {
    this.removePaymentEvent.emit(id);
  }

  public trackByFn(index, item: Payment) {
    return item.id;
  }

  public updateEvent(monthKey: string, payment: Payment) {
    payment.months[monthKey] = !payment.months[monthKey];
    this.updatePaymentEvent.emit({ ...payment });
  }
}
