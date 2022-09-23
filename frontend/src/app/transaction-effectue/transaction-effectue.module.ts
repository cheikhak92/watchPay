import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionEffectuePageRoutingModule } from './transaction-effectue-routing.module';

import { TransactionEffectuePage } from './transaction-effectue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionEffectuePageRoutingModule
  ],
  declarations: [TransactionEffectuePage]
})
export class TransactionEffectuePageModule {}
