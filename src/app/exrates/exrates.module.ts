import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExratesRoutingModule } from './exrates-routing.module';
import { ExratesShellComponent } from './pages/exrates-shell/exrates-shell.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { ExratesWelcomeComponent } from './components/exrates-welcome/exrates-welcome.component';
import { ExratesRatesComponent } from './components/exrates-rates/exrates-rates.component';
import {MatListModule} from '@angular/material/list';
import { SidebarAComponent } from './components/sidebar-a/sidebar-a.component';
import { SidebarBComponent } from './components/sidebar-b/sidebar-b.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ExratesShellComponent, CurrencyListComponent, ExratesWelcomeComponent, ExratesRatesComponent, SidebarAComponent, SidebarBComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExratesRoutingModule,
    MatListModule
  ]
})
export class ExratesModule { }
