import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPayment } from '../../models';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPaymentComponent implements OnInit {

  @Output()
  private addPaymentEvent: EventEmitter<AddPayment> = new EventEmitter();

  public addPaymentForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.addPaymentForm = new FormGroup({
      paymentName: new FormControl('', [Validators.required]),
      pricePerDay: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)])
    });
  }

  public addPayment(): void {
    this.addPaymentEvent.emit(this.addPaymentForm.value);
    this.addPaymentForm.reset();
  }
}
