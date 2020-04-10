import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../../models';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalPriceComponent {

  @Input()
  public paymentList$: Observable<Payment[]>;

}
