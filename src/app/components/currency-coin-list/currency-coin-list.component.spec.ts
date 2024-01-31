import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCoinListComponent } from './currency-coin-list.component';

describe('CurrencyCoinListComponent', () => {
  let component: CurrencyCoinListComponent;
  let fixture: ComponentFixture<CurrencyCoinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCoinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
