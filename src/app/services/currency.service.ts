import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private selectedCurrency$ : BehaviorSubject<string> = new BehaviorSubject<string>("INR");

  constructor() { }

  getCurrentCurrency(){
    return this.selectedCurrency$.asObservable();
  }

  setCurrentCurrency(currentCurrency:string){
    this.selectedCurrency$.next(currentCurrency)
  }
}
