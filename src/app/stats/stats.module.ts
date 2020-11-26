import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsGlobalComponent } from './pages/stats-global/stats-global.component';
import { StatsDetailsComponent } from './pages/stats-details/stats-details.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [StatsGlobalComponent, StatsDetailsComponent],
  imports: [
    CommonModule,
    StatsRoutingModule,
    MatListModule,
    MatButtonModule
  ]
})
export class StatsModule { }
