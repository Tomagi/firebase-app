import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytripsRoutingModule } from './mytrips-routing.module';
import { MytripsComponent } from './mytrips.component';


@NgModule({
  declarations: [MytripsComponent],
  imports: [
    CommonModule,
    MytripsRoutingModule
  ]
})
export class MytripsModule { }
