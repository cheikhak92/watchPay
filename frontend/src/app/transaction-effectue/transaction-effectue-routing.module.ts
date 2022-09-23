import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionEffectuePage } from './transaction-effectue.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionEffectuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionEffectuePageRoutingModule {}
