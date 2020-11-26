import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsGlobalComponent } from './pages/stats-global/stats-global.component';
import { StatsDetailsComponent } from './pages/stats-details/stats-details.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [StatsGlobalComponent, StatsDetailsComponent],
  imports: [
    CommonModule,
    StatsRoutingModule,
    MatListModule,
    MatButtonModule,
    SharedModule
  ]
})
export class StatsModule { }
