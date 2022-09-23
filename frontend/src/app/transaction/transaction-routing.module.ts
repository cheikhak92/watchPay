import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransactionPage } from './transaction.page';


const routes: Routes = [
  {
    path: '',
    component: TransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
})
export class TransactionPageRoutingModule {}
