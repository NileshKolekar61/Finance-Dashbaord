import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestComponent } from './invest/invest.component';

const routes: Routes = [
  {
    path: '',
    component: InvestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestRoutingModule { }
