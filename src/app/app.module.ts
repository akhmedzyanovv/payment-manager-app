import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AddPaymentModule } from './shared/components/add-payment/add-payment.module';
import { TotalPriceModule } from './shared/components/total-price/total-price.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AddPaymentModule,
    TotalPriceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
