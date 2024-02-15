import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrencyCoinsListService } from 'src/app/services/currency-coins-list.service';
import { CurrencyService } from 'src/app/services/currency.service';
@Component({
  selector: 'app-currency-coin-list',
  templateUrl: './currency-coin-list.component.html',
  styleUrls: ['./currency-coin-list.component.scss'],
})
export class CurrencyCoinListComponent implements OnInit {
  bannerData: any =[]

  currencyData:any =[]
  currency:string = "INR";
  displayedColumns: string[] = ['symbol','id','current_price', 'price_change_percentage_24h', 'market_cap'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _service: CurrencyCoinsListService,private _router:Router,private _currencyService:CurrencyService) {}

  ngOnInit(): void {
    this.getTrendingData();
    this.getAllCurrencyData();
    this._currencyService.getCurrentCurrency().subscribe((res)=> {
      this.currency = res;
      this.getTrendingData();
      this.getAllCurrencyData();
    });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getAllCurrencyData() {
    this._service.getCurrencyData(this.currency).subscribe((res) => {
      this.currencyData = res;
      this.dataSource = new MatTableDataSource(this.currencyData);
    });
  }

  getTrendingData() {
    this._service.getTrendingCurrency(this.currency).subscribe((res) => {
      this.bannerData = res;
    });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  selectedRow(row:any){
    this._router.navigateByUrl(`coins-details/${row.id}`)
  }
}


// {
//   id: 'bitcoin',
//   symbol: 'btc',
//   name: 'Bitcoin',
//   image:
//     'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
//   current_price: 3566200,
//   market_cap: 69986725034165,
//   market_cap_rank: 1,
//   fully_diluted_valuation: 74932662563085,
//   total_volume: 1954348811500,
//   high_24h: 3636974,
//   low_24h: 3549563,
//   price_change_24h: -37723.33075794857,
//   price_change_percentage_24h: -1.04673,
//   market_cap_change_24h: -834207824486.6719,
//   market_cap_change_percentage_24h: -1.17791,
//   circulating_supply: 19613893.0,
//   total_supply: 21000000.0,
//   max_supply: 21000000.0,
//   ath: 5128383,
//   ath_change_percentage: -30.43579,
//   ath_date: '2021-11-10T14:24:11.849Z',
//   atl: 3993.42,
//   atl_change_percentage: 89234.93989,
//   atl_date: '2013-07-05T00:00:00.000Z',
//   roi: null,
//   last_updated: '2024-01-31T08:53:28.675Z',
// },