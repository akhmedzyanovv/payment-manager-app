import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AddPaymentModule } from './shared/components/add-payment/add-payment.module';
import { TotalPriceModule } from './shared/components/total-price/total-price.module';
import { CoreModule } from './core/core.module';
import { DebugElement } from '@angular/core';
import { AddPayment, Payment } from './shared/models';
import { By } from '@angular/platform-browser';
import { PaymentStoreService } from './core/services/payment-store.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let component: AppComponent;
  let paymentStoreService: PaymentStoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AddPaymentModule,
        TotalPriceModule,
        CoreModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    paymentStoreService = TestBed.get(PaymentStoreService);
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get payment list', () => {
    component.ngOnInit();
    expect(component.paymentList$).not.toBeUndefined();
  });

  it('should add payment', () => {
    const addPaymentSpy = spyOn(paymentStoreService, 'addPayment').and.callThrough();
    fixture.detectChanges();

    const addPaymentData: AddPayment = {
      paymentName: 'test',
      price: '2000',
    };

    component.addPayment(addPaymentData);

    fixture.detectChanges();

    const countAfter = de.queryAll(By.css('tr')).length;

    expect(addPaymentSpy).toHaveBeenCalled();
    expect(countAfter).toEqual(9);
  });

  it('should remove payment', () => {
    const removePaymentSpy = spyOn(paymentStoreService, 'removePayment').and.callThrough();
    fixture.detectChanges();

    const countBefore = de.queryAll(By.css('tr')).length;

    expect(countBefore).toEqual(8);

    component.removePayment(0);
    fixture.detectChanges();

    const countAfter = de.queryAll(By.css('tr')).length;

    expect(removePaymentSpy).toHaveBeenCalled();
    expect(countAfter).toEqual(7);
  });

  it('should update payment', () => {
    const updatePaymentSpy = spyOn(paymentStoreService, 'updatePayment').and.callThrough();
    fixture.detectChanges();

    de.query(By.css('input[type=checkbox]')).nativeElement.click();
    expect(updatePaymentSpy).toHaveBeenCalled();
  });

});
