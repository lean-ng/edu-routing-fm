import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExratesShellComponent} from './pages/exrates-shell/exrates-shell.component';
import {ExratesWelcomeComponent} from './components/exrates-welcome/exrates-welcome.component';
import {ExratesRatesComponent} from './components/exrates-rates/exrates-rates.component';
import {SidebarAComponent} from './components/sidebar-a/sidebar-a.component';
import {SidebarBComponent} from './components/sidebar-b/sidebar-b.component';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'exrates',
    component: ExratesShellComponent,
    canActivateChild: [AuthGuard],
    children: [
      {path: '', component: ExratesWelcomeComponent},
      {path: '', component: SidebarAComponent, outlet: 'aside'},
      {path: ':currency', component: ExratesRatesComponent,
        canActivate: [AuthGuard]
      },
      {path: ':currency', component: SidebarBComponent, outlet: 'aside'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExratesRoutingModule { }
