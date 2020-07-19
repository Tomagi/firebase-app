import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HighlighterDirective } from './directives/highlighter.directive';
import {  CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [NavbarComponent, HighlighterDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    HighlighterDirective
  ]
})
export class SharedModule { }
