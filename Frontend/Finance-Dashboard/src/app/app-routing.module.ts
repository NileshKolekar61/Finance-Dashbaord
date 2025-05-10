import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent 
  },
  {
    path: 'finance',
    component: MainComponent,
    children: [
      {
        path: 'dashbaord',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      }, 
      {
        path: 'income',
        loadChildren: () => import('./income/income.module').then(m => m.IncomeModule),
      }, 
      {
        path: 'expenses',
        loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule),
      }, 
      {
        path: 'invest',
        loadChildren: () => import('./invest/invest.module').then(m => m.InvestModule),
      }, 
      {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule),
      }, 
      {
        path: 'accounts',
        loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule),
      }, 
      {
        path: '',
        redirectTo: 'dashbaord',
        pathMatch: 'full'
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
