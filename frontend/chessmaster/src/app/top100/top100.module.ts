import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Top100mainComponent } from './top100main/top100main.component';
import { Top100RoutingModule  } from './top100-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [Top100mainComponent],
  imports: [
    CommonModule,
    RouterModule,
    Top100RoutingModule
  ]
})
export class Top100Module { }
