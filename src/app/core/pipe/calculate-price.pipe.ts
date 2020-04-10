import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from '../../shared/models';
import { calculatePaymentRowPrice } from '../utils/utils';

@Pipe({
  name: 'calculatePrice'
})
export class CalculatePricePipe implements PipeTransform {

  transform(value: Payment[]): number {
    return value.reduce((acc: number, payment: Payment) => acc + calculatePaymentRowPrice(payment), 0);
  }
}
