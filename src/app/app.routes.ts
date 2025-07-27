import { Routes } from '@angular/router';
import { DashboardComponent } from './Page/dashboard.component';
import { RightSideComponent } from './Page/rightSide.component';
import { BankComponent } from './Page/bank.component';
import { TransactionComponent } from './Page/transaction.component';
import { PaymentComponent } from './Page/payment.component';
import { HomeComponent } from './Page/home.component';
import { LoginComponent } from './Page/login.component';
import { SignupComponent } from './Page/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminHomeComponent },
      { path: 'userManagement', component: UserManagementComponent },
      { path: 'createUser', component: CreateUserComponent },
    ]
   },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: RightSideComponent },
      { path: 'bank', component: BankComponent },
      { path: 'transaction', component: TransactionComponent },
      { path: 'payment', component: PaymentComponent },
       { path: 'withdrawal', component: WithdrawComponent }
    ]
  },
  // fallback route if user enters unknown URL
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
