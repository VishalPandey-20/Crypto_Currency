import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyCoinListComponent } from './components/currency-coin-list/currency-coin-list.component';
import { CurrencyCoinDetailsComponent } from './components/currency-coin-details/currency-coin-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'coins-list', pathMatch: 'full' },
  { path: 'coins-list', component: CurrencyCoinListComponent },
  { path: 'coins-details/:id', component: CurrencyCoinDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
