import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MytripsComponent } from './mytrips.component';

const routes: Routes = [{ path: '', component: MytripsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MytripsRoutingModule { }
