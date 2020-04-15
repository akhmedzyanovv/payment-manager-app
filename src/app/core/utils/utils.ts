import { AddPayment, Payment } from '../../shared/models';
import { DEFAULT_MONTH_STATUS } from '../../shared/const';

export function getPaymentObject(addPaymentData: AddPayment, id: number): Payment {
  return  {
    id,
    paymentName: addPaymentData.paymentName,
    months: { ...DEFAULT_MONTH_STATUS},
    pricePerDay: Number(addPaymentData.pricePerDay),
    lastChangesDate: new Date()
  };
}

export function getCountOfDaysInRow(payment: Payment): number {
  return Object.values(payment.months).reduce((acc: number, currentMonth: boolean, index: number) => {
    if (!currentMonth) {
      return acc;
    }

    const currentDate = new Date();
    const numberOfDaysAtMonth = new Date(currentDate.getFullYear(), ++index, 0).getDate();

    return acc + payment.pricePerDay * numberOfDaysAtMonth;
  }, 0);
}
