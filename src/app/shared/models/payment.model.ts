import { MonthsStatus } from './months-status.model';

export interface Payment {
  id: number;
  paymentName: string;
  pricePerDay: number;
  months: MonthsStatus;
  lastChangesDate: Date;
}
