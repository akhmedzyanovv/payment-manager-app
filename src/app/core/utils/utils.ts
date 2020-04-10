import { AddPayment, Payment } from '../../shared/models';
import { DEFAULT_MONTH_STATUS } from '../../shared/const';

export function getPaymentObject(addPaymentData: AddPayment, id: number): Payment {
  return  {
    id,
    paymentName: addPaymentData.paymentName,
    months: { ...DEFAULT_MONTH_STATUS},
    price: Number(addPaymentData.price),
    lastChangesDate: new Date()
  };
}

export function calculatePaymentRowPrice(payment: Payment): number {
  return Object.values(payment.months).reduce((acc: number, currentMonth: boolean) => currentMonth ? acc + payment.price : acc, 0);
}
