import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login'
import { DashboardComponent } from './dashboard'
import { UserListComponent } from './user-list'

import { AuthGuardService } from './services'

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
