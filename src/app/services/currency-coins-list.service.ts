import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyCoinsListService {
  constructor(private _http: HttpClient) {}

  getCurrencyData(currency: string): Observable<any> {
    return this._http.get<any>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
  }

  getTrendingCurrency(currency: string): Observable<any> {
    return this._http.get<any>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
  }

  getGraphicalCurrencyData(coinId: string, currency: string, days: number): Observable<any>{
    return this._http.get<any>(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
    );
  }

  getCurrencyById(coinId:string): Observable<any> {
    return this._http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  }
}
