import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';
import { TeamDashboardComponent } from './pages/team-dashboard/team-dashboard.component';
import { OrgDashboardComponent } from './pages/org-dashboard/org-dashboard.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './pages/root/root.component';
import { MaterialModule } from './modules/material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyDashboardComponent,
    TeamDashboardComponent,
    OrgDashboardComponent,
    ManageUsersComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
