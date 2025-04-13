import { Routes } from '@angular/router';
import { DashboardComponent } from './Page/dashboard.component';
import { RightSideComponent } from './Page/rightSide.component';
import { BankComponent } from './Page/bank.component';
import { TransactionComponent } from './Page/transaction.component';
import { PaymentComponent } from './Page/payment.component';
import { HomeComponent } from './Page/home.component';
import { LoginComponent } from './Page/login.component';
import { SignupComponent } from './Page/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
    {
        path: '',
        redirectTo: 'dashboard/home',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'home', component: RightSideComponent },
          { path: 'bank', component: BankComponent },
          { path: 'transaction', component: TransactionComponent },
          { path: 'payment', component: PaymentComponent }
          // Add more child routes here
        ]
      }
];
