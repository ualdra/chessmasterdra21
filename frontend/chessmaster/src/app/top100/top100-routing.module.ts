import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Top100mainComponent } from './top100main/top100main.component';

const routes: Routes = [{ path: '', component: Top100mainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Top100RoutingModule {}