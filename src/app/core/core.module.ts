import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentStoreService } from './services/payment-store.service';
import { PaymentViewComponent } from './components/payment-view/payment-view.component';
import { CalculatePricePipe } from './pipe/calculate-price.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PaymentViewComponent, CalculatePricePipe],
  exports: [
    PaymentViewComponent,
    CalculatePricePipe
  ],
  providers: [
    PaymentStoreService
  ]
})
export class CoreModule { }
