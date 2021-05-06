import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcomainComponent } from './ecomain/ecomain.component';

const routes: Routes = [{ path: '', component: EcomainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcoRoutingModule {}