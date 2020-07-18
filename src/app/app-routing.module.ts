import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    //pathMatch: 'full',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'planner',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/planner/planner.module').then((m) => m.PlannerModule),
  },
  {
    path: 'mytrips',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/mytrips/mytrips.module').then((m) => m.MytripsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
