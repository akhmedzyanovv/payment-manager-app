import { Payment } from '../models';

export const PAYMENTS: Payment[] = [
  {
    id: 0,
    paymentName: '0',
    months: {
      january: true,
      february: false,
      march: false,
      april: false,
      may: false,
      june: false,
      july: false,
      august: false,
      september: false,
      october: false,
      november: true,
      december: true
    },
    price: 10,
    lastChangesDate: new Date()
  },
  {
    id: 1,
    paymentName: '1',
    months: {
      january: false,
      february: false,
      march: true,
      april: false,
      may: false,
      june: false,
      july: false,
      august: false,
      september: false,
      october: false,
      november: false,
      december: true
    },
    price: 20,
    lastChangesDate: new Date()
  },
  {
    id: 2,
    paymentName: '2',
    months: {
      january: false,
      february: false,
      march: false,
      april: false,
      may: false,
      june: false,
      july: false,
      august: true,
      september: false,
      october: false,
      november: false,
      december: false
    },
    price: 30,
    lastChangesDate: new Date()
  },
];
