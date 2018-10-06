import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerificationComponent } from './verification/verification.component';
import { IdentificationComponent } from './identification/identification.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  children: [{
    path: 'verify',
    component: VerificationComponent
  },
  {
    path: 'identify',
    component: IdentificationComponent
  },
  {
    path: '',
    redirectTo: 'verify',
    pathMatch: 'full'
  }]
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
