import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentViewComponent } from './components/payment-view/payment-view.component';
import { RowPricePipe } from './pipe/row-price/row-price.pipe';
import { TotalPricePipe } from './pipe/total-price/total-price.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PaymentViewComponent,
    TotalPricePipe,
    RowPricePipe
  ],
  exports: [
    PaymentViewComponent,
    TotalPricePipe,
    RowPricePipe
  ]
})
export class CoreModule { }
