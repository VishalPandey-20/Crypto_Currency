import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyCoinsListService } from 'src/app/services/currency-coins-list.service';
import { ChartOptions, ChartDataSets, ChartType,ChartConfiguration } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';
import { CurrencyService } from 'src/app/services/currency.service';
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
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [{
      data:[],
      label:"fffffff"
    }
  ];

  constructor(
    private _service: CurrencyCoinsListService,
    private _activeRouter: ActivatedRoute,
    private _currencyService:CurrencyService
  ) {}

  ngOnInit(): void {
    this._activeRouter.params.subscribe((res: any) => {
      this.coinId = res.id;
    });
    this.getCurrencyById();
    this.getGraphicalData();
    this._currencyService.getCurrentCurrency().subscribe((res)=> {
      this.currency = res;
      this.getCurrencyById();
      this.getGraphicalData();
    });
  }

  getCurrencyById() {
    this._service.getCurrencyById(this.coinId).subscribe((res: any) => {
      console.log(res,'resresresresres');
      this.coinData = res;
    });
  }


  getGraphicalData(){
    this._service.getGraphicalCurrencyData(this.coinId,this.currency,1).subscribe((res)=>{
      this.barChartData[0].data = res.prices.map((a:any)=>{
        console.log(a);
        
        return a[1];
      })
      this.barChartLabels = res.prices.map((a:any)=>{
        const date = new Date(a[0]);
        let time = date.getHours()>12 ? `${date.getHours() - 12} : ${date.getMinutes()} PM` : `${date.getHours()} : ${date.getMinutes()} AM`
        return this.days === 1 ? time:date.toLocaleDateString();
      });
    });
  }
}
