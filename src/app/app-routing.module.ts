import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';
import { OrgDashboardComponent } from './pages/org-dashboard/org-dashboard.component';
import { RootComponent } from './pages/root/root.component';
import { TeamDashboardComponent } from './pages/team-dashboard/team-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: RootComponent,
    canActivate: [AuthGuard],
    children:
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'my-dashboard', component: MyDashboardComponent },
        { path: 'team-dashboard', component: TeamDashboardComponent },
        { path: 'org-dashboard', component: OrgDashboardComponent },
        { path: 'manage-users', component: ManageUsersComponent },
      ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
