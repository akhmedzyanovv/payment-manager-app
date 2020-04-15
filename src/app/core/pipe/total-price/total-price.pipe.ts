import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from '../../../shared/models';
import { getCountOfDaysInRow } from '../../utils/utils';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(value: Payment[]): number {
    return value.reduce((acc: number, payment: Payment) => acc + getCountOfDaysInRow(payment), 0);
  }
}
