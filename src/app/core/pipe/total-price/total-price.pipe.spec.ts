import { TotalPricePipe } from './total-price.pipe';
import { Payment } from '../../../shared/models';
import { PAYMENTS } from '../../../shared/mocks/test-payments';

describe('TotalPricePipe', () => {
  it('create an instance', () => {
    const pipe = new TotalPricePipe();
    expect(pipe).toBeTruthy();
  });

  it('should calculate total price', () => {
    const pipe = new TotalPricePipe();
    const payments: Payment[] = [ ...PAYMENTS];
    const output = 3090;

    expect(pipe.transform(payments)).toEqual(output);
  });

  it('should calculate empty price', () => {
    const pipe = new TotalPricePipe();
    const payments: Payment[] = [];
    const output = 0;

    expect(pipe.transform(payments)).toEqual(output);
  });
});
