import { RowPricePipe } from './row-price.pipe';
import { Payment } from '../../../shared/models';
import { PAYMENTS } from '../../../shared/mocks/test-payments';

describe('RowPricePipe', () => {
  it('create an instance', () => {
    const pipe = new RowPricePipe();
    expect(pipe).toBeTruthy();
  });

  it('should calculate row price', () => {
    const pipe = new RowPricePipe();
    const payments: Payment = { ...PAYMENTS[0]};
    const output = 920;

    expect(pipe.transform(payments)).toEqual(output);
  });
});
