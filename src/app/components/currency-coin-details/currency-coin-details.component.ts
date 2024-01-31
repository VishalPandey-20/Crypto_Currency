import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { BaseChartDirective } from 'ng2-charts';
import { CurrencyCoinsListService } from 'src/app/services/currency-coins-list.service';
// import {ChartType,ChartConfiguration} from "chart.js"
@Component({
  selector: 'app-currency-coin-details',
  templateUrl: './currency-coin-details.component.html',
  styleUrls: ['./currency-coin-details.component.scss'],
})
export class CurrencyCoinDetailsComponent implements OnInit {
  coinData: any;
  coinId!: string;
  days: number = 1;
  currency: string = 'INR';
  // public lineChartData:ChartConfiguration['data'] = {
  //   datasets: [
  //     {
  //       data: [],
  //       label: `Price Trends`,
  //       backgroundColor: 'rgba(148,159,177,0.2)',
  //       borderColor: '#009688',
  //       pointBackgroundColor: '#009688',
  //       pointBorderColor: '#009688',
  //       pointHoverBackgroundColor: '#009688',
  //       pointHoverBorderColor: '#009688',

  //     }
  //   ],
  //   labels: []
  // }

  // public lineChartOption:ChartConfiguration['options'] = {
  //   elements:{
  //     point:{
  //       radius:1
  //     }
  //   },
  //   plugins:{
  //     legend:{display:true}
  //   }
  // }

  // public lineChartType: ChartType="line";
  // @ViewChild(BaseChartDirective) myLineChart !:BaseChartDirective;

  constructor(
    private _service: CurrencyCoinsListService,
    private _activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRouter.params.subscribe((res: any) => {
      this.coinId = res.id;
    });
    this.getCurrencyById();
  }

  getCurrencyById() {
    this._service.getCurrencyById(this.coinId).subscribe((res: any) => {
      console.log(res,'resresresresres');
      
      this.coinData = res;
    });
  }
}
