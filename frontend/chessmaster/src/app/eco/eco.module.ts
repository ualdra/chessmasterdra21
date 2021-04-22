import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomainComponent } from './ecomain/ecomain.component';

import { EcoRoutingModule  } from './eco-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EcomainComponent],
  imports: [
    CommonModule,
    RouterModule,
    EcoRoutingModule
  ]
})
export class EcoModule { }
