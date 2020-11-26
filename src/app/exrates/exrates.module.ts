import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExratesRoutingModule } from './exrates-routing.module';
import { ExratesShellComponent } from './pages/exrates-shell/exrates-shell.component';


@NgModule({
  declarations: [ExratesShellComponent],
  imports: [
    CommonModule,
    ExratesRoutingModule
  ]
})
export class ExratesModule { }
