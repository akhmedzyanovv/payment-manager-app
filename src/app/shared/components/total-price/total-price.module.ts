import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPriceComponent } from './total-price.component';
import { CoreModule } from '../../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    TotalPriceComponent
  ],
  declarations: [TotalPriceComponent]
})
export class TotalPriceModule { }
