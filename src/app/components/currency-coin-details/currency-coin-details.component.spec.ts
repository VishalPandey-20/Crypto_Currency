import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCoinDetailsComponent } from './currency-coin-details.component';

describe('CurrencyCoinDetailsComponent', () => {
  let component: CurrencyCoinDetailsComponent;
  let fixture: ComponentFixture<CurrencyCoinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCoinDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCoinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
