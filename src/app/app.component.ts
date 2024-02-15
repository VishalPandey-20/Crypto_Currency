import { Component } from '@angular/core';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cryptocurrency';
  selectCurrency:string = "INR";
  constructor(
    private _currencyService:CurrencyService
  ){

  }

  sendCurrency(event:any){
    this._currencyService.setCurrentCurrency(event);
  }
}
