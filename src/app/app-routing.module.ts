import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {environment} from '../environments/environment';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule),
    canLoad: [AuthGuard]
  },
  // Catch-All Route
  // Route order matters (Reihenfolge ist wichtig, catch-all Route muss(!) am Ende stehen)
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
    //  enableTracing: !environment.production
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
