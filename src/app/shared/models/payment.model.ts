import { MonthsStatus } from './months-status.model';

export interface Payment {
  id: number;
  paymentName: string;
  price: number;
  months: MonthsStatus;
  lastChangesDate: Date;
}
