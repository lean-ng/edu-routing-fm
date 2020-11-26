import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatsGlobalComponent} from './pages/stats-global/stats-global.component';
import {StatsDetailsComponent} from './pages/stats-details/stats-details.component';

const routes: Routes = [
  { path: 'stats', component: StatsGlobalComponent },
  { path: 'stats/details/:country', component: StatsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule { }
