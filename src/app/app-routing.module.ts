import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OdsConfigComponent} from './ods-config/ods-config.component';
import {OverviewComponent} from './overview/overview.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'odsConfig', component: OdsConfigComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
