import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { IonicModule } from '@ionic/angular';

import { TransactionListPageRoutingModule } from './transaction-list-routing.module';

import { TransactionListPage } from './transacton-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionListPageRoutingModule,
    Ng2SearchPipeModule

  ],
  declarations: [TransactionListPage]
})
export class TransactionListPageModule {}
