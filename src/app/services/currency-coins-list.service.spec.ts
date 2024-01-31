import { TestBed } from '@angular/core/testing';

import { CurrencyCoinsListService } from './currency-coins-list.service';

describe('CurrencyCoinsListService', () => {
  let service: CurrencyCoinsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyCoinsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
