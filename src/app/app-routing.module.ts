import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SettingsComponent } from './settings/settings.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'getUsers', component: UserListComponent },
  { path: 'addUser', component: UserFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'settings', component: SettingsComponent }

];

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   {
//     path: 'app',
//     canActivate: [AppGuard],
//     component: LayoutComponent,
//     children: [
//       { path: 'dashboard', component: DashboardComponent },
//       { path: 'settings', component: SettingsComponent },
//       { path: 'getUsers', component: CustomerListComponent },
//       { path: 'addUser', component: CustomerFormComponent },
//       { path: 'login', component: LoginFormComponent }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }