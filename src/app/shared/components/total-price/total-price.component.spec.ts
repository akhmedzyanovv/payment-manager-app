import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockPipe } from '../../mocks/MockPipe';
import { TotalPriceComponent } from './total-price.component';

describe('TotalPriceComponent', () => {
  let component: TotalPriceComponent;
  let fixture: ComponentFixture<TotalPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPriceComponent, MockPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
