import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from '../../../shared/models';
import { getCountOfDaysInRow } from '../../utils/utils';

@Pipe({
  name: 'rowPrice'
})
export class RowPricePipe implements PipeTransform {

  transform(payment: Payment): number {
    return getCountOfDaysInRow(payment);
  }

}
