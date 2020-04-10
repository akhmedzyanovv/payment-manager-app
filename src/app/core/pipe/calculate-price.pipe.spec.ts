import { CalculatePricePipe } from './calculate-price.pipe';
import { Payment } from '../../shared/models';
import { PAYMENTS } from '../../shared/mocks/test-payments';

describe('CalculatePricePipe', () => {
  it('create an instance', () => {
    const pipe = new CalculatePricePipe();
    expect(pipe).toBeTruthy();
  });

  it('should calculate price', () => {
    const pipe = new CalculatePricePipe();
    const payments = [ ...PAYMENTS];
    const output = 100;

    expect(pipe.transform(payments)).toEqual(output);
  });

  it('should calculate empty price', () => {
    const pipe = new CalculatePricePipe();
    const payments: Payment[] = [];
    const output = 0;

    expect(pipe.transform(payments)).toEqual(output);
  });
});
