import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestRoutingModule } from './invest-routing.module';
import { InvestComponent } from './invest/invest.component';


@NgModule({
  declarations: [
  
    InvestComponent
  ],
  imports: [
    CommonModule,
    InvestRoutingModule
  ]
})
export class InvestModule { }
