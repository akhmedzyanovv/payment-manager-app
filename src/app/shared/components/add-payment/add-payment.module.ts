import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaymentComponent } from './add-payment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddPaymentComponent
  ],
  declarations: [
    AddPaymentComponent
  ]
})
export class AddPaymentModule { }
