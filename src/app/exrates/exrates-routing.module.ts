import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExratesShellComponent} from './pages/exrates-shell/exrates-shell.component';

const routes: Routes = [
  { path: 'exrates' , component: ExratesShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExratesRoutingModule { }
