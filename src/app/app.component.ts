import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cryptocurrency';
  selectCurrency:string = "INR";
  constructor(){

  }

  sendCurrency(event:any){
    console.log(event,'eeeeeeeeeeeeee');
  }
}
